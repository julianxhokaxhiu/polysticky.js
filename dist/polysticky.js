!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PolySticky=t():e.PolySticky=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);"auto"!==n.top&&(this.el=t,this.update())}var t,n,o;return t=e,(n=[{key:"update",value:function(){this.el&&(this.inViewport()?this.unstick():this.stick())}},{key:"stick",value:function(){var e=this;e.el.style.left="".concat(e.el.offsetLeft,"px"),e.el.style.right="".concat(e.el.parentElement.offsetWidth-e.el.offsetWidth+e.el.offsetLeft,"px"),e.el.style.position="fixed"}},{key:"unstick",value:function(){this.el.style.position="",this.el.style.left="",this.el.style.right=""}},{key:"inViewport",value:function(){var e=this.el.offsetTop;return(window.scrollY||window.pageYOffset)<=e}}])&&i(t.prototype,n),o&&i(t,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);"auto"!==n.bottom&&(this.el=t,this.update())}var t,n,i;return t=e,(n=[{key:"update",value:function(){this.el&&(this.inViewport()?this.unstick():this.stick())}},{key:"stick",value:function(){var e=this;e.el.style.left="".concat(e.el.offsetLeft,"px"),e.el.style.right="".concat(e.el.parentElement.offsetWidth-e.el.offsetWidth+e.el.offsetLeft,"px"),e.el.style.position="fixed"}},{key:"unstick",value:function(){this.el.style.position="",this.el.style.left="",this.el.style.right=""}},{key:"inViewport",value:function(){return(window.scrollY||window.pageYOffset)+window.innerHeight>=document.documentElement.offsetHeight-this.el.offsetHeight}}])&&r(t.prototype,n),i&&r(t,i),e}();function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,"default",(function(){return u}));var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.opts=n||{},this.init(t)}var t,n,i;return t=e,(n=[{key:"init",value:function(e){if(this.browserNeedsPolyfill()){var t="string"==typeof e?this.fetchElement(e):[e];t.length&&this.polyfill(t[0],window.getComputedStyle(t[0]))}}},{key:"polyfill",value:function(e,t){var n=[new o(e,t),new l(e,t)];this.attachScrollEvent((function(){n.forEach((function(e){e.update()}))}))}},{key:"browserNeedsPolyfill",value:function(){var e=document.createElement("a").style;return e.cssText="position: sticky",-1===e.position.indexOf("sticky")}},{key:"fetchElement",value:function(e){var t="querySelectorAll";return 0===e.indexOf("#")&&(t="getElementById",e=e.substr(1,e.length)),document[t](e)}},{key:"attachScrollEvent",value:function(e){var t=!1;window.addEventListener("scroll",(function(n){t||(window.requestAnimationFrame((function(){e&&e(),t=!1})),t=!0)}),{passive:!0})}}])&&f(t.prototype,n),i&&f(t,i),e}()}])}));