/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/checkout.js":
/*!****************************!*\
  !*** ./src/js/checkout.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/search.js */ \"./src/js/scripts/search.js\");\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_search_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/slider.js */ \"./src/js/scripts/slider.js\");\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/header-menu.js */ \"./src/js/scripts/header-menu.js\");\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/header-scroll.js */ \"./src/js/scripts/header-scroll.js\");\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_slider_owners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/slider-owners.js */ \"./src/js/scripts/slider-owners.js\");\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/header-sub-menu.js */ \"./src/js/scripts/header-sub-menu.js\");\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/loader.js */ \"./src/js/scripts/loader.js\");\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_loader_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scripts_carousel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/carousel.js */ \"./src/js/scripts/carousel.js\");\n/* harmony import */ var _scripts_carousel_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_carousel_js__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/checkout.js?");

/***/ }),

/***/ "./src/js/scripts/carousel.js":
/*!************************************!*\
  !*** ./src/js/scripts/carousel.js ***!
  \************************************/
/***/ (() => {

"use strict";
eval("\n\nwindow.addEventListener('load', function () {\n  var carouselRow = document.getElementById('carousel');\n  var item = carouselRow.querySelector('.carousel__item');\n\n  function carousel() {\n    var itemWidth = item.offsetWidth;\n    var firstElem = carouselRow.firstElementChild;\n    carouselRow.style.transform = \"translateX(-\".concat(itemWidth, \"px)\");\n    carouselRow.addEventListener('transitionend', transitionEvent);\n\n    function transitionEvent() {\n      carouselRow.appendChild(firstElem);\n      carouselRow.style.transition = 'none';\n      carouselRow.style.transform = \"translateX(0)\";\n      setTimeout(function () {\n        carouselRow.style.transition = 'transform 1s';\n      });\n      carouselRow.removeEventListener('transitionend', transitionEvent);\n    }\n  }\n\n  setInterval(carousel, 2000);\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/carousel.js?");

/***/ }),

/***/ "./src/js/scripts/header-menu.js":
/*!***************************************!*\
  !*** ./src/js/scripts/header-menu.js ***!
  \***************************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var menuBox = document.querySelector('.header__menu-box');\n  var menuBurger = menuBox.querySelector('.header__menu-burger');\n  menuBurger.addEventListener('click', function () {\n    menuBox.querySelector('.header__menu-burger').classList.toggle('active');\n    menuBox.querySelector('.header__menu').classList.toggle('active');\n    document.body.classList.toggle('no-scroll');\n  });\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/header-menu.js?");

/***/ }),

/***/ "./src/js/scripts/header-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/scripts/header-scroll.js ***!
  \*****************************************/
/***/ (() => {

eval("window.addEventListener('scroll', function () {\n  var headerScroll = document.getElementById('header-scroll');\n  var headerInner = document.querySelector('.header__inner');\n  var scrollDown = window.pageYOffset;\n\n  if (scrollDown >= 100) {\n    headerScroll.classList.add('header_background-color');\n    headerInner.classList.add('header__inner_scroll');\n  } else if (scrollDown === 0) {\n    headerScroll.classList.remove('header_background-color');\n    headerInner.classList.remove('header__inner_scroll');\n  }\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/header-scroll.js?");

/***/ }),

/***/ "./src/js/scripts/header-sub-menu.js":
/*!*******************************************!*\
  !*** ./src/js/scripts/header-sub-menu.js ***!
  \*******************************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var headerTitle = document.getElementById('header__menu-title');\n  var itemTitle = headerTitle.querySelectorAll('[data-sub-menu]');\n  itemTitle.forEach(function (element) {\n    element.addEventListener('mouseenter', showAndHiddenElement, false);\n    element.addEventListener('mouseleave', showAndHiddenElement, false);\n  });\n\n  function showAndHiddenElement() {\n    if (this.children.length > 1) {\n      this.children[1].classList.toggle('header_sub-menu-active');\n    } else {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/header-sub-menu.js?");

/***/ }),

/***/ "./src/js/scripts/loader.js":
/*!**********************************!*\
  !*** ./src/js/scripts/loader.js ***!
  \**********************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var loaderWrapper = document.getElementById('loader__wrapper');\n\n  function hideLoader() {\n    loaderWrapper.classList.add('loader-hidden');\n  }\n\n  function hideLoaderRemove() {\n    loaderWrapper.remove();\n  }\n\n  hideLoader();\n  setTimeout(hideLoaderRemove, 1000);\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/loader.js?");

/***/ }),

/***/ "./src/js/scripts/search.js":
/*!**********************************!*\
  !*** ./src/js/scripts/search.js ***!
  \**********************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var searchLink = document.getElementById('search-link');\n  searchLink.addEventListener('click', function () {\n    var searchBox = document.createElement('section');\n    searchBox.classList.add('search');\n    searchBox.id = 'search-window';\n    searchBox.innerHTML = \"\\n                                <div class=\\\"search__wrapper\\\">\\n                                  <div class=\\\"search__btn_close\\\" id=\\\"search-close\\\"><i class=\\\"fa fa-close\\\"></i></div>\\n                                  <div class=\\\"search__container\\\">\\n                                    <h3>search for:</h3>\\n                                    <input class=\\\"search__line\\\" id=\\\"search-input\\\" type=\\\"text\\\" placeholder=\\\"Keywords\\\"/>\\n                                    <button class=\\\"search__btn\\\" id=\\\"search-btn-send\\\" type=\\\"submit\\\">Search<i class=\\\"fa fa-search\\\"></i></button>\\n                                  </div>\\n                                </div>\\n                              \";\n    document.body.prepend(searchBox);\n    var searchWindow = document.getElementById('search-window');\n    var searchClose = document.getElementById('search-close');\n    var searchInput = document.getElementById('search-input');\n    var searchBtnSend = document.getElementById('search-btn-send');\n    searchClose.addEventListener('click', function () {\n      searchWindow.remove();\n    });\n    searchBtnSend.addEventListener('click', function (e) {\n      var params = new URLSearchParams(window.location.search);\n      params.set('searchValue', searchInput.value);\n      window.location = 'shop.html?' + params.toString();\n    });\n  });\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/search.js?");

/***/ }),

/***/ "./src/js/scripts/slider-owners.js":
/*!*****************************************!*\
  !*** ./src/js/scripts/slider-owners.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/js/scripts/slider.js\");\n\nwindow.addEventListener('load', function () {\n  var slider = new _slider_js__WEBPACK_IMPORTED_MODULE_0__.AutoSlider(document.querySelectorAll('#local-shop-owner_slider li'), 3000);\n  slider.init();\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/slider-owners.js?");

/***/ }),

/***/ "./src/js/scripts/slider.js":
/*!**********************************!*\
  !*** ./src/js/scripts/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => /* binding */ Slider,\n/* harmony export */   \"AutoSlider\": () => /* binding */ AutoSlider\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(slides) {\n    _classCallCheck(this, Slider);\n\n    this.sliderElements = [];\n    this.currentIndex = 0;\n\n    var _iterator = _createForOfIteratorHelper(slides),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var slide = _step.value;\n        this.sliderElements.push(slide);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n\n  _createClass(Slider, [{\n    key: \"prev\",\n    value: function prev() {\n      if (this.currentIndex === 0) {\n        this.setSlide(this.sliderElements.length - 1);\n      } else {\n        this.setSlide(this.currentIndex - 1);\n      }\n    }\n  }, {\n    key: \"next\",\n    value: function next() {\n      if (this.currentIndex === this.sliderElements.length - 1) {\n        this.setSlide(0);\n      } else {\n        this.setSlide(this.currentIndex + 1);\n      }\n    }\n  }, {\n    key: \"setSlide\",\n    value: function setSlide(index) {\n      var _this = this;\n\n      this.currentIndex = index;\n      this.sliderElements.map(function (element, index) {\n        if (index === _this.currentIndex) {\n          element.classList.remove('slider-hidden');\n          element.classList.add('slider-shown');\n        } else {\n          element.classList.add('slider-hidden');\n          element.classList.remove('slider-shown');\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.setSlide(0);\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.sliderElements.map(function (element, index) {\n        element.classList.remove('slider-hidden');\n        element.classList.remove('slider-shown');\n      });\n    }\n  }]);\n\n  return Slider;\n}();\nvar AutoSlider = /*#__PURE__*/function (_Slider) {\n  _inherits(AutoSlider, _Slider);\n\n  var _super = _createSuper(AutoSlider);\n\n  function AutoSlider(slides, autoscrollInterval) {\n    var _this2;\n\n    _classCallCheck(this, AutoSlider);\n\n    _this2 = _super.call(this, slides);\n    _this2.timeoutId = null;\n    _this2.autoscrollInterval = autoscrollInterval || 5000;\n    return _this2;\n  }\n\n  _createClass(AutoSlider, [{\n    key: \"setSlide\",\n    value: function setSlide(index) {\n      this.stopAutoscroll();\n      this.startAutoscroll(this.currentIndex, index);\n\n      _get(_getPrototypeOf(AutoSlider.prototype), \"setSlide\", this).call(this, index);\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      _get(_getPrototypeOf(AutoSlider.prototype), \"destroy\", this).call(this);\n\n      this.stopAutoscroll();\n    }\n  }, {\n    key: \"stopAutoscroll\",\n    value: function stopAutoscroll() {\n      if (this.timeoutId) {\n        clearTimeout(this.timeoutId);\n      }\n    }\n  }, {\n    key: \"startAutoscroll\",\n    value: function startAutoscroll(currentIndex, nextIndex) {\n      var _this3 = this;\n\n      this.timeoutId = setTimeout(function () {\n        if (nextIndex >= currentIndex) {\n          _this3.next();\n        } else {\n          _this3.prev();\n        }\n      }, this.autoscrollInterval);\n    }\n  }]);\n\n  return AutoSlider;\n}(Slider); // export default function Slider(slides, autoscrollInterval) {\n//     const me = this;\n//     let sliderElements;\n//     let currentIndex = 0;\n//     let timeoutId;\n//\n//\n//     me.prev = prev;\n//     me.next = next;\n//     me.setSlide = setSlide;\n//     me.touchSlider = touchSlider;\n//     me.getInitialPoint = getInitialPoint;\n//\n//     {\n//         sliderElements = [];\n//         for (const slide of slides) {\n//\n//             sliderElements.push(slide);\n//             slide.classList.add('slider-hidden');\n//             slide.classList.remove('slider-shown');\n//         }\n//         setSlide(0);\n//     }\n//\n//\n//     function prev() {\n//         changeSlide('back');\n//     }\n//\n//     function next() {\n//         changeSlide('forward');\n//     }\n//\n//     function setSlide(index) {\n//         currentIndex = index;\n//         stopAutoSlide();\n//\n//         let direction;\n//         if (index >= currentIndex) {\n//             direction = 'forward';\n//         } else {\n//             direction = 'back';\n//         }\n//         toggleSlides();\n//         startAutoSlide(direction);\n//     }\n//\n//\n//     function changeSlide(direction) {\n//         stopAutoSlide();\n//\n//         if (direction === 'back') {\n//             if (currentIndex === 0) {\n//                 currentIndex = sliderElements.length - 1;\n//             } else {\n//                 currentIndex = currentIndex - 1;\n//             }\n//         } else {\n//             if (currentIndex === sliderElements.length - 1) {\n//                 currentIndex = 0;\n//             } else {\n//                 currentIndex = currentIndex + 1;\n//             }\n//         }\n//\n//         toggleSlides();\n//         startAutoSlide(direction);\n//     }\n//\n//     function toggleSlides() {\n//\n//         sliderElements.map(function (element, index) {\n//                 if (index === currentIndex) {\n//                     element.classList.remove('slider-hidden');\n//                     element.classList.add('slider-shown');\n//                 } else {\n//                     element.classList.add('slider-hidden');\n//                     element.classList.remove('slider-shown');\n//                 }\n//             }\n//         );\n//     }\n//\n//     function startAutoSlide(direction) {\n//         if (autoscrollInterval) {\n//             timeoutId = setTimeout(function () {\n//                 changeSlide(direction);\n//             }, autoscrollInterval);\n//         }\n//     }\n//\n//     function stopAutoSlide() {\n//         if (timeoutId) {\n//             clearTimeout(timeoutId);\n//         }\n//     }\n//     function getInitialPoint() {\n//         return event.changedTouches[0];\n//     }\n//\n//     function touchSlider(initialPoint, element) {\n//         let finalPoint = event.changedTouches[0];\n//         const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);\n//         const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);\n//         if (xAbs > 20 || yAbs > 20) {\n//             if (xAbs > yAbs) {\n//                 if (finalPoint.pageX < initialPoint.pageX) {\n//                     element.next();\n//                 } else {\n//                     element.prev()\n//                 }\n//             }\n//         }\n//     }\n// }\n//\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/checkout.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;