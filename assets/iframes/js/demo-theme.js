// external/iframes/js/demo-theme.js
// Book colour theme for ILA demo.js demos.
// Load with a plain <script> IMMEDIATELY AFTER js/demo.js (it patches Color).
//
// demo.js resolves named colours (new Color("blue")) from a private table.
// This file intercepts those names so every Color built afterwards -- in the
// demo code AND inside demo.js (e.g. linearCombo's default red point) --
// uses the theme. It also resets the --palette-* CSS variables demo.js sets.
//
// Per-demo overrides: before loading this file, set e.g.
//   window.DEMO_THEME_OVERRIDES = { brown: '#…' };

var DEMO_THEME = (function () {
  var theme = {
    // High contrast against the violet span surface
    blue:   '#385B8A',
    red:    '#B5121F',
    green:  '#376529',
    // demo.js orange (#FF7F00) and yellow (#B3B300) are too light for text on white
    orange: '#8B6E3C',
    yellow: '#8B6E3C',
    pink:   '#B25783'
  };
  var extra = window.DEMO_THEME_OVERRIDES || {};
  for (var k in extra) {
    if (Object.prototype.hasOwnProperty.call(extra, k)) theme[k.toLowerCase()] = extra[k];
  }

  if (!window.Color || !Color.prototype || !Color.prototype.set) {
    console.error('demo-theme.js: load it after js/demo.js');
    return theme;
  }

  // Color's constructor binds this.set from the prototype at construction
  // time, so patching the prototype affects every Color created from now on.
  var origSet = Color.prototype.set;
  Color.prototype.set = function () {
    if (arguments.length === 1 && typeof arguments[0] === 'string') {
      var name = arguments[0].toLowerCase();
      if (Object.prototype.hasOwnProperty.call(theme, name)) {
        return origSet.call(this, theme[name]);
      }
    }
    return origSet.apply(this, arguments);
  };

  // demo.js writes --palette-<name> on <body>; overwrite with theme values
  function applyCss() {
    for (var n in theme) {
      if (Object.prototype.hasOwnProperty.call(theme, n)) {
        document.body.style.setProperty('--palette-' + n, theme[n]);
      }
    }
  }
  if (document.body) applyCss();
  else document.addEventListener('DOMContentLoaded', applyCss);

  return theme;
})();
