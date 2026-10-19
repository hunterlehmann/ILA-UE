// external/iframes/js/demo-labels.js
// MathJax labels drawn over a MathBox canvas (replaces WebGL text labels,
// which cannot render TeX).
// Load with a plain <script> after js/demo.js and js/mathjax-setup.js.
// Needs this CSS in the page (or copy into a shared stylesheet):
//   .label-layer  { position:absolute; top:0; left:0; width:100%; height:100%;
//                   pointer-events:none; overflow:hidden; z-index:1; }
//   .canvas-label { position:absolute; left:0; top:0; font-size:15px; white-space:nowrap;
//                   text-shadow:0 0 2px #fff,0 0 2px #fff,0 0 2px #fff; will-change:transform; }

// 'v1' -> 'v_{1}' for TeX display of URL-supplied labels
function texLabel(s) {
  return String(s).replace(/^([A-Za-z]+)(\d+)$/, '$1_{$2}');
}

// Coloured TeX, e.g. texColored(new Color('blue'), texLabel('v1'))
function texColored(color, tex) {
  return '\\color' + texColor(color) + '{' + tex + '}';
}

// Create a label layer.
//   container: element holding the MathBox canvas (e.g. #mathbox1)
//   demo:      the Demo instance (`this` inside the Demo callback)
//   view:      the view returned by demo.view(...)
//   opts.offsetY: default px above the anchor (25, matches demo.js labels)
// Returns { add({ position, visible, tex, offset }) -> { set(tex) } }
//   position(): [x,y,z] anchor in data coordinates, read every frame
//   visible():  optional; label hidden when it returns false
//   offset:     optional [dx, dy] in px, demo.js convention (+dy = up);
//               overrides offsetY for this label
function makeLabelLayer(container, demo, view, opts) {
  opts = opts || {};
  var OFFSET_Y = opts.offsetY != null ? opts.offsetY : 25;
  var layer = document.createElement('div');
  layer.className = 'label-layer';
  layer.setAttribute('aria-hidden', 'true');
  container.appendChild(layer);

  var canvas     = demo.canvas;
  var camera     = demo.camera;
  var viewMatrix = view[0].controller.viewMatrix;   // data coords -> world
  var proj = new THREE.Matrix4();
  var inv  = new THREE.Matrix4();
  var p    = new THREE.Vector3();
  var labels = [];

  function frame() {
    var w  = canvas.offsetWidth, h = canvas.offsetHeight;
    var cr = canvas.getBoundingClientRect();
    var lr = layer.getBoundingClientRect();
    var dx = cr.left - lr.left, dy = cr.top - lr.top;
    proj.multiplyMatrices(camera.projectionMatrix, inv.getInverse(camera.matrixWorld));
    labels.forEach(function (l) {
      var vis = l.visible ? l.visible() : true;
      if (vis) {
        var q = l.position();
        p.set(q[0], q[1], q[2] || 0).applyMatrix4(viewMatrix).applyProjection(proj);
        vis = p.z > -1 && p.z < 1;           // in front of the camera
        if (vis) {
          var x = dx + (p.x + 1) / 2 * w + l.ox;
          var y = dy + (1 - p.y) / 2 * h - l.oy;
          l.el.style.transform =
            'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) translate(-50%,-50%)';
        }
      }
      l.el.style.display = vis ? '' : 'none';
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  return {
    add: function (o) {
      var el = document.createElement('div');
      el.className = 'canvas-label';
      layer.appendChild(el);
      var off = o.offset || [0, OFFSET_Y];
      labels.push({ el: el, position: o.position, visible: o.visible, ox: off[0], oy: off[1] });
      if (o.tex) renderMath(o.tex, el);
      return { set: function (tex) { renderMath(tex, el); } };
    }
  };
}

// Convenience: one MathJax label at the midpoint of each vector
// (same anchor demo.js labeledVectors uses).
//   vectors, colors (Color objects), names (TeX or 'v1'-style strings), origins (optional)
function addVectorLabels(layer, vectors, colors, names, origins) {
  return vectors.map(function (v, i) {
    var o = origins ? origins[i] : null;
    return layer.add({
      position: function () {
        return o ? [(v[0] + o[0]) / 2, (v[1] + o[1]) / 2, ((v[2] || 0) + (o[2] || 0)) / 2]
                 : [v[0] / 2, v[1] / 2, (v[2] || 0) / 2];
      },
      tex: texColored(colors[i], texLabel(names[i]))
    });
  });
}
