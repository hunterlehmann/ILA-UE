// external/iframes/js/mathjax-setup.js
// Shared MathJax setup for all converted ILA demos.
// Load with a plain (not defer/async) <script> in <head>, before demo code.

// MathJax build URL. Keep this IDENTICAL to the URL the book page loads, so the
// iframes reuse the copy the book has already downloaded (same URL = same
// cache entry). If the book pins a version, pin it here too.
var MATHJAX_SRC = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js';

(function () {
  // Book-wide macros. Copy definitions from the book's docinfo.
  var bookMacros = {
    // R: '\\mathbb{R}',
    // mhp: ['\\class{theme-math-highlight-purple}{#1}', 1],
  };
  // Optional per-demo additions: set window.MATHJAX_EXTRA_MACROS before this file.
  var macros = Object.assign({}, bookMacros, window.MATHJAX_EXTRA_MACROS || {});

  window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      packages:   { '[+]': ['color'] },
      macros:     macros
    },
    loader:  { load: ['[tex]/color'] },
    startup: { typeset: false }
  };

  // ── Deferred loading ──────────────────────────────────────────────────────
  // Adding the MathJax script while the iframe is still loading makes it part
  // of the iframe's load, which delays the BOOK page's load event, and every
  // iframe downloads MathJax in parallel with the book's own copy. Instead:
  //   1. wait for this iframe's own load event (so the iframe no longer holds
  //      up the book page), then
  //   2. if embedded in a same-origin book page that uses MathJax, wait for the
  //      book's MathJax to finish its startup/typesetting, then
  //   3. add the script (by then usually served from the browser cache).
  // renderMath, mathJaxReady and the .mathjax-static pass below already wait
  // for MathJax, so demos need no changes; their math simply appears a moment
  // after the book's.

  var PARENT_WAIT_MS = 15000;   // never wait longer than this for the book

  function injectMathJax() {
    var s = document.createElement('script');
    s.src = MATHJAX_SRC;
    s.async = true;
    document.head.appendChild(s);
  }

  // Resolves when the book page's MathJax is done, or immediately if there is
  // no same-origin parent using MathJax, or after PARENT_WAIT_MS at most.
  function parentMathDone() {
    var parentMJ;
    try {
      if (window.parent === window) return Promise.resolve();       // standalone
      parentMJ = window.parent.MathJax;                              // throws if cross-origin
    } catch (e) {
      return Promise.resolve();
    }
    if (!parentMJ) return Promise.resolve();                         // book page has no MathJax

    return new Promise(function (resolve) {
      var start = Date.now();
      (function poll() {
        var mj = window.parent.MathJax;
        // The book's MathJax may still only be its config object; wait for startup
        if (mj && mj.startup && mj.startup.promise) {
          mj.startup.promise.then(resolve, resolve);
        } else if (Date.now() - start > PARENT_WAIT_MS) {
          resolve();
        } else {
          setTimeout(poll, 100);
        }
      })();
      setTimeout(resolve, PARENT_WAIT_MS);                           // hard cap
    });
  }

  function start() {
    parentMathDone().then(function () { setTimeout(injectMathJax, 0); });
  }

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();

// Resolves once MathJax has loaded and finished startup.
var mathJaxReady = new Promise(function (resolve) {
  function check() {
    if (window.MathJax && MathJax.startup && MathJax.startup.promise) {
      MathJax.startup.promise.then(resolve);
    } else {
      setTimeout(check, 30);
    }
  }
  check();
});

// demo.js Color → \color[rgb]{r,g,b} spec.
function texColor(color) {
  var a = color.arr();
  var scale = (a[0] > 1 || a[1] > 1 || a[2] > 1) ? 255 : 1;
  return '[rgb]{' + [a[0], a[1], a[2]].map(function (c) {
    return (c / scale).toFixed(3);
  }).join(',') + '}';
}

// Coalescing renderer: only the latest TeX per element is typeset.
var pendingTex = new Map();
var renderChain = Promise.resolve();
function renderMath(tex, el) {
  var alreadyQueued = pendingTex.has(el);
  pendingTex.set(el, tex);
  if (alreadyQueued) return;
  renderChain = renderChain
    .then(function () { return mathJaxReady; })
    .then(function () {
      var latest = pendingTex.get(el);
      pendingTex.delete(el);
      MathJax.texReset();
      return MathJax.tex2chtmlPromise(latest, { display: false }).then(function (node) {
        el.replaceChildren(node);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    })
    .catch(function (err) { console.error('MathJax render failed:', err); });
}

// Typeset static \( \) math once both the DOM and MathJax are ready.
// The DOM check matters here because this file runs from <head>.
(function () {
  var domReady = new Promise(function (resolve) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
  Promise.all([domReady, mathJaxReady]).then(function () {
    return MathJax.typesetPromise(
      Array.prototype.slice.call(document.querySelectorAll('.mathjax-static'))
    );
  });
})();
