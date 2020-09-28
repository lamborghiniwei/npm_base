(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: call, debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/call */ \"./src/utils/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _utils_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/debounce */ \"./src/utils/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _utils_debounce__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/throttle */ \"./src/utils/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _utils_throttle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack://utils/./src/main.js?");

/***/ }),

/***/ "./src/utils/call.js":
/*!***************************!*\
  !*** ./src/utils/call.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return call; });\n/*\n* call 源码实现\n* 2019-09-19\n* */\nfunction call (func, context, ...arg) {\n    //  null undefined 时候 上下文对象为window call时传入null undefined上下文是window\n   if (typeof context === 'object') {\n       context = context || window\n   } else {\n       context = Object.create(null)\n   }\n   console.log('context', context)\n   let fn = Symbol() // 用Symbol来做属性key的值,保持唯一性,避免冲突\n   context[fn] = func\n   const result = context[fn](...arg)\n   //   执行完避免永久存在\n   delete context[fn]\n   //   函数可以有返回值\n   return result\n}\n\n//# sourceURL=webpack://utils/./src/utils/call.js?");

/***/ }),

/***/ "./src/utils/debounce.js":
/*!*******************************!*\
  !*** ./src/utils/debounce.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return debounce; });\n/*\n* 防抖(debounce)\n* 2019-09-19\n* 在事件被触发的n秒后再执行回调函数, 如果在这n秒内又被触发,则重新计时延迟时间\n* 比如延时60秒触发, 在60秒内再次触发,重新计时60秒后再执行\n* */\n\nfunction debounce (fn, delay) {\n    let timer = null;\n    return function () {\n        let context = this;\n        let args = arguments;\n        timer && clearTimeout(timer)\n        timer = setTimeout(() => {\n            fn.apply(context, args)\n        }, delay)\n    }\n}\n\n//# sourceURL=webpack://utils/./src/utils/debounce.js?");

/***/ }),

/***/ "./src/utils/throttle.js":
/*!*******************************!*\
  !*** ./src/utils/throttle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return throttle; });\n/*\n* 函数节流(throttle)\n* 规定在一个单位时间内,只能触发一次函数,如果这个单位时间内触发多次函数,只有一次生效(间隔执行)\n* */\nfunction throttle(fn, delay) {\n    let timer = null;\n    return function () {\n        let context = this;\n        let arg = arguments;\n        if (!timer) {\n            timer = setTimeout(() => {\n                fn.call(context, arg)\n                timer = null\n            }, delay)\n        }\n    }\n}\n\n\n//# sourceURL=webpack://utils/./src/utils/throttle.js?");

/***/ })

/******/ });
});