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

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/search.js */ \"./src/js/scripts/search.js\");\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_search_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/header-menu.js */ \"./src/js/scripts/header-menu.js\");\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/header-scroll.js */ \"./src/js/scripts/header-scroll.js\");\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/header-sub-menu.js */ \"./src/js/scripts/header-sub-menu.js\");\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/loader.js */ \"./src/js/scripts/loader.js\");\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_loader_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scripts_form_validation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/form-validation.js */ \"./src/js/scripts/form-validation.js\");\n/* harmony import */ var _scripts_form_validation_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_validation_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/contact.js?");

/***/ }),

/***/ "./src/js/scripts/form-validation.js":
/*!*******************************************!*\
  !*** ./src/js/scripts/form-validation.js ***!
  \*******************************************/
/***/ (() => {

eval("window.addEventListener('load', function (event) {\n  var form = document.getElementById('contact__form');\n  var formInputs = form.querySelectorAll('[data-input-validation]');\n  var formSubmitted = false;\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    formSubmitted = true;\n    validateForm();\n  });\n  formInputs.forEach(function (element) {\n    element.addEventListener('keyup', function () {\n      if (formSubmitted) {\n        validateForm();\n      }\n    });\n  });\n\n  function validateForm() {\n    formInputs.forEach(function (element, index) {\n      var validationRule = element.getAttribute('data-input-validation');\n      var validationMessage = element.getAttribute('data-input-validation-message');\n\n      if (validationRule === 'required' && isEmpty(element.value)) {\n        showErrorMessage(element, validationMessage);\n      } else if (validationRule === 'phone' && !isPhoneValid(element.value)) {\n        showErrorMessage(element, validationMessage);\n      } else if (validationRule === 'email' && !isEmailValid(element.value)) {\n        showErrorMessage(element, validationMessage);\n      } else if (validationRule === 'min-length' && !isMinLengthValid(element.value, parseInt(element.getAttribute('data-input-validation-min-length')))) {\n        showErrorMessage(element, validationMessage);\n      } else {\n        hideErrorMessage(element);\n      }\n    });\n  }\n\n  function isEmpty(value) {\n    return value === '';\n  }\n\n  function isPhoneValid(value) {\n    var regPhone = /^\\+380\\d{3}\\d{2}\\d{2}\\d{2}$/;\n    return !isEmpty(value) && value.match(regPhone);\n  }\n\n  function isEmailValid(value) {\n    var regEmail = /^[\\w.+\\-]+@gmail\\.com$/;\n    return !isEmpty(value) && value.match(regEmail);\n  }\n\n  function isMinLengthValid(value, minLength) {\n    return !isEmpty(value) && value.length >= minLength;\n  }\n\n  function showErrorMessage(formInput, message) {\n    var errorMessageId = generateErrorMessageId(formInput);\n    var errorMessage = document.getElementById(errorMessageId);\n\n    if (errorMessage == null) {\n      message = message || \"Enter a valid \".concat(formInput.name);\n      errorMessage = document.createElement('div');\n      errorMessage.id = errorMessageId;\n      errorMessage.className = 'contact-wrapper__error-message';\n      errorMessage.innerHTML = \"<p>\".concat(message, \"</p> <i class=\\\"fa fa-ban\\\" aria-hidden=\\\"true\\\"></i>\");\n      formInput.parentElement.insertBefore(errorMessage, formInput.nextSibling);\n    }\n  }\n\n  function hideErrorMessage(formInput) {\n    var errorMessageId = generateErrorMessageId(formInput);\n    var errorMessage = document.getElementById(errorMessageId);\n\n    if (errorMessage != null) {\n      errorMessage.remove();\n    }\n  }\n\n  function generateErrorMessageId(formInput) {\n    return \"\".concat(formInput.id, \":\").concat(formInput.name);\n  }\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/form-validation.js?");

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
/******/ 	__webpack_require__("./src/js/contact.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;