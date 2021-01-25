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

/***/ "./src/js/scripts/pagination.js":
/*!**************************************!*\
  !*** ./src/js/scripts/pagination.js ***!
  \**************************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var _urlParams$get;\n\n  var pagination = document.querySelector('.pagination');\n  var container = pagination.querySelector('.pagination__container');\n  var productTypeFilters = document.querySelectorAll('[data-filter]');\n  var elemOnPage = 6;\n  var urlParams = new URLSearchParams(window.location.search);\n  var initialFilterType = ((_urlParams$get = urlParams.get('searchValue')) !== null && _urlParams$get !== void 0 ? _urlParams$get : 'all').toLowerCase();\n\n  if (initialFilterType != null) {\n    filterProducts(initialFilterType); // getPagination();\n\n    toggleActiveCssClassForFilterButton(initialFilterType);\n  }\n\n  pagination.addEventListener('click', getFiltration);\n  pagination.addEventListener('click', getPagination);\n  pagination.addEventListener('click', toggleActiveCssClassForFilterButtonByClickEvent);\n\n  function createElem(arr) {\n    var html = arr.map(function (elem) {\n      return \"\\n            <li class=\\\"pagination__col\\\" data-type = \".concat(elem.type, \">\\n                <img class=\\\"pagination__img\\\" src = \").concat(elem.src, \" alt= \").concat(elem.alt, \">\\n                <div class=\\\"pagination__box\\\">\\n                    <h3>\").concat(elem.title, \"</h3>\\n                    <div class=\\\"pagination__box-text\\\">\\n                        <span>Per Kg</span>\\n                        \").concat(elem.cost, \"\\n                    </div>\\n                    <a class=\\\"pagination__box-button btn-main\\\">\\n                        <i class=\\\"fa fa-shopping-cart pagination__icon\\\"></i>\\n                        Add to Cart\\n                    </a>          \\n                </div>\\n            </li>\\n        \");\n    }).join('');\n    container.innerHTML = html;\n  }\n\n  function getPagination(e) {\n    var pageNum = +e.target.innerHTML;\n    if (!e.target.closest('.pagination__btn') || isNaN(pageNum)) return;\n    var start = (pageNum - 1) * elemOnPage;\n    var end = start + elemOnPage;\n    var viewElements = arrProducts.slice(start, end);\n    createElem(viewElements);\n  }\n\n  function getFiltration(e) {\n    var filterType = e.target.getAttribute('data-filter');\n    if (!filterType) return;\n    filterProducts(filterType);\n  }\n\n  function alphabetSort(a, b) {\n    return a.title.localeCompare(b.title);\n  }\n\n  function filterProducts(filterType) {\n    var filteredArr = arrProducts.filter(function (elem) {\n      if (filterType === 'all') {\n        return arrProducts;\n      } else {\n        return elem.type === filterType;\n      }\n    }).sort(alphabetSort);\n    createElem(filteredArr);\n  }\n\n  function toggleActiveCssClassForFilterButtonByClickEvent(e) {\n    var element = e.target;\n    var filterType = element.getAttribute('data-filter');\n    toggleActiveCssClassForFilterButton(filterType);\n  }\n\n  function toggleActiveCssClassForFilterButton(filterType) {\n    productTypeFilters.forEach(function (element) {\n      var thisFilterType = element.getAttribute('data-filter');\n\n      if (thisFilterType == filterType) {\n        element.classList.add('active');\n      } else {\n        element.classList.remove('active');\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/pagination.js?");

/***/ }),

/***/ "./src/js/scripts/product-filtering.js":
/*!*********************************************!*\
  !*** ./src/js/scripts/product-filtering.js ***!
  \*********************************************/
/***/ (() => {

eval("window.addEventListener('load', function () {}); // window.location.href='http://localhost:63342/fruitka-team/docs/shop.html?keyword=fruits'\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/product-filtering.js?");

/***/ }),

/***/ "./src/js/shop.js":
/*!************************!*\
  !*** ./src/js/shop.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/header-menu.js */ \"./src/js/scripts/header-menu.js\");\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/header-scroll.js */ \"./src/js/scripts/header-scroll.js\");\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_product_filtering_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/product-filtering.js */ \"./src/js/scripts/product-filtering.js\");\n/* harmony import */ var _scripts_product_filtering_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_product_filtering_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/header-sub-menu.js */ \"./src/js/scripts/header-sub-menu.js\");\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/loader.js */ \"./src/js/scripts/loader.js\");\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_loader_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scripts_carousel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/carousel.js */ \"./src/js/scripts/carousel.js\");\n/* harmony import */ var _scripts_carousel_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_carousel_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scripts_pagination_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/pagination.js */ \"./src/js/scripts/pagination.js\");\n/* harmony import */ var _scripts_pagination_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_pagination_js__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/shop.js?");

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
/******/ 	__webpack_require__("./src/js/shop.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;