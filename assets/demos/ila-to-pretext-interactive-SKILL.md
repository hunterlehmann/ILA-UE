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

---

## URL query parameters

If the original ILA interactive was driven by URL parameters (e.g., `func=`, `range=`, `v1=`, `camera1=`), **keep reading them from the URL** in the iframe HTML using the `urlParams` helper already present in `demo.js`. Do **not** hardcode them. Pass parameter values through the `iframe` attribute query string so the same iframe HTML file can be reused with different configurations throughout the book:

```xml
<interactive xml:id="demo-bestfit-linear"
             iframe="iframes/bestfit-if.html?func=A*x+B&amp;v1=0,1&amp;v2=2,3&amp;range=5"
             width="100%"
             aspect="2:1">
  <shortdescription>
    <!-- FILL: Brief alt-text for this interactive (linear algebra context) -->
  </shortdescription>
  <description>
    <!-- FILL: Complete accessibility description of this interactive for a linear algebra course -->
  </description>
</interactive>
```

In the iframe JS, restore all `urlParams.get(...)` calls exactly as in the original ILA source:

```javascript
range   = urlParams.get('range',  'float', 10);
rangeZ  = urlParams.get('rangez', 'float', range);
funcStr = (ref = urlParams.func) != null ? ref : 'C*x+D';
// points
i = 1;
while (urlParams['v' + i] != null) {
  target    = urlParams.get('v' + i, 'float[]');
  target[2] = 0;
  targets.push(target);
  i++;
}
// camera
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

  <!-- Load ALL external libraries here, in dependency order -->
  <script src="https://cdn.plot.ly/plotly-2.35.2.min.js" charset="utf-8"></script>
  <!-- Add other CDN scripts (JSXGraph, d3, etc.) here as needed -->

  <style>
    /* Reset: make the widget fill the iframe without scrollbars */
    *, *::before, *::after { box-sizing: border-box; }
    html, body {
      margin: 0; padding: 0;
      width: 100%; height: 100%;
      font-family: inherit;
      overflow: hidden;          /* prevent iframe scrollbars */
    }
    /* ... layout styles ... */
  </style>
</head>
<body>

  <!-- Static HTML structure of the widget -->
  <!-- Keep IDs simple and local — no need to namespace them as
       in the slate approach (no global document context to collide with) -->

  <script>
    /* All JS at the bottom of <body>.
     * The DOM is fully parsed by the time this runs, so:
     *   - No DOMContentLoaded listener needed
     *   - No window.load listener needed
     *   - No document.createElement('script') dynamic injection needed
     *   - getElementById() always finds the target element
     */
  </script>

</body>
</html>
```

---

## Translating the original ILA HTML

### Libraries: bundle.js → CDN

ILA's `bundle.js` bundles **jQuery 2.0.3 + Plotly + d3** into one file.
Replace it with a direct CDN `<script>` for whichever library the interactive actually uses:

| ILA bundle content | PreTeXt replacement |
|--------------------|---------------------|
| Plotly | `<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"/>` |
| JSXGraph | `<script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"/>` |
| jQuery | Drop it entirely — replace with vanilla JS (see below) |
| d3 | `<script src="https://cdn.jsdelivr.net/npm/d3@7"/>` |

### jQuery → vanilla JS

Common jQuery patterns and their vanilla equivalents:

```javascript
// Reading an input value
$("#inp").val()              →  document.getElementById('inp').value

// Setting an input value
$("#inp").val(x)             →  document.getElementById('inp').value = x

// Click handler
$("#btn").click(fn)          →  document.getElementById('btn').addEventListener('click', fn)

// Change handler
$("#inp").change(fn)         →  document.getElementById('inp').addEventListener('change', fn)

// Document ready
$(document).ready(fn)       →  /* not needed — script is at bottom of body */
```

### Plotly: no changes needed

`Plotly.newPlot()`, `Plotly.restyle()`, etc. are identical.
The only difference is that `plotDiv` is now a DOM element reference
obtained with `document.getElementById()` rather than a bare string ID —
but Plotly accepts both.

### CSS: Bootstrap → plain CSS

ILA used Bootstrap grid classes (`col-md-6`, `form-group`, etc.).
Replace with a simple flexbox layout:

```css
#layout {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75em;
  padding: 0.75em;
  width: 100%;
  height: 100%;
}
#controls { flex: 0 0 auto; min-width: 160px; }
#chart    { flex: 1 1 auto; min-width: 200px; }
```

---

## Worked example: Rabbits (Leslie matrix)

### Original ILA files
- `rabbits.html` — Bootstrap layout, jQuery, Plotly pie chart
- `bundle.js` — minified jQuery + Plotly + d3

### Conversion checklist

- [x] Drop `bundle.js` entirely
- [x] Load Plotly from CDN in `<head>` of iframe HTML
- [x] Drop jQuery; use `document.getElementById()` and `addEventListener()`
- [x] Drop Bootstrap; replace with flex layout
- [x] Keep all logic identical (Leslie matrix step, randomize, setData, clamp)
- [x] Script at bottom of `<body>` — no ready/load wrapper needed
- [x] PTX: `iframe="iframes/rabbits-if.html"`, `aspect="8:5"`, unique `xml:id`
- [x] PTX: non-self-closing `<interactive>` tag with `<shortdescription>` and `<description>` children filled in

### Key logic preserved

```javascript
// One Leslie matrix step
function advance() {
  var v = getVals();
  inp0.value = 6 * v[1] + 8 * v[2];   // births from age 1-2 and 2-3
  inp1.value = Math.floor(v[0] / 2);   // 50% of age 0-1 survive
  inp2.value = Math.floor(v[1] / 2);   // 50% of age 1-2 survive
  setData();
}

// Pie chart shows ratios relative to the oldest cohort
function setData() {
  var v = getVals();
  var d = v[2];                        // denominator = age 2-3 count
  var ratios = [v[0] / d, v[1] / d, 1];
  Plotly.restyle(plotDiv, 'values', [ratios]);
  Plotly.restyle(plotDiv, 'text', [[
    ratios[0].toFixed(3), ratios[1].toFixed(3), '1.000'
  ]]);
}
```

---

## Checklist for any ILA → PreTeXt conversion

1. **Read the original `.html` file** — identify the library (Plotly/JSXGraph/d3), the layout structure, and all event handlers
2. **Read `bundle.js` header** — confirm which libraries are bundled (`grep -o '"plotly\|jQuery\|d3' bundle.js | sort -u`)
3. **Create `external/iframes/widgetname-if.html`** — self-contained, CDN scripts in `<head>`, static HTML, vanilla JS at bottom of `<body>`
4. **Create `src/widgetname.ptx`** (or inline in your section) — `<interactive>` element with opening **and** closing tags, plus filled-in `<shortdescription>` and `<description>` children
5. **Verify**: compile the book, open the section, confirm the iframe loads and the widget responds to interaction

---

## Things that do NOT work (save debugging time)

| Approach | Why it fails |
|----------|-------------|
| `platform="javascript"` + `<slate surface="div"/>` + `<script source="https://cdn..."/>` | CDN scripts may be blocked by CSP in the generated iframe HTML |
| `window.addEventListener('load', fn)` wrapper in external JS | `load` may never fire if the page is already fully loaded by the time the script executes |
| `(function(){ ... }())` IIFE in external JS | Runs before the slate `<div>` exists in the DOM |
| `<script source="https://cdn..."/>` inside `<interactive>` | PreTeXt may not support external-URL `source` attributes; result is silently dropped |
| Same `xml:id` on both `<interactive>` and `<slate>` | Invalid PreTeXt; can cause the slate div to get a mangled or absent `id` |
| Self-closing `<interactive ... />` | Silently drops `<shortdescription>` and `<description>` children; always use opening + closing tags |
| Hardcoding URL parameters in the iframe JS | Prevents reuse across book instances with different configurations; always read from `urlParams` |

---

## Notes on `aspect` ratio

The `aspect="W:H"` attribute controls the iframe height relative to its width.
Common choices for ILA interactives:

| Layout | Aspect |
|--------|--------|
| Side-by-side controls + chart | `8:5` |
| Two side-by-side square MathBox canvases | `2:1` |
| Stacked controls above chart | `4:5` |
| Wide chart, minimal controls | `3:1` |
| JSXGraph canvas (square) | `1:1` |

Adjust after seeing the rendered output — PreTeXt does not scroll the iframe,
so content that exceeds the aspect ratio is clipped. Use `overflow: hidden` on
`body` in the iframe HTML to prevent unwanted scrollbars.
