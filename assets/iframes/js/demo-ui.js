// external/iframes/js/demo-ui.js
// Shared caption-TeX builders and accessible native controls for converted
// ILA demos. Load with a plain <script> after js/demo.js, js/demo-theme.js
// and js/demo-labels.js.
// Depends on: Color (demo.js); texColor, renderMath, mathJaxReady, renderChain
// (js/mathjax-setup.js).

// ── TeX builders ─────────────────────────────────────────────────────────
// Replace demo.js texVector / texMatrix / texCombo, whose colours are CSS
// strings that MathJax may reject.

// Number for TeX; avoids "-0.00". prec < 0 = short raw value (demo.js precision: -1).
function fmt(x, prec) {
  prec = prec == null ? 2 : prec;
  if (prec < 0) return String(+(+x).toFixed(4));
  var eps = 0.5 * Math.pow(10, -prec);
  return (Math.abs(x) < eps ? 0 : x).toFixed(prec);
}

// Accept a demo.js Color, an [r,g,b(,a)] array, or a colour name/hex string.
function asColor(c) {
  if (c == null) return null;
  if (c instanceof Color) return c;
  if (Array.isArray(c)) return new Color(c[0], c[1], c[2]);
  return new Color(c);
}

// Optionally coloured TeX.
function texC(color, tex) {
  color = asColor(color);
  return color ? '\\color' + texColor(color) + '{' + tex + '}' : tex;
}

// Column vector.
function texVec(v, color, dim, prec) {
  dim = dim || v.length;
  var body = '\\begin{bmatrix}' +
    v.slice(0, dim).map(function (x) { return fmt(x, prec); }).join('\\\\') +
    '\\end{bmatrix}';
  return texC(color, body);
}

// Matrix given as an array of COLUMNS (demo.js convention).
//   opts: rows, cols, precision, colors (one per column)
function texMat(cols, opts) {
  opts = opts || {};
  var nc = opts.cols != null ? opts.cols : cols.length;
  var nr = opts.rows != null ? opts.rows : cols[0].length;
  var prec = opts.precision != null ? opts.precision : 2;
  var rows = [];
  for (var r = 0; r < nr; r++) {
    var row = [];
    for (var c = 0; c < nc; c++) {
      var e = fmt(cols[c][r], prec);
      row.push(opts.colors ? texC(opts.colors[c], e) : e);
    }
    rows.push(row.join('&'));
  }
  return '\\begin{bmatrix}' + rows.join('\\\\') + '\\end{bmatrix}';
}

// Linear combination c1 v1 + c2 v2 + ... (same formatting rules as demo.js:
// coefficient 1 omitted, -1 shown as "-", negatives carry their own sign).
//   opts: colors (per vector), coeffColors (per coefficient or single), dim, precision
function texComb(vectors, coeffs, opts) {
  opts = opts || {};
  var cc = opts.coeffColors;
  var out = '';
  vectors.forEach(function (v, i) {
    var ccol = Array.isArray(cc) && !(typeof cc[0] === 'number') ? cc[i] : cc;
    if (coeffs[i] !== 1) {
      out += texC(ccol, coeffs[i] === -1 ? '-' : fmt(coeffs[i], opts.precision));
    }
    out += texVec(v, opts.colors ? opts.colors[i] : null, opts.dim, opts.precision);
    if (i + 1 < vectors.length && coeffs[i + 1] >= 0) out += ' + ';
  });
  return out;
}

// ── Demo options ─────────────────────────────────────────────────────────
// Canvas element + original ILA MathBox settings; extra keys merged in.
function mbOpts(id, extra) {
  var o = {
    element: document.getElementById(id),
    mathbox: { warmup: 10, splash: false, inspect: false }
  };
  if (extra) for (var k in extra) if (Object.prototype.hasOwnProperty.call(extra, k)) o[k] = extra[k];
  return o;
}

// ── MathJax for JS-created content ───────────────────────────────────────
// Typeset \( \) inside an element created after load. Chained on the shared
// renderChain so it never runs concurrently with renderMath.
function typesetIn(el) {
  renderChain = renderChain
    .then(function () { return mathJaxReady; })
    .then(function () { return MathJax.typesetPromise([el]); })
    .catch(function (err) { console.error('MathJax typeset failed:', err); });
}

// ── Native controls (WCAG 2.1.1 / 2.5.1 replacements for dat.GUI & dragging) ─

// Labelled range slider in a 3-column .slider-grid.
//   opts: name (plain text, accessible name), tex | labelHtml, id, min, max,
//         step, value, unit, onInput(value)
// Returns { input, set(value) }.
function buildSlider(container, opts) {
  var id = opts.id || 'slider-' + opts.name.replace(/\W/g, '_');
  var label = document.createElement('label');
  label.setAttribute('for', id);
  if (opts.labelHtml != null) label.innerHTML = opts.labelHtml;
  else label.textContent = '\\(' + (opts.tex != null ? opts.tex : opts.name) + '\\) =';
  var input = document.createElement('input');
  input.type  = 'range';
  input.id    = id;
  input.min   = opts.min;
  input.max   = opts.max;
  input.step  = opts.step;
  input.value = opts.value;
  input.setAttribute('aria-label', opts.name);
  var val = document.createElement('span');
  val.className = 'slider-val';
  function show(v) {
    var s = (+v).toFixed(2);
    val.textContent = s;
    input.setAttribute('aria-valuetext', opts.name + ' equals ' + s + (opts.unit ? ' ' + opts.unit : ''));
  }
  show(opts.value);
  input.addEventListener('input', function () {
    var v = parseFloat(input.value);
    show(v);
    opts.onInput(v);
  });
  container.appendChild(label);
  container.appendChild(input);
  container.appendChild(val);
  if (/\\\(/.test(label.textContent) || /\\\(/.test(label.innerHTML)) typesetIn(label);
  return { input: input, set: function (v) { input.value = v; show(v); } };
}

// Number inputs for one or more vectors; inputs write into the same arrays
// demo.js draggable mutates.
//   specs: [{ name, ariaName?, tex, vec, dim, range?, step?, constrain?(vec, old) }]
//   constrain lets typed values follow the same snapping/locking as dragging.
//   onInput(specIndex) runs after a committed change.
// Returns { sync(), setDisabled(specIndex, bool) }.
function buildVectorEditor(container, specs, range, onInput) {
  var entries = [];
  specs.forEach(function (spec, si) {
    var r = spec.range != null ? spec.range : range;
    var row = document.createElement('div');
    row.className = 'vec-row';
    var lab = document.createElement('span');
    lab.className = 'vec-label';
    lab.setAttribute('aria-hidden', 'true');
    lab.textContent = '\\(' + spec.tex + '\\) :';
    row.appendChild(lab);
    var inputs = [];
    for (var k = 0; k < spec.dim; k++) {
      (function (k) {
        var inp = document.createElement('input');
        inp.type  = 'number';
        inp.min   = -r;
        inp.max   =  r;
        inp.step  = spec.step || '0.1';
        inp.value = +(+spec.vec[k]).toFixed(2);
        inp.setAttribute('aria-label', (spec.ariaName || spec.name) + ' component ' + (k + 1));
        // WCAG 2.5.2: 'change' commits on Enter/blur, not every keystroke
        inp.addEventListener('change', function () {
          var old = spec.vec.slice();
          var x = parseFloat(inp.value);
          if (isFinite(x)) spec.vec[k] = Math.max(-r, Math.min(r, x));
          if (spec.constrain) spec.constrain(spec.vec, old);
          onInput(si);
          sync();
        });
        inputs.push(inp);
        row.appendChild(inp);
      })(k);
    }
    entries.push({ spec: spec, inputs: inputs });
    container.appendChild(row);
  });
  typesetIn(container);
  function sync() {
    entries.forEach(function (e) {
      e.inputs.forEach(function (inp, k) {
        if (document.activeElement !== inp) inp.value = +(+e.spec.vec[k]).toFixed(2);
      });
    });
  }
  return {
    sync: sync,
    setDisabled: function (si, dis) {
      entries[si].inputs.forEach(function (inp) { inp.disabled = !!dis; });
    }
  };
}

// Checkbox with label (label may contain \( \) math).
//   opts: id, label (HTML), checked, onChange(bool)
// Returns { input, set(bool) }.
function addCheckbox(container, opts) {
  var wrap = document.createElement('span');
  wrap.className = 'check-row';
  var box = document.createElement('input');
  box.type = 'checkbox';
  box.id = 'chk-' + opts.id;
  box.checked = !!opts.checked;
  box.addEventListener('change', function () { opts.onChange(box.checked); });
  var lab = document.createElement('label');
  lab.setAttribute('for', box.id);
  lab.innerHTML = opts.label;
  wrap.appendChild(box);
  wrap.appendChild(lab);
  container.appendChild(wrap);
  if (/\\\(/.test(opts.label)) typesetIn(lab);
  return { input: box, set: function (v) { box.checked = !!v; } };
}

// Push button.  opts: label (HTML), ariaLabel?, onClick
function addButton(container, opts) {
  var b = document.createElement('button');
  b.type = 'button';
  b.className = 'ctl';
  b.innerHTML = opts.label;
  if (opts.ariaLabel) b.setAttribute('aria-label', opts.ariaLabel);
  b.addEventListener('click', opts.onClick);   // WCAG 2.5.2: up-event
  container.appendChild(b);
  if (/\\\(/.test(opts.label)) typesetIn(b);
  return b;
}

// ── Fullscreen toggle (works standalone; may be blocked when embedded) ───
function initFullscreenButton(id) {
  var btn = document.getElementById(id);
  if (!btn) return;
  function isFS() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }
  function updateLabel() {
    var label = isFS() ? 'Exit fullscreen' : 'Toggle fullscreen';
    btn.textContent = isFS() ? '✕' : '⛶';
    btn.title = label;
    btn.setAttribute('aria-label', label);
  }
  btn.addEventListener('click', function () {
    var el = document.documentElement, p;
    if (!isFS()) {
      var req = el.requestFullscreen || el.webkitRequestFullscreen;
      if (req) p = req.call(el);
    } else {
      var exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) p = exit.call(document);
    }
    if (p && p.catch) p.catch(function () {});
  });
  ['fullscreenchange', 'webkitfullscreenchange']
    .forEach(function (e) { document.addEventListener(e, updateLabel); });
}
