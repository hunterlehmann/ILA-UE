---
name: ila-to-pretext-interactive
description: "Use this skill whenever the user asks to convert an ILA (Interactive Linear Algebra) interactive to a PreTeXt interactive, or more generally when migrating any HTML/JS interactive (using Plotly, JSXGraph, d3, or similar) into a PreTeXt book. Triggers: 'convert interactive', 'migrate to PreTeXt', 'ILA interactive', 'rabbits', 'bundle.js', 'slate', any mention of a .html interactive file paired with a bundle.js."
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
        └── mywidget-if.html      ← the self-contained interactive page
```

The `external/` folder is PreTeXt's conventional home for iframe files.
The `iframes/` subfolder is the ILA convention (adapt to your project's actual structure).

---

## The PTX element

**CRITICAL: `<interactive>` must use non-self-closing tags** — it has required child elements.
A self-closing `<interactive ... />` will silently drop the accessibility children.

```xml
<interactive xml:id="UNIQUE-ID"
             iframe="iframes/mywidget-if.html"
             width="100%"
             aspect="W:H">
  <shortdescription>
    <!-- FILL: Brief alt-text for this interactive (linear algebra context) -->
  </shortdescription>
  <description>
    <!-- FILL: Complete accessibility description of this interactive for a linear algebra course -->
  </description>
</interactive>
```

- `xml:id` — must be **unique across the entire book**; use a descriptive prefix (e.g., `demo-rabbits`, not just `rabbits`)
- `iframe` — path is **relative to `external/`**, not to the `.ptx` source file; query parameters are allowed and XML-escaped (`&` → `&amp;`)
- `aspect` — choose based on the widget's natural proportions; `8:5` is a good default for a side-by-side controls + chart layout
- `<shortdescription>` — brief alt-text phrase (one sentence, no markup); **fill in before publishing**
- `<description>` — full accessibility prose describing what the widget shows and how to interact with it; **fill in before publishing**

If the interactive uses the Fullscreen API, also add `permissions="fullscreen"`:

```xml
<interactive xml:id="UNIQUE-ID"
             iframe="iframes/mywidget-if.html"
             width="100%"
             aspect="W:H"
             permissions="fullscreen">
```

Without this attribute, browsers block `requestFullscreen()` calls from inside the iframe.

---

## URL query parameters

If the original ILA interactive was driven by URL parameters (e.g., `func=`, `range=`, `v1=`, `camera1=`), **keep reading them from the URL** in the iframe HTML using the `urlParams` helper already present in `demo.js`. Do **not** hardcode them. Pass parameter values through the `iframe` attribute query string so the same iframe HTML file can be reused with different configurations throughout the book:

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

---

## Anatomy of the iframe HTML file

The iframe HTML file is a **completely standalone web page**. Structure it as:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Widget title</title>
  <script src="...CDN libraries..."></script>
  <style> /* layout + accessibility styles */ </style>
</head>
<body>
  <!-- Static HTML structure -->
  <script>
    /* All JS at bottom of <body> — DOM is fully parsed, no ready() needed */
  </script>
</body>
</html>
```

---

## Layout: keep the caption bar out of the canvas area

ILA demos that render equations above the interactive use `position: absolute` elements that float over the canvas. In the iframe this causes the caption text to overlap the MathBox panels. Fix with a **flex column layout**:

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
#canvas-container {
  flex: 1 1 auto;           /* fills all remaining height */
  position: relative;       /* anchor for absolutely-positioned panels */
  overflow: hidden;
}
```

Individual panels inside `#canvas-container` use `position: absolute; top: 0; bottom: 0` instead of the padding-top trick.

---

## KaTeX without its stylesheet: use `.katex-html { display: none; }`

`demo.js` bundles KaTeX JavaScript but **not** KaTeX's CSS or fonts. When `katex.render()` is called it writes two sibling elements:

| Element | Content | Visible without KaTeX CSS? |
|---|---|---|
| `.katex-mathml` | Native `<math>` element | ✅ Browsers render this as formatted math automatically |
| `.katex-html` | Positioned `<span>` tree | ❌ Appears as unstyled plain text without the stylesheet |

**Fix: hide `.katex-html`, not `.katex-mathml`:**

```css
.katex-html { display: none; }
```

> ⚠️ **Common mistake**: hiding `.katex-mathml` instead shows only the broken span layout and hides the formatted math — the opposite of what is wanted.

---

## WCAG 2.1 Operability

All converted interactives must meet **WCAG 2.1 Principle 2: Operable**. The key requirements for WebGL/canvas-based interactives and how to address each:

### 2.1.1 Keyboard (Level A)
> All functionality must be operable via keyboard.

WebGL canvas elements are not inherently keyboard-accessible. **Provide a keyboard alternative**: a panel of `<input type="number">` fields, one per draggable point, that update the canvas when changed.

```html
<details id="point-editor" open>
  <summary>Edit points (keyboard / single-click alternative to dragging)</summary>
  <div id="point-inputs" role="group" aria-label="Draggable point coordinates"></div>
</details>
```

Populate it from JS after reading URL params:

```javascript
var pointInputsX = [], pointInputsY = [];

function buildPointEditor() {
  var editor = document.getElementById('point-inputs');
  targets.forEach(function(pt, idx) {
    var xInp = document.createElement('input');
    xInp.type = 'number'; xInp.step = '0.5'; xInp.value = +pt[0].toFixed(2);
    xInp.setAttribute('aria-label', 'Point ' + (idx + 1) + ' x coordinate');
    pointInputsX.push(xInp);

    var yInp = document.createElement('input');
    yInp.type = 'number'; yInp.step = '0.5'; yInp.value = +pt[1].toFixed(2);
    yInp.setAttribute('aria-label', 'Point ' + (idx + 1) + ' y coordinate');
    pointInputsY.push(yInp);

    function applyInput() {
      var x = parseFloat(xInp.value), y = parseFloat(yInp.value);
      if (isFinite(x)) targets[idx][0] = x;
      if (isFinite(y)) targets[idx][1] = y;
      solve();
    }
    xInp.addEventListener('change', applyInput);
    yInp.addEventListener('change', applyInput);
    // ... append to editor ...
  });
}

// Call after first solve():
solve();
buildPointEditor();
```

Add a **bidirectional sync** so dragging the canvas also updates the inputs — call this at the end of `solve()`:

```javascript
// At the end of solve(), after updateCaption():
targets.forEach(function(pt, idx) {
  if (pointInputsX[idx]) pointInputsX[idx].value = +pt[0].toFixed(2);
  if (pointInputsY[idx]) pointInputsY[idx].value = +pt[1].toFixed(2);
});
```

The `<details open>` starts expanded so keyboard users discover it immediately; it can be collapsed to save space.

### 2.1.2 No Keyboard Trap (Level A)
Standard HTML `<input>` and `<button>` elements. No custom focus management needed; browser handles tab order naturally.

### 2.4.3 Focus Order (Level A)
Logical tab order follows DOM order: fullscreen button → details summary → point inputs → (canvas). Ensure the caption bar appears before the canvas in the DOM, which it does in the flex-column layout.

### 2.4.7 Focus Visible (Level AA)
Add a global focus-visible rule in the iframe `<style>`:

```css
:focus-visible {
  outline:        2px solid #0066cc;
  outline-offset: 2px;
}
```

This applies to all interactive elements (inputs, buttons, summary) without interfering with mouse users.

### 2.5.1 Pointer Gestures (Level A)
> Functionality using path-based gestures must have a single-pointer alternative.

Canvas dragging is a path-based gesture. The number inputs panel (see 2.1.1) is the required alternative.

### 2.5.2 Pointer Cancellation (Level A)
> Functionality must not activate on the down-event.

- **Canvas drag**: `postDrag` fires on `mouseup`, not `mousedown`. ✅ Already correct in ILA code.
- **Number inputs**: use `change` event (fires on commit: Enter key or blur), not `input` (fires on every keystroke). This lets users correct a value before the canvas updates.
- **Buttons**: use `click` event, not `pointerdown`. ✅

### 2.5.3 Label in Name (Level A)
> The accessible name of a UI component must contain the visible label text.

- Buttons: `aria-label` must match or contain the visible text/icon. Update `aria-label` dynamically if the button label changes (e.g., fullscreen toggle).
- Inputs: use `aria-label="Point N x coordinate"` (no visible label text to conflict with).

### Dynamic content: ARIA live regions
When equations update on drag/input, screen readers must be notified. Add `aria-live` and `aria-atomic` to the equation display elements:

```html
<span id="eqn-here"   aria-live="polite" aria-atomic="true"></span>
<span id="sumsq-here" aria-live="polite" aria-atomic="true"></span>
```

`aria-atomic="true"` ensures the whole equation is re-announced, not just the changed fragment.

### Canvas element: `aria-hidden`
The WebGL canvas conveys no information that isn't already available in the number inputs and equation display. Mark the canvas container `aria-hidden="true"` to remove it from the accessibility tree:

```html
<div id="mathbox-container" aria-hidden="true">
  ...
</div>
```

---

## Translating the original ILA HTML

### Libraries: bundle.js → CDN

| ILA bundle content | PreTeXt replacement |
|--------------------|---------------------|
| Plotly | `<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"/>` |
| JSXGraph | `<script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"/>` |
| jQuery | Drop it entirely — replace with vanilla JS (see below) |
| d3 | `<script src="https://cdn.jsdelivr.net/npm/d3@7"/>` |

### jQuery → vanilla JS

```javascript
$("#inp").val()           →  document.getElementById('inp').value
$("#inp").val(x)          →  document.getElementById('inp').value = x
$("#btn").click(fn)       →  document.getElementById('btn').addEventListener('click', fn)
$("#inp").change(fn)      →  document.getElementById('inp').addEventListener('change', fn)
$(document).ready(fn)    →  /* not needed — script is at bottom of body */
```

### CSS: Bootstrap → plain CSS

```css
#layout { display: flex; flex-wrap: wrap; gap: 0.75em; padding: 0.75em; height: 100%; }
#controls { flex: 0 0 auto; min-width: 160px; }
#chart    { flex: 1 1 auto; min-width: 200px; }
```

---

## Checklist for any ILA → PreTeXt conversion

1. **Read the original `.html` file** — identify the library, layout, and event handlers
2. **Read `bundle.js` header** — confirm which libraries are bundled
3. **Create `external/iframes/widgetname-if.html`** — self-contained iframe HTML
4. **Layout**: if equations appear above the canvas, use flex-column layout (caption bar `flex: 0 0 auto`, canvas container `flex: 1 1 auto`)
5. **KaTeX**: if `katex.render()` is used, add `.katex-html { display: none; }` to the `<style>` block
6. **WCAG 2.1.1 / 2.5.1**: if there are draggable canvas points, add a `<details open>` keyboard input panel; add bidirectional sync in `solve()`
7. **WCAG 2.4.7**: add `:focus-visible { outline: 2px solid #0066cc; outline-offset: 2px; }` globally
8. **WCAG aria-live**: add `aria-live="polite" aria-atomic="true"` to dynamic equation output elements
9. **aria-hidden**: add `aria-hidden="true"` to the canvas container
10. **Create `src/widgetname.ptx`** — non-self-closing `<interactive>` with `<shortdescription>`, `<description>`, and `permissions="fullscreen"` if applicable
11. **Verify**: compile, open section, confirm iframe loads, interactions work, and keyboard panel operates correctly

---

## Things that do NOT work (save debugging time)

| Approach | Why it fails |
|----------|-------------|
| `platform="javascript"` + `<slate surface="div"/>` + `<script source="https://cdn..."/>` | CDN scripts may be blocked by CSP in the generated iframe HTML |
| `window.addEventListener('load', fn)` wrapper | May never fire; place script at bottom of `<body>` instead |
| IIFE `(function(){ ... }())` in external JS | Runs before the slate `<div>` exists in the DOM |
| `<script source="https://cdn..."/>` inside `<interactive>` | PreTeXt may silently drop external-URL `source` attributes |
| Same `xml:id` on both `<interactive>` and `<slate>` | Can cause the slate div to get a mangled or absent `id` |
| Self-closing `<interactive ... />` | Silently drops `<shortdescription>` and `<description>` children |
| Hardcoding URL parameters in the iframe JS | Prevents reuse; always read from `urlParams` |
| Missing `permissions="fullscreen"` on `<interactive>` | Browser blocks `requestFullscreen()` calls from inside the iframe |
| `.katex-mathml { display: none; }` | **Hides formatted math**, shows unstyled spans; use `.katex-html` instead |
| `position: absolute` caption over MathBox canvas | Overlaps the canvas; use flex-column layout instead |
| Relying solely on canvas drag for point control | Fails WCAG 2.1.1 and 2.5.1; add number input alternative |
| `input` event for number fields | Fires on every keystroke, updating canvas mid-edit; use `change` instead (WCAG 2.5.2) |
| Omitting `aria-live` on dynamic equation output | Screen readers do not announce equation changes after interaction |
| Omitting `aria-hidden` on canvas container | Exposes meaningless WebGL internals to screen reader users |

---

## Notes on `aspect` ratio

| Layout | Aspect |
|--------|--------|
| Side-by-side controls + chart | `8:5` |
| Two side-by-side square MathBox canvases | `2:1` |
| Stacked controls above chart | `4:5` |
| Wide chart, minimal controls | `3:1` |
| JSXGraph canvas (square) | `1:1` |

Note: the keyboard input panel in the caption bar adds height. After adding it, check that the `aspect` ratio still gives enough room for the canvas; increase the height ratio (smaller second number) if the panels are too cramped.
