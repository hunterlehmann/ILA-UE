// external/iframes/js/mathjax-setup.js
// Shared MathJax setup for all converted ILA demos.
// Load with a plain (not defer/async) <script> in <head>, before demo code.

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

  // Match this version to the one the PreTeXt book loads.
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js';
  s.async = true;
  document.head.appendChild(s);
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