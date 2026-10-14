---
name: ila-to-pretext-interactive
description: "Use this skill whenever the user asks to convert an ILA (Interactive Linear Algebra) interactive to a PreTeXt interactive, or more generally when migrating any HTML/JS interactive (MathBox/demo.js, Plotly, JSXGraph, d3, or similar) into a PreTeXt book. Triggers: 'convert interactive', 'migrate to PreTeXt', 'ILA interactive', '<mathbox source=...>', 'demo.js', 'bundle.js', 'slate', any mention of a .html interactive file paired with demo.js or bundle.js."
---

# ILA → PreTeXt Interactive Conversion Skill

## The one rule that matters

**Always use the `@iframe` approach, not `platform="javascript"` + `<slate>`.**

The `platform="javascript"` path causes a blank interactive because:
- CDN `<script source="https://..."/>` tags inside `<interactive>` are unreliable (CSP and load-order issues in the generated iframe HTML)
- The slate `<div>` may not exist when an IIFE or `window.load` handler runs
- These failures are silent — the interactive compiles fine but renders blank

The `@iframe` approach works every time because the HTML file is fully self-contained and the browser handles it with no PreTeXt interference.

---

## Project file layout

```
project/
├── src/
│   └── section-X-Y.ptx          ← your section source
└── external/
    └── iframes/
        ├── js/demo.js            ← ILA MathBox bundle (shared by all MathBox demos)
        └── mywidget-if.html      ← the self-contained interactive page
```

The `external/` folder is PreTeXt's conventional home for iframe files.
The `iframes/` subfolder is the ILA convention (adapt to your project's actual structure).

---

## The PTX element

**CRITICAL: `<interactive>` must use non-self-closing tags** — it has required child elements.
A self-closing `<interactive ... />` drops the accessibility children.

**CRITICAL: `<description>` must contain one or more `<p>` elements** — it is a block container, not a text node. Bare text directly inside `<description>` is invalid.

```xml
<interactive xml:id="UNIQUE-ID"
             iframe="iframes/mywidget-if.html"
             width="100%"
             aspect="W:H">
  <shortdescription>
    <!-- FILL: Brief alt-text for this interactive (linear algebra context) -->
  </shortdescription>
  <description>
    <p>
      <!-- FILL: Complete accessibility description of this interactive for a linear algebra course -->
    </p>
  </description>
</interactive>
```

- `xml:id` — must be **unique across the entire book**; use a descriptive prefix (e.g., `demo-rabbits`, not just `rabbits`)
- `iframe` — path is **relative to `external/`**, not to the `.ptx` source file; query parameters are allowed and XML-escaped (`&` → `&amp;`)
- `aspect` — choose based on the widget's natural proportions (see table at end)
- `<shortdescription>` — brief alt-text phrase (one sentence, no markup); **fill in before publishing**
- `<description>` — full accessibility prose in `<p>` elements (use several `<p>` for longer descriptions); **fill in before publishing**

**Do not add a `permissions` attribute.** `permissions="fullscreen"` (or any `permissions` value) is not an allowed `<interactive>` attribute and fails schema validation. Leave it off entirely. See the Fullscreen section below.

---

## URL query parameters

If the original ILA interactive was driven by URL parameters (e.g., `func=`, `range=`, `v1=`, `camera1=`, `coeffs=`), **keep reading them from the URL** in the iframe HTML using the `urlParams` helper already present in `demo.js`. Do **not** hardcode them. Pass values through the `iframe` attribute query string so the same iframe HTML can be reused with different configurations throughout the book:

```xml
<interactive xml:id="demo-bestfit-linear"
             iframe="iframes/bestfit-if.html?func=A*x+B&amp;v1=0,1&amp;v2=2,3&amp;range=5"
             width="100%"
             aspect="2:1">
  ...
</interactive>
```

In the iframe JS, restore all `urlParams.get(...)` calls exactly as in the original ILA source:

```javascript
range   = urlParams.get('range',  'float', 10);
rangeZ  = urlParams.get('rangez', 'float', range);
funcStr = (ref = urlParams.func) != null ? ref : 'C*x+D';
i = 1;
while (urlParams['v' + i] != null) {
  target    = urlParams.get('v' + i, 'float[]');
  target[2] = 0;
  targets.push(target);
  i++;
}
camera: { position: urlParams.get('camera1', 'float[]', [3, 1.5, 1.5]) }
```

When URL params determine the *controls* (e.g., `coeffs=t,w` naming sliders), build those controls dynamically in JS so labels, `aria-label`s, and TeX formulas all use the URL-supplied names.

---

## Anatomy of the iframe HTML file

The iframe HTML file is a **completely standalone web page**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Widget title</title>
  <!-- MathJax config + script (see MathJax section) -->
  <style> /* layout + accessibility styles */ </style>
</head>
<body>
  <!-- caption/control bar, then canvas container -->
  <script src="js/demo.js"></script>
  <script>
    "use strict";
    /* MathJax helpers (mathJaxReady, texColor, renderMath) */
    DomReady.ready(function() { /* demo code */ });
  </script>
</body>
</html>
```

- Drop `<link rel="stylesheet" href="css/demo.css">` and the favicon link; define any needed CSS variables (e.g., `--palette-red`) locally.
- Drop `?vers=...` cache-busting suffixes from script paths.
- `this.caption(...)` (demo.js-managed caption injection) → replace with static HTML in the caption bar.
- `dat.GUI` sliders → replace with native `<input type="range">` (see WCAG section).
- `katex.render(...)` → replace with `renderMath(...)` (see MathJax section).

---

## Layout: keep the caption bar out of the canvas area

ILA demos float captions over the canvas with `position: absolute`. In an iframe this overlaps the MathBox panels. Use a **flex column layout**:

```css
html, body {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
.caption-bar {
  flex: 0 0 auto;           /* fixed height; does not grow or shrink */
  padding: 4px 10px;
  border-bottom: 1px solid #ccc;
}
#mathbox-container {
  flex: 1 1 auto;           /* fills all remaining height */
  position: relative;       /* anchor for absolutely-positioned panels */
  overflow: hidden;
}
```

Panels inside `#mathbox-container` use `position: absolute; top: 0; bottom: 0` (not the `padding-top: 50%` trick). Pass the panel element explicitly to `new Demo({ mathbox: { element: ... } })`.

---

## Caption math: render with MathJax, not KaTeX

ILA demos render caption math with `katex.render()` (KaTeX JS is bundled in `demo.js`). **Replace it with MathJax** so iframe math matches the typesetting of the surrounding PreTeXt page. The iframe cannot share the book page's MathJax instance, so it loads its own.

### 1. Config + script in `<head>`

The config object **must be defined before** the MathJax script tag. Set `startup.typeset: false` — static and live math are typeset explicitly by the helpers.

```html
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      packages:   { '[+]': ['color'] }
      // macros: { ... }   ← add book macros here if captions need them
    },
    loader:  { load: ['[tex]/color'] },
    startup: { typeset: false }
  };
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>
```

**Match the MathJax version (and font, if customized) to the one the PreTeXt build loads**, otherwise iframe math won't look identical to the page. Pin the version in the URL if the book pins one.

If caption TeX uses book macros (e.g., `\mhp`, `\mhg`, `\R`), copy their definitions from the book's `docinfo` into `tex.macros`; the iframe does not see the book's macros.

### 2. Helpers (copy verbatim, top of the main `<script>`)

```javascript
// Resolves once MathJax has loaded and finished startup (script is `defer`).
var mathJaxReady = new Promise(function(resolve) {
  function check() {
    if (window.MathJax && MathJax.startup && MathJax.startup.promise) {
      MathJax.startup.promise.then(resolve);
    } else {
      setTimeout(check, 30);
    }
  }
  check();
});

// demo.js Color → TeX colour spec. Color.str() is a CSS string MathJax won't
// reliably accept, so build \color[rgb]{r,g,b} from Color.arr() instead.
function texColor(color) {
  var a = color.arr();
  var scale = (a[0] > 1 || a[1] > 1 || a[2] > 1) ? 255 : 1;
  return '[rgb]{' + [a[0], a[1], a[2]].map(function(c) {
    return (c / scale).toFixed(3);
  }).join(',') + '}';
}

// Render TeX into an element. Rapid calls (slider/drag) are coalesced:
// only the latest TeX per element is rendered, so MathJax never backlogs.
var pendingTex = new Map();
var renderChain = Promise.resolve();
function renderMath(tex, el) {
  var alreadyQueued = pendingTex.has(el);
  pendingTex.set(el, tex);
  if (alreadyQueued) return;
  renderChain = renderChain
    .then(function() { return mathJaxReady; })
    .then(function() {
      var latest = pendingTex.get(el);
      pendingTex.delete(el);
      MathJax.texReset();
      return MathJax.tex2chtmlPromise(latest, { display: false }).then(function(node) {
        el.replaceChildren(node);
        // Required after tex2chtml so the CHTML stylesheet includes new glyphs
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    })
    .catch(function(err) { console.error('MathJax render failed:', err); });
}

// Typeset static \( \) math (labels, fixed equations) once MathJax is ready.
mathJaxReady.then(function() {
  return MathJax.typesetPromise(
    Array.prototype.slice.call(document.querySelectorAll('.mathjax-static'))
  );
});
```

### 3. Converting the demo code

| ILA (KaTeX) | MathJax replacement |
|---|---|
| `katex.render(str, el)` | `renderMath(str, el)` |
| `'\\color{' + c.str() + '}{…}'` | `'\\color' + texColor(c) + '{…}'` |
| Static equations rendered once with `katex.render` | Either `renderMath(...)` once, or write `\( … \)` in the HTML inside a `.mathjax-static` container |
| `<label>x</label>` with italic CSS | `<label>\(x\)</label>` inside `.mathjax-static`; keep `aria-label` on the input |

Notes:
- Remove the old `.katex-html { display: none; }` rule — it is only needed if KaTeX output remains.
- Give live math elements a `min-height` (e.g., `display: inline-block; min-height: 1.4em`) so the layout doesn't jump while MathJax replaces content.
- Keep `aria-live="polite" aria-atomic="true"` on live math elements; MathJax output carries its own assistive MathML.
- Controls must keep an `aria-label` that doesn't depend on MathJax, so they're correctly named before (or if) MathJax fails to load.

> **Fallback (KaTeX kept):** if a demo must keep `katex.render`, add `.katex-html { display: none; }` — `demo.js` ships KaTeX JS but not its CSS, so the span layer renders as raw text; the native `.katex-mathml` layer displays correctly. Never hide `.katex-mathml` instead.

---

## Fullscreen button

A fullscreen toggle `<button>` in the caption bar is useful when the iframe page is opened on its own. Because `permissions` is not allowed on `<interactive>`, `requestFullscreen()` may be blocked when embedded — acceptable; the button still works standalone. Guard the call:

```javascript
(function() {
  var btn = document.getElementById('fs-btn');
  function isFS() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }
  function updateLabel() {
    var label = isFS() ? 'Exit fullscreen' : 'Toggle fullscreen';
    btn.textContent = isFS() ? '✕' : '⛶';
    btn.title = label;
    btn.setAttribute('aria-label', label);   // NOT: btn.getAttribute(...) = ...
  }
  btn.addEventListener('click', function() {
    var el = document.documentElement, p;
    if (!isFS()) {
      var req = el.requestFullscreen || el.webkitRequestFullscreen;
      if (req) p = req.call(el);
    } else {
      var exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) p = exit.call(document);
    }
    if (p && p.catch) p.catch(function() {});   // embedded: silently ignore denial
  });
  ['fullscreenchange', 'webkitfullscreenchange']
    .forEach(function(e) { document.addEventListener(e, updateLabel); });
})();
```

> ⚠️ `btn.title = btn.getAttribute('aria-label') = ...` is a **SyntaxError** (invalid assignment target). A parse-time error kills the *entire* `<script>` block — the demo renders blank. Always use `setAttribute`.

---

## WCAG 2.1 Operability

All converted interactives must meet **WCAG 2.1 Principle 2: Operable**.

### 2.1.1 Keyboard (Level A) / 2.5.1 Pointer Gestures (Level A)
WebGL canvas dragging is neither keyboard-operable nor a single-pointer action. Provide native HTML alternatives **alongside** (not instead of) canvas dragging:

| Original control | Replacement |
|---|---|
| `dat.GUI` slider | `<input type="range">` with `<label for>` and `aria-label` |
| Draggable canvas points | Keep `this.draggable(...)`; add `<input type="range">` or `<input type="number">` per coordinate |

**Bidirectional sync with a single shared state array.** `demo.js`'s `draggable` mutates the `points` arrays in place, so make the controls write into the same arrays:

```javascript
var pt = [1, 2, 1];                     // single source of truth

slider.addEventListener('input', function() { pt[0] = parseFloat(this.value); update(); });

function syncFromDrag() {                // postDrag callback
  for (var i = 0; i < 3; i++) pt[i] = Math.max(-RANGE, Math.min(RANGE, pt[i]));
  xSlider.value = pt[0]; ySlider.value = pt[1]; zSlider.value = pt[2];
  update();
}
this.draggable(view, { points: [pt], postDrag: syncFromDrag });
```

- Slider `min`/`max` must cover the full view range and use a fine `step` (e.g., 0.1), so any dragged position is representable.
- For number-input panels over many points (e.g., best-fit), write `targets` back into the inputs at the end of `solve()`, and build the panel *after* the first `solve()`.
- Add a short hint line: "Drag the point, or use the sliders."

### 2.5.2 Pointer Cancellation (Level A)
- Number inputs: use `change` (commit on Enter/blur), not `input`.
- Range sliders: `input` is fine (standard live slider behavior).
- Buttons: `click`, never `pointerdown`/`mousedown`.
- demo.js `postDrag` fires during/after drag on pointer movement, not on pointer-down ✅.

### 2.1.2 No Keyboard Trap / 2.4.3 Focus Order (Level A)
Use only native `<input>`, `<button>`, `<details>`. Put the caption/control bar *before* the canvas in the DOM.

### 2.4.7 Focus Visible (Level AA)
```css
:focus-visible { outline: 2px solid #0066cc; outline-offset: 2px; }
```

### 2.5.3 Label in Name (Level A)
`aria-label` must contain the visible label text. Update it dynamically if the visible label changes (fullscreen toggle). For sliders, keep `aria-valuetext` current (e.g., `"z equals 0.50"`) — including after drag-driven updates.

### Live regions and canvas
- Dynamic math output: `aria-live="polite" aria-atomic="true"`.
- Canvas container: `aria-hidden="true"` (all information is exposed via the caption bar and controls).
- Wrap the caption bar in `role="region"` with an `aria-label`.

---

## Checklist for any ILA → PreTeXt conversion

1. **Read the original `.html`** — library, layout, event handlers, URL params, `dat.GUI`, `this.caption()`, `katex.render`, `draggable` usage
2. **Create `external/iframes/widgetname-if.html`** — self-contained; `js/demo.js` path; `DomReady.ready` wrapper
3. **URL params**: keep `urlParams` reads; never hardcode reusable configuration
4. **Layout**: flex column; caption bar `flex: 0 0 auto`; canvas container `flex: 1 1 auto`
5. **Math**: MathJax config + script in `<head>` (version matched to the book); paste helpers; `katex.render` → `renderMath`; `Color.str()` → `texColor()`; book macros into `tex.macros` if used
6. **Controls**: keep canvas dragging; add range/number inputs sharing the same state array; sync both ways
7. **WCAG**: `:focus-visible`, `aria-live`, `aria-valuetext`, `aria-hidden` canvas, labels independent of MathJax
8. **Fullscreen button** (optional): guarded calls, `setAttribute` for `aria-label`
9. **Syntax check** the inline scripts (extract and run `node --check`) — one parse error blanks the whole demo
10. **Create the PTX** — non-self-closing `<interactive>`, `<shortdescription>`, `<description>` with `<p>` children, **no `permissions` attribute**
11. **Verify**: compile, confirm the iframe loads, math matches the page, dragging and keyboard controls both work, PTX validates

---

## Things that do NOT work (save debugging time)

| Approach | Why it fails |
|----------|-------------|
| `platform="javascript"` + `<slate>` + CDN `<script source>` | CDN scripts may be blocked; renders blank |
| `window.addEventListener('load', fn)` wrapper | May never fire; use `DomReady.ready` or bottom-of-body script |
| Same `xml:id` on `<interactive>` and `<slate>` | Mangled or absent slate `id` |
| Self-closing `<interactive ... />` | Drops `<shortdescription>` / `<description>` |
| Bare text inside `<description>` | Invalid; `<description>` requires `<p>` children |
| `permissions="fullscreen"` on `<interactive>` | Not an allowed attribute; fails schema validation — omit it |
| Hardcoding URL parameters | Prevents reuse across the book |
| Keeping `katex.render` for captions | Math doesn't match the page's MathJax typesetting |
| `window.MathJax = {...}` placed after the MathJax script | Config ignored; color package/macros missing |
| `\color{` + `Color.str()` + `}` in MathJax | CSS colour strings not reliably accepted; use `texColor()` → `\color[rgb]{…}` |
| Calling `MathJax.tex2chtml` on every drag frame | Backlog/jank; use coalescing `renderMath` |
| Omitting `clear()` / `updateDocument()` after `tex2chtmlPromise` | New glyphs may render unstyled |
| Calling MathJax before `startup.promise` resolves | `MathJax.tex2chtmlPromise` undefined; wait on `mathJaxReady` |
| `.katex-mathml { display: none; }` (KaTeX fallback) | Hides formatted math; hide `.katex-html` instead |
| `position: absolute` caption over canvas | Overlaps canvas; use flex-column layout |
| `btn.getAttribute(...) = value` | SyntaxError; kills the whole script; use `setAttribute` |
| Replacing canvas drag with sliders only | Loses the direct-manipulation interaction; keep both |
| Separate state for sliders and draggable | Controls drift apart; share one array mutated in place |
| Sliders narrower/coarser than the view range | Dragged positions can't be represented; match range, fine step |
| `input` event on number fields | Updates mid-edit; use `change` (WCAG 2.5.2) |
| `dat.GUI` sliders | No accessible labels; replace with `<input type="range">` |
| Missing `aria-live` on dynamic math | Screen readers miss updates |
| Missing `aria-hidden` on canvas container | Exposes meaningless WebGL internals to AT |

---

## Notes on `aspect` ratio

| Layout | Aspect |
|--------|--------|
| Single MathBox canvas + caption/slider bar | `4:3` |
| Side-by-side controls + chart | `8:5` |
| Two side-by-side square MathBox canvases | `2:1` |
| Stacked controls above chart | `4:5` |
| Wide chart, minimal controls | `3:1` |
| JSXGraph canvas (square) | `1:1` |

The caption/control bar consumes height. After adding sliders or a point-input panel, check that the canvas isn't cramped; lower the ratio (taller) if needed. PreTeXt does not scroll the iframe, so content exceeding the aspect ratio is clipped.
