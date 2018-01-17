(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PolySticky"] = factory();
	else
		root["PolySticky"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _top = __webpack_require__(1);

var _top2 = _interopRequireDefault(_top);

var _bottom = __webpack_require__(2);

var _bottom2 = _interopRequireDefault(_bottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(selector, config) {
    _classCallCheck(this, _class);

    var me = this;

    me.opts = config || {};

    me.init(selector);
  }

  _createClass(_class, [{
    key: 'init',
    value: function init(selector) {
      var me = this;

      if (me.browserNeedsPolyfill()) {
        var el = me.fetchElement(selector);

        if (el.length) me.polyfill(el[0], window.getComputedStyle(el[0]));
      }
    }
  }, {
    key: 'polyfill',
    value: function polyfill(element, style) {
      var me = this,
          polyfills = [new _top2.default(element, style), new _bottom2.default(element, style)];

      me.attachScrollEvent(function () {
        polyfills.forEach(function (polyfill) {
          polyfill.update();
        });
      });
    }
  }, {
    key: 'browserNeedsPolyfill',
    value: function browserNeedsPolyfill() {
      var el = document.createElement('a'),
          style = el.style;

      style.cssText = 'position: sticky';

      return style.position.indexOf('sticky') === -1;
    }

    /**
     * Kudos to https://blog.garstasio.com/you-dont-need-jquery/selectors/
     * @param selector The CSS selector
     */

  }, {
    key: 'fetchElement',
    value: function fetchElement(selector) {
      var selectorType = 'querySelectorAll';

      if (selector.indexOf('#') === 0) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
      }

      return document[selectorType](selector);
    }
  }, {
    key: 'attachScrollEvent',
    value: function attachScrollEvent(action) {
      var ticking = false;

      window.addEventListener('scroll', function (e) {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            if (action) action();
            ticking = false;
          });

          ticking = true;
        }
      }, {
        passive: true
      });
    }
  }]);

  return _class;
}();

exports.default = _class;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor(element, style) {
    const me = this

    if (style.top !== 'auto') {
      me.el = element

      me.update()
    }
  }
  update() {
    const me = this

    if (me.el) {
      if (!me.inViewport()) {
        me.stick()
      } else {
        me.unstick()
      }
    }
  }
  stick() {
    const me = this

    me.el.style.left = `${me.el.offsetLeft}px`
    me.el.style.right = `${me.el.parentElement.offsetWidth - me.el.offsetWidth + me.el.offsetLeft}px`
    me.el.style.position = 'fixed'
  }
  unstick() {
    const me = this

    me.el.style.position = ''
    me.el.style.left = ''
    me.el.style.right = ''
  }
  inViewport() {
    const me = this,
          offset = me.el.offsetTop,
          scroll = window.scrollY

    return (scroll <= offset)
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor(element, style) {
    const me = this

    if (style.bottom !== 'auto') {
      me.el = element

      me.update()
    }
  }
  update() {
    const me = this

    if (me.el) {
      if (!me.inViewport()) {
        me.stick()
      } else {
        me.unstick()
      }
    }
  }
  stick() {
    const me = this

    me.el.style.left = `${me.el.offsetLeft}px`
    me.el.style.right = `${me.el.parentElement.offsetWidth - me.el.offsetWidth + me.el.offsetLeft}px`
    me.el.style.position = 'fixed'
  }
  unstick() {
    const me = this

    me.el.style.position = ''
    me.el.style.left = ''
    me.el.style.right = ''
  }
  inViewport() {
    const me = this,
          scroll = window.scrollY + window.innerHeight,
          offset = document.documentElement.offsetHeight - me.el.offsetHeight

    return (scroll >= offset )
  }
});

/***/ })
/******/ ]);
});