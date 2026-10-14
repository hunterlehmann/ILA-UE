/*  rabbits.js
 *
 *  Self-contained rabbit-population Leslie-matrix widget for ILA / PreTeXt.
 *  Included in rabbits.ptx via:
 *
 *      <script source="../assets/jslibrary/rabbits.js"/>
 *
 *  No other <script> tags are needed in the .ptx file.
 *  This file loads Plotly from CDN dynamically, so it is independent
 *  of script-load order in the generated iframe HTML.
 *
 *  Initialisation sequence
 *  =======================
 *  1. Wait for the DOM to be parsed (DOMContentLoaded / readyState check).
 *  2. Inject a <script> tag for Plotly CDN if window.Plotly is not yet
 *     present; call back once Plotly is loaded.
 *  3. Build the widget inside <div id="rabbits"> (the slate surface).
 *
 *  Leslie matrix
 *  =============
 *  Three age cohorts: 0–1, 1–2, 2–3 years.
 *
 *      | 0   6   8 |
 *  L = | 1/2 0   0 |
 *      | 0  1/2  0 |
 *
 *  Birth rates: 6 kits/yr (age 1–2), 8 kits/yr (age 2–3).
 *  Survival:    50 % of each cohort advances to next bracket.
 *  Dominant eigenvalue: 2  (population doubles each year at steady state).
 *  Steady-state eigenvector ratios: [16 : 4 : 1].
 */

(function () {

  /* ── Step 1: wait for DOM ─────────────────────────────────────────────── */

  function onDOMReady(fn) {
    if (document.readyState !== 'loading') {
      fn();          // DOM already parsed (scripts at end of body)
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* ── Step 2: ensure Plotly is available ──────────────────────────────── */

  function withPlotly(fn) {
    if (window.Plotly) {
      fn();          // Plotly already present (e.g. loaded earlier on the page)
      return;
    }
    var s = document.createElement('script');
    s.src = 'https://cdn.plot.ly/plotly-2.35.2.min.js';
    s.onload  = fn;
    s.onerror = function () {
      console.error('rabbits.js: failed to load Plotly from CDN.');
    };
    document.head.appendChild(s);
  }

  /* ── Step 3: build the widget ────────────────────────────────────────── */

  function initWidget() {

    var root = document.getElementById('rabbits');
    if (!root) {
      console.error('rabbits.js: <div id="rabbits"> not found in the DOM.');
      return;
    }

    root.style.cssText =
      'font-family:inherit;display:flex;flex-wrap:wrap;' +
      'gap:1em;padding:0.75em;box-sizing:border-box;';

    /* ── DOM helper ─────────────────────────────────────────────────── */

    function el(tag, attrs, styles) {
      var e = document.createElement(tag);
      if (attrs)  Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
      if (styles) Object.keys(styles).forEach(function (k) { e.style[k] = styles[k]; });
      return e;
    }

    /* ════════════════════════════════════════════════════════════════════
       LEFT COLUMN — controls
       ════════════════════════════════════════════════════════════════════ */

    var left = el('div', {}, { flex: '1', minWidth: '180px' });
    root.appendChild(left);

    /* — Randomize button — */
    var btnWrap = el('div', {}, { textAlign: 'center', marginBottom: '1em' });
    left.appendChild(btnWrap);

    var btnRandom = el('button', { type: 'button' }, {
      padding: '0.4em 0.8em', cursor: 'pointer'
    });
    btnRandom.textContent = 'Randomize starting population';
    btnWrap.appendChild(btnRandom);

    /* — Number inputs for each cohort — */
    var cohorts = [
      { id: 'rabbits-zero', label: 'Age 0\u20131' },
      { id: 'rabbits-one',  label: 'Age 1\u20132' },
      { id: 'rabbits-two',  label: 'Age 2\u20133' }
    ];

    cohorts.forEach(function (g) {
      var row = el('div', {}, {
        display: 'flex', alignItems: 'center',
        gap: '0.5em', marginBottom: '0.5em'
      });
      var lbl = el('span', {}, { width: '5em', display: 'inline-block' });
      lbl.textContent = g.label;
      var inp = el('input', { id: g.id, type: 'number', min: '1' }, { width: '6em' });
      row.appendChild(lbl);
      row.appendChild(inp);
      left.appendChild(row);
    });

    /* ════════════════════════════════════════════════════════════════════
       RIGHT COLUMN — advance button + Plotly pie chart
       ════════════════════════════════════════════════════════════════════ */

    var right = el('div', {}, { flex: '2', minWidth: '220px' });
    root.appendChild(right);

    var advWrap = el('div', {}, { textAlign: 'center', marginBottom: '0.5em' });
    right.appendChild(advWrap);

    var btnAdvance = el('button', { type: 'button' }, {
      padding: '0.4em 0.8em', cursor: 'pointer'
    });
    btnAdvance.textContent = 'Advance 1 year';
    advWrap.appendChild(btnAdvance);

    var plotDiv = el('div', { id: 'rabbits-plot' }, { width: '100%', height: '220px' });
    right.appendChild(plotDiv);

    /* ── input references ───────────────────────────────────────────── */

    var zeroInp = document.getElementById('rabbits-zero');
    var oneInp  = document.getElementById('rabbits-one');
    var twoInp  = document.getElementById('rabbits-two');

    /* ════════════════════════════════════════════════════════════════════
       LOGIC
       ════════════════════════════════════════════════════════════════════ */

    function getVals() {
      return [
        Math.max(1, parseInt(zeroInp.value) || 1),
        Math.max(1, parseInt(oneInp.value)  || 1),
        Math.max(1, parseInt(twoInp.value)  || 1)
      ];
    }

    function setData() {
      var v   = getVals();
      var den = v[2];
      var vals = [v[0] / den, v[1] / den, 1];
      Plotly.restyle(plotDiv, 'values', [vals]);
      Plotly.restyle(plotDiv, 'text', [[
        vals[0].toFixed(3),
        vals[1].toFixed(3),
        '1.000'
      ]]);
    }

    function randomize() {
      zeroInp.value = Math.floor(Math.random() * 99) + 1;
      oneInp.value  = Math.floor(Math.random() * 99) + 1;
      twoInp.value  = Math.floor(Math.random() * 99) + 1;
      setData();
    }

    function advance() {
      var v = getVals();
      zeroInp.value = 6 * v[1] + 8 * v[2];
      oneInp.value  = Math.floor(v[0] / 2);
      twoInp.value  = Math.floor(v[1] / 2);
      setData();
    }

    function attachClamp(inp) {
      inp.addEventListener('change', function () {
        var val = parseFloat(inp.value);
        inp.value = (isNaN(val) || val < 1) ? 1 : Math.floor(val);
        setData();
      });
    }

    /* ════════════════════════════════════════════════════════════════════
       PLOTLY INITIALISATION
       ════════════════════════════════════════════════════════════════════ */

    Plotly.newPlot(
      plotDiv,
      [{
        type:      'pie',
        values:    [1, 1, 1],
        labels:    ['Age 0\u20131', 'Age 1\u20132', 'Age 2\u20133'],
        hoverinfo: 'label',
        textinfo:  'text',
        text:      ['1.000', '1.000', '1.000'],
        sort:       false,
        direction:  'clockwise'
      }],
      {
        height: 220,
        margin: { l: 0, r: 0, t: 0, b: 0 },
        legend: { x: 1, y: 0.5 }
      },
      { displayModeBar: false, responsive: true }
    );

    /* ── wire up events ─────────────────────────────────────────────── */

    btnRandom.addEventListener('click', function (e) {
      e.preventDefault();
      randomize();
    });

    btnAdvance.addEventListener('click', function (e) {
      e.preventDefault();
      advance();
    });

    attachClamp(zeroInp);
    attachClamp(oneInp);
    attachClamp(twoInp);

    randomize();   // start with a random population
  }

  /* ── Kick off the sequence ───────────────────────────────────────────── */

  onDOMReady(function () {
    withPlotly(initWidget);
  });

}());
