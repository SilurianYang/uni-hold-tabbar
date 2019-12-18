(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HoldTabbar"] = factory();
	else
		root["HoldTabbar"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/base.js":
/*!****************************!*\
  !*** ./src/config/base.js ***!
  \****************************/
/*! exports provided: eventBind, BaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventBind\", function() { return eventBind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseConfig\", function() { return BaseConfig; });\nvar eventBind = {\n  dbClick: 'doubleclick',\n  click: 'click',\n  touchstart: 'touchstart',\n  touchmove: 'touchmove',\n  touchend: 'touchend'\n};\nvar BaseConfig = {\n  registerPageHook: false,\n  id: 'HoldTabbar',\n  style: {\n    width: '100%',\n    height: '50px',\n    opacity: 0,\n    bottom: '0'\n  },\n  event: {},\n  beforeMount: function beforeMount() {},\n  mounted: function mounted() {}\n};\n\n//# sourceURL=webpack://HoldTabbar/./src/config/base.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_createdTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init/createdTab */ \"./src/init/createdTab.js\");\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/util */ \"./src/util/util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar HoldTabbar =\n/*#__PURE__*/\nfunction () {\n  function HoldTabbar() {\n    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, HoldTabbar);\n\n    var isNext = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__[\"assertTabbar\"])();\n\n    if (!isNext) {\n      return false;\n    }\n\n    config = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__[\"mergeConfig\"])(config);\n    this.tabbarView = Object(_init_createdTab__WEBPACK_IMPORTED_MODULE_0__[\"init\"])(config, isNext);\n  }\n\n  _createClass(HoldTabbar, [{\n    key: \"hideHoldTab\",\n    value: function hideHoldTab() {\n      this.tabbarView.hide();\n    }\n  }, {\n    key: \"showHoldTab\",\n    value: function showHoldTab() {\n      this.tabbarView.show();\n    }\n  }, {\n    key: \"getTabbarView\",\n    get: function get() {\n      return this.tabbarView;\n    }\n  }, {\n    key: \"isVisible\",\n    get: function get() {\n      return this.tabbarView.isVisible();\n    }\n  }]);\n\n  return HoldTabbar;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HoldTabbar);\n\n//# sourceURL=webpack://HoldTabbar/./src/index.js?");

/***/ }),

/***/ "./src/init/addEvent.js":
/*!******************************!*\
  !*** ./src/init/addEvent.js ***!
  \******************************/
/*! exports provided: initAddEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAddEvents\", function() { return initAddEvents; });\n/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/base */ \"./src/config/base.js\");\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ \"./src/util/util.js\");\n\n\n/**\r\n * 根据坐标获得点击的位置 并传入到开发者声明的回调函数中\r\n */\n\nvar xyTransformTo = function xyTransformTo(type, _ref, tabList, callBack, isHook) {\n  var pageX = _ref.pageX;\n  var length = tabList.length;\n  var screenWidth = plus.screen.resolutionWidth;\n  var single = (screenWidth / length).toFixed(4);\n  var index = Math.ceil(pageX.toFixed(4) / single) - 1;\n  var tab = tabList[index];\n\n  var _getActiveTabPage = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__[\"getActiveTabPage\"])(),\n      route = _getActiveTabPage.route; //获取当前页面的路径\n\n\n  if (route != tab.pagePath) {\n    callBack(index, tab, function () {\n      callPageHook(type, isHook, tab);\n    });\n  } else {\n    callBack(index, tab, function () {});\n    callPageHook(type, isHook, tab);\n  }\n};\n/**\r\n * 执行页面生命钩子\r\n * @param {Object} type\r\n * @param {Object} isHook\r\n * @param {Object} tab\r\n */\n\n\nvar callPageHook = function callPageHook(type, isHook, tab) {\n  if (isHook) {\n    //如果有设置页面拦截函数 则调用\n    var page = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__[\"getActiveTabPage\"])(tab.pagePath);\n\n    if (page) {\n      var onTabEvent = page.$vm.$options.onTabEvent;\n      onTabEvent && onTabEvent(type, tab);\n    }\n  }\n};\n/**\r\n * 绑定一些指定的事件\r\n * @param {Object} event 事假json对象\r\n * @param {Object} view 当前底部的tabbar遮罩层\r\n */\n\n\nvar initAddEvents = function initAddEvents(event, view, tabList, isHook) {\n  var _loop = function _loop(key) {\n    var callBack = event[key];\n    var type = _config_base__WEBPACK_IMPORTED_MODULE_0__[\"eventBind\"][key];\n    view.addEventListener(type, function (e) {\n      xyTransformTo(type, e, tabList, callBack, isHook);\n    });\n  };\n\n  for (var key in event) {\n    _loop(key);\n  }\n};\n\n//# sourceURL=webpack://HoldTabbar/./src/init/addEvent.js?");

/***/ }),

/***/ "./src/init/createdTab.js":
/*!********************************!*\
  !*** ./src/init/createdTab.js ***!
  \********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _addEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEvent */ \"./src/init/addEvent.js\");\n\n/**\r\n * 通过配置信息创建指定tabbar层\r\n */\n\nvar createdTab = function createdTab() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      id = _ref.id,\n      style = _ref.style,\n      beforeMount = _ref.beforeMount,\n      mounted = _ref.mounted,\n      event = _ref.event,\n      registerPageHook = _ref.registerPageHook;\n\n  var tabList = arguments.length > 1 ? arguments[1] : undefined;\n  var tabbarView = new plus.nativeObj.View(id, style);\n  var isHold = beforeMount(tabbarView, tabList);\n\n  if (!isHold) {\n    Object(_addEvent__WEBPACK_IMPORTED_MODULE_0__[\"initAddEvents\"])(event, tabbarView, tabList, registerPageHook);\n    mounted(tabbarView, tabList);\n    tabbarView.show();\n    return tabbarView;\n  }\n};\n/**\r\n * 初始化入口\r\n * @param {*} config \r\n * @param {*} tabList \r\n */\n\n\nvar init = function init(config, tabList) {\n  return createdTab(config, tabList);\n};\n\n//# sourceURL=webpack://HoldTabbar/./src/init/createdTab.js?");

/***/ }),

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: mergeConfig, assertTabbar, getActiveTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeConfig\", function() { return mergeConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assertTabbar\", function() { return assertTabbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActiveTabPage\", function() { return getActiveTabPage; });\n/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/base */ \"./src/config/base.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/**\r\n * 合并配置信息 \r\n * @param {Object} config 开发者传递的配置信息\r\n */\n\nvar mergeConfig = function mergeConfig(config) {\n  var CONFIG = {};\n\n  for (var key in _config_base__WEBPACK_IMPORTED_MODULE_0__[\"BaseConfig\"]) {\n    var item = _config_base__WEBPACK_IMPORTED_MODULE_0__[\"BaseConfig\"][key];\n\n    if (config[key] == null) {\n      CONFIG[key] = item;\n    } else if (config[key].constructor === Object) {\n      CONFIG[key] = _objectSpread({}, item, {}, config[key]);\n    } else {\n      CONFIG[key] = config[key];\n    }\n  }\n\n  return CONFIG;\n};\n/**\r\n * 断言当前是否有 原生tabbar\r\n */\n\nvar assertTabbar = function assertTabbar() {\n  if (__uniConfig.tabBar && __uniConfig.tabBar.list && __uniConfig.tabBar.list.length > 0) {\n    var list = JSON.parse(JSON.stringify(__uniConfig.tabBar.list));\n\n    for (var i = 0; i < list.length; i++) {\n      list[i].pagePath = list[i].pagePath.replace(/\\.html$/, '');\n    }\n\n    return list;\n  } else {\n    console.error('当前没有uni-app自带的原生tabbar 无须进行拦截  告辞!!');\n    return false;\n  }\n};\n/**\r\n * 获取当前底部tabbar页面对象\r\n * @param {Object} path 当前点击的页面路径\r\n */\n\nvar getActiveTabPage = function getActiveTabPage(path) {\n  var pages = getCurrentPages();\n\n  if (path == null) {\n    return pages[0];\n  }\n\n  for (var i = 0; i < pages.length; i++) {\n    var item = pages[i];\n\n    if (item.route === path) {\n      return item;\n    }\n  }\n\n  return false;\n};\n\n//# sourceURL=webpack://HoldTabbar/./src/util/util.js?");

/***/ })

/******/ });
});