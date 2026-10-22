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
        ├── js/
        │   ├── demo.js           ← ILA MathBox bundle (unchanged)
        │   ├── mathjax-setup.js  ← shared MathJax config + renderMath/texColor
        │   ├── demo-theme.js     ← shared book colour palette (patches demo.js Color)
        │   └── demo-labels.js    ← shared MathJax labels over the MathBox canvas
        └── mywidget-if.html      ← the interactive page
```

All demo HTML files live in `iframes/` and reference the shared scripts as `js/...`. Never copy the contents of the shared files into a demo; edit the shared file once and every demo picks it up.

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

Script order matters. All are plain `<script src>` tags — **no `defer`, no `async`**.

| Where | Script | Why there |
|---|---|---|
| `<head>` | `js/mathjax-setup.js` | Must set `window.MathJax` before MathJax loads; defines `renderMath`, `texColor`, `mathJaxReady` |
| end of `<body>` | `js/demo.js` | Defines `Demo`, `Color`, `THREE`, `urlParams`, `DomReady` |
| immediately after `demo.js` | `js/demo-theme.js` | Patches `Color` — must run after `demo.js` and before any `new Color(...)` |
| after `demo-theme.js` | `js/demo-labels.js` | Uses `THREE`, `renderMath`, `texColor` (only needed if the demo has canvas labels) |
| last | inline `<script>` | Demo code inside `DomReady.ready(...)` |

Skeleton (in a reply, put this in a file or a fenced code block — HTML tags written as plain text get stripped by the chat display):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <title>Widget title</title>
  <script src="js/mathjax-setup.js"></script>
  <style> /* layout + accessibility + .label-layer/.canvas-label styles */ </style>
</head>
<body>
  <!-- caption/control bar, then #mathbox-container -->
  <script src="js/demo.js"></script>
  <script src="js/demo-theme.js"></script>
  <script src="js/demo-labels.js"></script>
  <script>
    "use strict";
    DomReady.ready(function() { /* demo code */ });
  </script>
</body>
</html>
```

- Drop `<link rel="stylesheet" href="css/demo.css">` and the favicon link.
- Drop `?vers=...` cache-busting suffixes from script paths.
- `this.caption(...)` / `this.popup(...)` (demo.js overlay injection) → static HTML in the caption bar (popup → inline `role="status"` element).
- `dat.GUI` sliders/checkboxes → native `<input type="range">` / `<input type="checkbox">` (see WCAG section).
- `katex.render(...)` → `renderMath(...)` (see MathJax section).
- WebGL vector/point labels → MathJax canvas labels (see Canvas labels section).
- Pass `fullscreen: false` to `new Demo({...})` / `new Demo2D({...})`: demo.js otherwise binds a bare **f** keypress anywhere on the page to fullscreen, which fires while typing in number inputs and fails WCAG 2.1.4 (Character Key Shortcuts).
- Pass the canvas element as `mathbox: { element: document.getElementById('mathbox1'), mathbox: { warmup: 10, splash: false, inspect: false } }`; demo.js merges these keys straight into the MathBox options.

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

ILA demos render caption math with `katex.render()` (KaTeX JS is bundled in `demo.js`). **Replace it with MathJax** so iframe math matches the surrounding PreTeXt page. The iframe cannot share the book page's MathJax, so it loads its own via the shared `js/mathjax-setup.js`.

### The shared file `js/mathjax-setup.js`

It (1) sets `window.MathJax` (inline `\( \)`, `color` package, `startup.typeset: false`, book macros), (2) injects the MathJax CDN script, and (3) defines page-wide helpers:

| Helper | Purpose |
|---|---|
| `mathJaxReady` | Promise resolving after MathJax startup |
| `texColor(color)` | demo.js `Color` → `[rgb]{r,g,b}` for `\color` |
| `renderMath(tex, el)` | Typeset TeX into `el`; coalesces rapid calls (slider/drag) so only the latest is rendered |
| (auto) | Typesets static `\( \)` inside `.mathjax-static` elements once DOM + MathJax are ready |

- **Match the MathJax version** in the shared file to the one the PreTeXt build loads.
- **Book macros** (`\R`, `\mhp`, …) go in `bookMacros` in the shared file. A demo needing extra macros sets `window.MATHJAX_EXTRA_MACROS = {...}` in an inline `<script>` placed **before** the `mathjax-setup.js` tag.
- Never redeclare `mathJaxReady`, `texColor`, `renderMath`, `pendingTex`, `renderChain` in a demo (with `let`/`const` it is a SyntaxError that blanks the page; with `var` it silently replaces the shared helper).

### Converting the demo code

| ILA (KaTeX / demo.js) | Replacement |
|---|---|
| `katex.render(str, el)` | `renderMath(str, el)` |
| `'\\color{' + c.str() + '}{…}'` | `'\\color' + texColor(c) + '{…}'` |
| `this.texVector(v, {color: c})` | local `texVec(v, c)` built with `texColor` (demo.js `texVector`/`texSet`/`texMatrix`/`texCombo` emit CSS colour strings MathJax may reject) |
| Static equations | `\( … \)` in the HTML inside a `.mathjax-static` container |
| Labels/controls created by JS after load | After inserting them, call `mathJaxReady.then(() => MathJax.typesetPromise([container]))` — the automatic `.mathjax-static` pass has already run |
| `<label>x</label>` with italic CSS | `<label>\(x\)</label>`; keep a plain-text `aria-label` on the input |

Notes:
- Give live math elements `display: inline-block; min-height: 1.4em` so the layout doesn't jump while MathJax replaces content.
- Keep `aria-live="polite" aria-atomic="true"` on live math elements.
- Format numbers with a helper that avoids `-0.00`, e.g. `(Math.abs(x) < 0.005 ? 0 : x).toFixed(2)`.

> **Fallback (KaTeX kept):** if a demo must keep `katex.render`, add `.katex-html { display: none; }` — `demo.js` ships KaTeX JS but not its CSS. Never hide `.katex-mathml` instead.

---

## Colour theme: `js/demo-theme.js`

demo.js resolves named colours (`new Color("blue")`) from a private palette whose blue/red/green have poor contrast against the violet span surface. The shared theme file replaces them for the whole book:

| Name | Book value | Contrast on 25 % violet span over white |
|---|---|---|
| `blue`  | `#385B8A` | ≈ 4.9 : 1 |
| `red`   | `#B5121F` | ≈ 4.8 : 1 |
| `green` | `#376529` | ≈ 4.8 : 1 |

How it works: `Color`'s constructor binds `this.set` from the prototype at construction time, so the file wraps `Color.prototype.set` to map theme names to hex values. Every `Color` created afterwards is themed — in demo code **and** inside demo.js (e.g. `linearCombo`'s default red point) — and `texColor()` therefore gives matching caption colours automatically. It also rewrites the `--palette-<name>` CSS variables demo.js sets on `<body>`.

Rules:
- Load **immediately after** `js/demo.js`, before any demo code. Colours created earlier keep the old values.
- Always create colours by **name** (`new Color("blue")`), never hardcoded hex/RGB, so the theme applies.
- For CSS (caption text etc.) use `var(--palette-red)` etc.; don't redefine those variables in the page's `:root` (they'd be shadowed anyway by the body-level values).
- Per-demo extras/overrides: set `window.DEMO_THEME_OVERRIDES = { orange: '#…' }` in an inline script before the `demo-theme.js` tag. Change book-wide values only in the shared file.
- The resolved palette is available as `DEMO_THEME`.

---

## Canvas labels: MathJax over the MathBox canvas (`js/demo-labels.js`)

MathBox labels (`labeledVectors` `labels`, `linearCombo` `labels`, `.text().label()`) are WebGL text and show raw strings like `v1`. Replace them with MathJax-typeset HTML positioned over the canvas each frame.

Shared file provides:

| Function | Purpose |
|---|---|
| `texLabel(s)` | `'v1'` → `'v_{1}'` |
| `texColored(color, tex)` | `\color[rgb]{…}{tex}` |
| `makeLabelLayer(container, demo, view, {offsetY})` | Creates the overlay; returns `{ add({position, visible, tex, offset}) → {set(tex)} }`. `offsetY` (default 25) is the layer-wide distance in px above each anchor |
| `addVectorLabels(layer, vectors, colors, names, origins?)` | One label per vector at its midpoint (same anchor as demo.js) |

`layer.add(...)` options:

| Option | Meaning |
|---|---|
| `position()` | Required. Returns the `[x, y, z]` anchor in data coordinates; called every frame, so return live values |
| `visible()` | Optional. Label is hidden while it returns `false` (e.g. tied to a "Show …" checkbox) |
| `tex` | Optional initial TeX; otherwise call `.set(tex)` later |
| `offset: [dx, dy]` | Optional per-label pixel offset, **demo.js convention**: `+dx` = right, `+dy` = up. Overrides `offsetY` for this label. Copy the `offset` from the `.label({...})` call being replaced (e.g. `[0, 20]`, `[25, 0]`) |

Required page CSS:

```css
.label-layer  { position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                pointer-events: none; overflow: hidden; z-index: 1; }
.canvas-label { position: absolute; left: 0; top: 0; font-size: 15px; white-space: nowrap;
                text-shadow: 0 0 2px #fff, 0 0 2px #fff, 0 0 2px #fff; will-change: transform; }
```

Porting pattern (inside the `Demo` callback, after `view` is created):

```javascript
var labelColors = colors.slice();        // labeledVectors overwrites colour entries with arrays
this.labeledVectors(view, {
  vectors: vectors, colors: colors      // NO `labels` option — that drew the WebGL text
  /* , origins, live, zeroPoints, ... */
});
var labelLayer = makeLabelLayer(document.getElementById('mathbox1'), this, view);
addVectorLabels(labelLayer, vectors, labelColors, ['v', 'w', 'v+w'], origins);

// Dynamic label (e.g. linear combination); omit linearCombo's `labels` option
var combo = labelLayer.add({
  position: function() { return linCombo.combine(); },
  visible:  function() { return params.showCombo; }
});
combo.set(texColored(new Color('red'), '1.00\\,v_{1} + 2.00\\,v_{2}'));  // call again on change
```

**Replacing a WebGL `.format().label()` / `.text().label()` chain** (coordinate readouts, component values). Delete the `.format({...}).label({...})` or `.text({...}).label({...})` part of the chain, keep the `.point()`/`.line()`, then add a MathJax label with the same anchor and offset. If the value changes without a known event (e.g. read from shared state each frame), refresh it in a `requestAnimationFrame` loop and only call `.set()` when the TeX string changes:

```javascript
var ptLabel = labelLayer.add({
  position: function() { return [pt[0], pt[1], pt[2]]; },
  offset:   [0, 20]                         // same as the removed .label({ offset: [0, 20] })
});
var lastTex = '';
(function refresh() {
  var tex = texColored(pointColor, '(' + pt.map(function(c) {
    return (Math.abs(c) < 0.005 ? 0 : c).toFixed(2);
  }).join(',\\,') + ')');
  if (tex !== lastTex) { lastTex = tex; ptLabel.set(tex); }   // avoid re-typesetting every frame
  requestAnimationFrame(refresh);
})();
```

If the value only changes on known events (slider `input`, `postDrag`), call `.set()` from those handlers instead of polling. Example: the scaled-vector label in vector-mul is set from `updateCaption()`.

Notes:
- Projection uses the same matrices demo.js's `draggable` uses (`view[0].controller.viewMatrix`, `demo.camera`, `demo.canvas`), so labels follow drags, typed edits and camera rotation.
- `pointer-events: none` keeps canvas dragging working; the layer is `aria-hidden` (captions/controls carry the information).
- Copy `labelColors` **before** calling `labeledVectors`/`linearCombo` — demo.js replaces `Color` entries in the passed array with `[r,g,b,a]` arrays.
- Labels are not depth-occluded and don't scale with zoom; adjust `offsetY` (whole layer) or a label's `offset` if they collide with vectors.
- Convert number labels too (coordinates, component values) so all canvas text uses the page's MathJax font and the theme colours; WebGL `background: "black"` boxes are dropped.

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

1. **Read the original `.html`** — library, layout, event handlers, URL params, `dat.GUI`, `this.caption()`/`this.popup()`, `katex.render`, `draggable`, `labels:` usage
2. **Create `external/iframes/widgetname-if.html`** — shared scripts in the documented order; `DomReady.ready` wrapper; `fullscreen: false` and `mathbox.element` in the `Demo` options
3. **URL params**: keep `urlParams` reads; never hardcode reusable configuration
4. **Layout**: flex column; caption bar `flex: 0 0 auto`; canvas container `flex: 1 1 auto`
5. **Math**: `js/mathjax-setup.js` in `<head>`; `katex.render` → `renderMath`; `Color.str()` / demo.js `tex*` helpers → local builders using `texColor()`; typeset JS-created labels explicitly
5a. **Colours**: `js/demo-theme.js` right after `demo.js`; all colours by name
5b. **Canvas labels**: drop `labels:` options and `.format()/.text().label()` chains; `js/demo-labels.js` + `makeLabelLayer` / `addVectorLabels` / `layer.add({ offset })`; copy colours before demo.js mutates them
6. **Controls**: keep canvas dragging; add range/number inputs sharing the same state array; sync both ways
7. **WCAG**: `:focus-visible`, `aria-live`, `aria-valuetext`, `aria-hidden` canvas, labels independent of MathJax
8. **Fullscreen button** (optional): guarded calls, `setAttribute` for `aria-label`
9. **Syntax check**: concatenate the shared files and the extracted inline scripts and run `node --check` — one parse error blanks the whole demo, and concatenation also catches `let`/`const` redeclarations of shared names
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
| Pasting MathJax helpers inline in each demo | Drift between demos; use the shared `js/mathjax-setup.js` |
| `defer`/`async` on shared script tags | Helpers/patches not defined when demo code runs |
| Leaving demo.js's default `fullscreen: true` | Bare **f** key toggles fullscreen while typing in inputs (WCAG 2.1.4) |
| demo.js `texVector`/`texSet`/`texMatrix` with colours | Emit `\color{#hex}`; build TeX locally with `texColor()` |
| demo.js default `blue`/`red`/`green` | Low contrast on the violet span surface; load `js/demo-theme.js` |
| Loading `demo-theme.js` before `demo.js`, or creating colours before it loads | `Color` not yet defined / colours not themed |
| Hardcoded hex/RGB colours in demo code | Bypass the theme; use colour names |
| Redefining `--palette-*` in the page `:root` | Shadowed by body-level values; set them via the theme file |
| WebGL `labels:` on `labeledVectors` / `linearCombo` | Raw text (`v1`) instead of \(v_1\); use MathJax canvas labels |
| Using the colour array after passing it to `labeledVectors` | Entries are now `[r,g,b,a]` arrays, not `Color`s; copy first |
| Label layer without `pointer-events: none` | Blocks canvas dragging |
| Using `offsetY` sign for per-label `offset` | `offset` follows demo.js: `+dy` moves the label **up**, not down |
| Calling `.set()` every animation frame unconditionally | Re-typesets constantly; compare against the last TeX string first |
| Writing HTML tags as plain text in a chat reply | The display strips them; put HTML in a file or fenced code block |

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
