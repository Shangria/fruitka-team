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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scripts_data_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/data-storage.js */ \"./src/js/scripts/data-storage.js\");\n/* harmony import */ var _scripts_data_storage_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_data_storage_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_cart_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/cart-function.js */ \"./src/js/scripts/cart-function.js\");\n/* harmony import */ var _scripts_cart_function_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_cart_function_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_search_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/search-filter.js */ \"./src/js/scripts/search-filter.js\");\n/* harmony import */ var _scripts_search_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_search_filter_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/search.js */ \"./src/js/scripts/search.js\");\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_search_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/header-menu.js */ \"./src/js/scripts/header-menu.js\");\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/header-scroll.js */ \"./src/js/scripts/header-scroll.js\");\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/header-sub-menu.js */ \"./src/js/scripts/header-sub-menu.js\");\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _scripts_timer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/timer.js */ \"./src/js/scripts/timer.js\");\n/* harmony import */ var _scripts_timer_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_timer_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _scripts_slider_owners_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/slider-owners.js */ \"./src/js/scripts/slider-owners.js\");\n/* harmony import */ var _scripts_video_opener_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/video-opener.js */ \"./src/js/scripts/video-opener.js\");\n/* harmony import */ var _scripts_video_opener_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scripts_video_opener_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/loader.js */ \"./src/js/scripts/loader.js\");\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scripts_loader_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _scripts_carousel_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/carousel.js */ \"./src/js/scripts/carousel.js\");\n/* harmony import */ var _scripts_carousel_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scripts_carousel_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _scripts_banner_slider_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/banner-slider.js */ \"./src/js/scripts/banner-slider.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/index.js?");

/***/ }),

/***/ "./src/js/scripts/banner-slider.js":
/*!*****************************************!*\
  !*** ./src/js/scripts/banner-slider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/js/scripts/slider.js\");\n\nwindow.addEventListener('load', function () {\n  var slider = new _slider_js__WEBPACK_IMPORTED_MODULE_0__.AutoSlider(document.querySelectorAll('[data-sliders-box]'), 3000);\n  slider.init();\n  var arrowLeft = document.getElementById('data-slider-left');\n  var arrowRight = document.getElementById('data-slider-right');\n  arrowLeft.addEventListener('click', function () {\n    slider.prev();\n  });\n  arrowRight.addEventListener('click', function () {\n    slider.next();\n  });\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/banner-slider.js?");

/***/ }),

/***/ "./src/js/scripts/carousel.js":
/*!************************************!*\
  !*** ./src/js/scripts/carousel.js ***!
  \************************************/
/***/ (() => {

"use strict";
eval("\n\nwindow.addEventListener('load', function () {\n  var carouselRow = document.getElementById('carousel');\n  var item = carouselRow.querySelector('.carousel__item');\n\n  function carousel() {\n    var itemWidth = item.offsetWidth;\n    var firstElem = carouselRow.firstElementChild;\n    carouselRow.style.transform = \"translateX(-\".concat(itemWidth, \"px)\");\n    carouselRow.addEventListener('transitionend', transitionEvent);\n\n    function transitionEvent() {\n      carouselRow.appendChild(firstElem);\n      carouselRow.style.transition = 'none';\n      carouselRow.style.transform = \"translateX(0)\";\n      setTimeout(function () {\n        carouselRow.style.transition = 'transform 1s';\n      });\n      carouselRow.removeEventListener('transitionend', transitionEvent);\n    }\n  }\n\n  setInterval(carousel, 2000);\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/carousel.js?");

/***/ }),

/***/ "./src/js/scripts/cart-function.js":
/*!*****************************************!*\
  !*** ./src/js/scripts/cart-function.js ***!
  \*****************************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n(function () {\n  var RENDER_CARD_EVENT_NAME = 'render-cart';\n  var cart = getCartFromStorage();\n\n  if (cart == null) {\n    saveCartToStorage([]);\n  }\n\n  document.addEventListener('registerAddToCartElements', function (event) {\n    registerAddToCartElements(event.target);\n  });\n  document.addEventListener('registerRemoveFromCartElements', function (event) {\n    registerRemoveFromCartElements(event.target);\n  });\n  window.addEventListener('load', function () {\n    document.dispatchEvent(new CustomEvent('registerAddToCartElements'));\n    document.dispatchEvent(new CustomEvent('registerRemoveFromCartElements'));\n    var clearBtn = document.getElementById('clear-cart');\n\n    if (clearBtn != null) {\n      clearBtn.addEventListener('click', function () {\n        document.getElementById('body-container').remove();\n        document.querySelector('.total-table-body_data').innerText = '';\n        saveCartToStorage([]);\n      });\n    }\n\n    function calculateTheOrderAmount() {\n      var dataSum = document.querySelector('.total-table-body_data');\n      var dataPrice = document.querySelectorAll('.product-table-body__total');\n      var result;\n      var sum = 0;\n\n      _toConsumableArray(dataPrice).map(function (elem) {\n        result = +elem.textContent.replace(/[^\\d]/g, '');\n        sum += result;\n        dataSum.innerHTML = '$' + sum;\n      });\n    }\n\n    var cartContainer = document.getElementById('cart-container');\n\n    if (cartContainer != null) {\n      renderCart(cartContainer);\n      document.addEventListener(RENDER_CARD_EVENT_NAME, function (e) {\n        renderCart(cartContainer);\n      });\n    }\n\n    function renderCart(cartContainer) {\n      var products = JSON.parse(window.localStorage.getItem('products'));\n      var productsInCart = getCartFromStorage();\n      var cartProducts = products.filter(function (p) {\n        return productsInCart.includes(p.title);\n      });\n      cartContainer.innerHTML = \"\\n                <table class=\\\"product-table\\\">\\n                    <thead class=\\\"product-table-head\\\">\\n                        <tr class=\\\"product-table-head__row\\\">\\n                            <th class=\\\"product-table-head__titles\\\"></th>\\n                            <th class=\\\"product-table-head__titles\\\">Product Image</th>\\n                            <th class=\\\"product-table-head__titles\\\">Name</th>\\n                            <th class=\\\"product-table-head__titles\\\">Price</th>\\n                            <th class=\\\"product-table-head__titles\\\">Quantity</th>\\n                            <th class=\\\"product-table-head__titles\\\">Total</th>\\n                        </tr>\\n                    </thead>\\n                    <tbody class=\\\"product-table-body\\\" id=\\\"body-container\\\"></tbody>\\n                </table>\\n            \";\n      var tbody = cartContainer.querySelector('tbody');\n      cartProducts.forEach(function (product) {\n        var tr = document.createElement('tr');\n        tr.classList.add('product-table-body__row');\n        tr.innerHTML = \"\\n                        <td class=\\\"product-table-body_data\\\">\\n                            <a class=\\\"product-table-body_remove__link\\\" data-remove-from-cart=\\\"\".concat(product.title, \"\\\">\\n                                <i class=\\\"product-table-body_remove fa fa-times-circle\\\"></i>\\n                            </a>\\n                        </td>\\n                        <td class=\\\"product-table-body_data\\\"><img class=\\\"product-table-body__image\\\" src=\\\"\").concat(product.src, \"\\\"/></td>\\n                        <td class=\\\"product-table-body__name product-table-body_data\\\">\").concat(product.title, \"</td>\\n                        <td class=\\\"product-table-body__price product-table-body_data\\\">$\").concat(product.cost, \"</td>\\n                        <td class=\\\"product-table-body__quantity product-table-body_data\\\">\\n                            <input class=\\\"product-table-body__quantity__input\\\" type=\\\"number\\\" value=\\\"1\\\"/>\\n                        </td>\\n                        <td class=\\\"product-table-body__total product-table-body_data\\\">$\").concat(product.cost, \"</td>\\n                \");\n        tbody.append(tr);\n        calculateTheOrderAmount();\n        tr.querySelector('input').addEventListener('change', function (event) {\n          if (event.target.value < 1) {\n            event.target.value = 1;\n          } else {\n            var value = parseInt(event.target.value || '0');\n            tr.querySelector('.product-table-body__total').innerText = '$' + value * product.cost;\n            calculateTheOrderAmount();\n          }\n        });\n      });\n      tbody.dispatchEvent(new CustomEvent('registerRemoveFromCartElements', {\n        bubbles: true\n      }));\n    }\n  });\n\n  function getCartFromStorage() {\n    return JSON.parse(window.localStorage.getItem('cart'));\n  }\n\n  function saveCartToStorage(cart) {\n    window.localStorage.setItem('cart', JSON.stringify(cart));\n  }\n\n  function registerAddToCartElements(container) {\n    container.querySelectorAll('[data-add-to-cart]').forEach(function (elem) {\n      var product = elem.getAttribute('data-add-to-cart');\n\n      if (product) {\n        elem.addEventListener('click', function () {\n          var cart = getCartFromStorage();\n\n          if (!cart.includes(product)) {\n            cart.push(product);\n            saveCartToStorage(cart);\n            document.dispatchEvent(new Event(RENDER_CARD_EVENT_NAME));\n          }\n        });\n      }\n    });\n  }\n\n  function registerRemoveFromCartElements(container) {\n    container.querySelectorAll('[data-remove-from-cart]').forEach(function (elem) {\n      var product = elem.getAttribute('data-remove-from-cart');\n\n      if (product) {\n        elem.addEventListener('click', function () {\n          var cart = getCartFromStorage();\n\n          if (cart.includes(product)) {\n            cart = cart.filter(function (p) {\n              return p !== product;\n            });\n            saveCartToStorage(cart);\n            document.dispatchEvent(new Event(RENDER_CARD_EVENT_NAME));\n          }\n        });\n      }\n    });\n  }\n})();\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/cart-function.js?");

/***/ }),

/***/ "./src/js/scripts/data-storage.js":
/*!****************************************!*\
  !*** ./src/js/scripts/data-storage.js ***!
  \****************************************/
/***/ (() => {

eval("(function () {\n  var products = [{\n    src: \"./img/products/product-img-1.jpg\",\n    alt: \"strawberry-img\",\n    title: \"Strawberry\",\n    cost: 85,\n    type: \"berries\"\n  }, {\n    src: \"./img/products/product-img-2.jpg\",\n    alt: \"berry-img\",\n    title: \"Berry\",\n    cost: 70,\n    type: \"berries\"\n  }, {\n    src: \"./img/products/product-img-3.jpg\",\n    alt: \"lemon-img\",\n    title: \"Lemon\",\n    cost: 35,\n    type: \"citruses\"\n  }, {\n    src: \"./img/products/product-img-4.jpg\",\n    alt: \"kiwi-img\",\n    title: \"Kiwi\",\n    cost: 50,\n    type: \"fruits\"\n  }, {\n    src: \"./img/products/product-img-5.jpg\",\n    alt: \"apple-img\",\n    title: \"Apple\",\n    cost: 20,\n    type: \"fruits\"\n  }, {\n    src: \"./img/products/product-img-6.jpg\",\n    alt: \"raspberry-img\",\n    title: \"Raspberry\",\n    cost: 60,\n    type: \"berries\"\n  }, {\n    src: \"./img/products/product-img-7.jpg\",\n    alt: \"lime-img\",\n    title: \"Lime\",\n    cost: 90,\n    type: \"citruses\"\n  }, {\n    src: \"./img/products/product-img-8.jpg\",\n    alt: \"banana-img\",\n    title: \"Banana\",\n    cost: 40,\n    type: \"fruits\"\n  }, {\n    src: \"./img/products/product-img-9.jpg\",\n    alt: \"orange-img\",\n    title: \"Orange\",\n    cost: 35,\n    type: \"citruses\"\n  }, {\n    src: \"./img/products/product-img-10.jpg\",\n    alt: \"pear-img\",\n    title: \"Pear\",\n    cost: 25,\n    type: \"fruits\"\n  }, {\n    src: \"./img/products/product-img-11.jpg\",\n    alt: \"guava-img\",\n    title: \"Guava\",\n    cost: 90,\n    type: \"fruits\"\n  }, {\n    src: \"./img/products/product-img-12.jpg\",\n    alt: \"plum-img\",\n    title: \"Plum\",\n    cost: 20,\n    type: \"fruits\"\n  }, {\n    src: \"./img/products/product-img-13.jpg\",\n    alt: \"grapes-img\",\n    title: \"Grapes\",\n    cost: 55,\n    type: \"berries\"\n  }, {\n    src: \"./img/products/product-img-14.jpg\",\n    alt: \"blueberry-img\",\n    title: \"Blueberry\",\n    cost: 85,\n    type: \"berries\"\n  }, {\n    src: \"./img/products/product-img-15.jpg\",\n    alt: \"mango-img\",\n    title: \"Mango\",\n    cost: 35,\n    type: \"fruits\"\n  }, {\n    src: \"./img/products/product-img-16.jpg\",\n    alt: \"garnet-img\",\n    title: \"Garnet\",\n    cost: 70,\n    type: \"fruits\"\n  }, {\n    src: \"./img/products/product-img-17.jpg\",\n    alt: \"morinda\",\n    title: \"Morinda citrus-leaf\",\n    cost: 35,\n    type: \"citruses\"\n  }, {\n    src: \"./img/products/product-img-18.jpg\",\n    alt: \"watermelon-img\",\n    title: \"Watermelon\",\n    cost: 85,\n    type: \"berries\"\n  }, {\n    src: \"./img/products/product-img-19.jpg\",\n    alt: \"melon-img\",\n    title: \"Melon\",\n    cost: 70,\n    type: \"berries\"\n  }];\n  window.localStorage.setItem('products', JSON.stringify(products));\n})();\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/data-storage.js?");

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

eval("window.addEventListener('scroll', function () {\n  var headerScroll = document.getElementById('header-scroll');\n  var headerInner = document.querySelector('.header__inner');\n  var scrollDown = window.pageYOffset;\n\n  if (scrollDown >= 100) {\n    headerScroll.classList.add('header_background-color');\n    headerInner.classList.add('header__inner_scroll');\n  } else if (scrollDown === 0) {\n    headerScroll.classList.remove('header_background-color');\n    headerInner.classList.remove('header__inner_scroll');\n  }\n});\n\nfunction mediaHeader() {\n  var headerInner = document.querySelector('.header__inner');\n  var nav = document.querySelector('.header__navigation');\n  var iconBox = document.querySelector('.header__icon');\n  var mediaQueries = window.matchMedia('(max-width: 600px)');\n\n  if (mediaQueries.matches) {\n    nav.append(iconBox);\n  } else {\n    headerInner.append(iconBox);\n  }\n}\n\nwindow.addEventListener('load', mediaHeader);\nwindow.addEventListener('resize', mediaHeader);\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/header-scroll.js?");

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

/***/ "./src/js/scripts/search-filter.js":
/*!*****************************************!*\
  !*** ./src/js/scripts/search-filter.js ***!
  \*****************************************/
/***/ (() => {

eval("// import { createElem } from './pagination.js';\n// const products = JSON.parse(window.localStorage.getItem('products'));\n// const urlParams = new URLSearchParams(window.location.search);\n//     const initialFilterType = (urlParams.get('searchValue') ?? 'all').toLowerCase();\n//     if (initialFilterType != null) {\n//         filtering(initialFilterType);\n//         // getPagination();\n//         toggleActiveCssClassForFilterButton(initialFilterType);\n//     }\n// function filtering(filter) {\n//     filter = products.filter((elem) => elem.title === filterType);\n//     createElem(filter);\n// }\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/search-filter.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => /* binding */ Slider,\n/* harmony export */   \"AutoSlider\": () => /* binding */ AutoSlider\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(slides) {\n    _classCallCheck(this, Slider);\n\n    this.sliderElements = [];\n    this.currentIndex = 0;\n\n    var _iterator = _createForOfIteratorHelper(slides),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var slide = _step.value;\n        this.sliderElements.push(slide);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n\n  _createClass(Slider, [{\n    key: \"prev\",\n    value: function prev() {\n      if (this.currentIndex === 0) {\n        this.setSlide(this.sliderElements.length - 1);\n      } else {\n        this.setSlide(this.currentIndex - 1);\n      }\n    }\n  }, {\n    key: \"next\",\n    value: function next() {\n      if (this.currentIndex === this.sliderElements.length - 1) {\n        this.setSlide(0);\n      } else {\n        this.setSlide(this.currentIndex + 1);\n      }\n    }\n  }, {\n    key: \"setSlide\",\n    value: function setSlide(index) {\n      var _this = this;\n\n      this.currentIndex = index;\n      this.sliderElements.map(function (element, index) {\n        if (index === _this.currentIndex) {\n          element.classList.remove('slider-hidden');\n          element.classList.add('slider-shown');\n        } else {\n          element.classList.add('slider-hidden');\n          element.classList.remove('slider-shown');\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.setSlide(0);\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.sliderElements.map(function (element, index) {\n        element.classList.remove('slider-hidden');\n        element.classList.remove('slider-shown');\n      });\n    }\n  }]);\n\n  return Slider;\n}();\nvar AutoSlider = /*#__PURE__*/function (_Slider) {\n  _inherits(AutoSlider, _Slider);\n\n  var _super = _createSuper(AutoSlider);\n\n  function AutoSlider(slides, autoscrollInterval) {\n    var _this2;\n\n    _classCallCheck(this, AutoSlider);\n\n    _this2 = _super.call(this, slides);\n    _this2.timeoutId = null;\n    _this2.autoscrollInterval = autoscrollInterval || 5000;\n    return _this2;\n  }\n\n  _createClass(AutoSlider, [{\n    key: \"setSlide\",\n    value: function setSlide(index) {\n      this.stopAutoscroll();\n      this.startAutoscroll(this.currentIndex, index);\n\n      _get(_getPrototypeOf(AutoSlider.prototype), \"setSlide\", this).call(this, index);\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      _get(_getPrototypeOf(AutoSlider.prototype), \"destroy\", this).call(this);\n\n      this.stopAutoscroll();\n    }\n  }, {\n    key: \"stopAutoscroll\",\n    value: function stopAutoscroll() {\n      if (this.timeoutId) {\n        clearTimeout(this.timeoutId);\n      }\n    }\n  }, {\n    key: \"startAutoscroll\",\n    value: function startAutoscroll(currentIndex, nextIndex) {\n      var _this3 = this;\n\n      this.timeoutId = setTimeout(function () {\n        if (nextIndex >= currentIndex) {\n          _this3.next();\n        } else {\n          _this3.prev();\n        }\n      }, this.autoscrollInterval);\n    }\n  }]);\n\n  return AutoSlider;\n}(Slider);\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/slider.js?");

/***/ }),

/***/ "./src/js/scripts/timer.js":
/*!*********************************!*\
  !*** ./src/js/scripts/timer.js ***!
  \*********************************/
/***/ (() => {

eval("(function () {\n  window.addEventListener('load', function () {\n    var target_date = new Date().getTime() + 1000 * 3600 * 48; // установить дату обратного отсчета\n\n    var daysHtml = document.getElementById(\"section-product-promotion-days\"); // получить элемент тега\n\n    var hoursHtml = document.getElementById(\"section-product-promotion-hours\"); // получить элемент тега\n\n    var minsHtml = document.getElementById(\"section-product-promotion-mins\"); // получить элемент тега\n\n    var secsHtml = document.getElementById(\"section-product-promotion-secs\"); // получить элемент тега\n\n    getCountdown();\n    setInterval(function () {\n      getCountdown();\n    }, 1000);\n\n    function getCountdown() {\n      var days, hours, minutes, seconds; // переменные для единиц времени\n\n      var current_date = new Date().getTime();\n      var seconds_left = (target_date - current_date) / 1000;\n      days = pad(parseInt(seconds_left / 86400));\n      seconds_left = seconds_left % 86400;\n      hours = parseInt(seconds_left / 3600);\n      seconds_left = seconds_left % 3600;\n      minutes = pad(parseInt(seconds_left / 60));\n      seconds = pad(parseInt(seconds_left % 60));\n      daysHtml.innerHTML = days;\n      hoursHtml.innerHTML = hours;\n      minsHtml.innerHTML = minutes;\n      secsHtml.innerHTML = seconds;\n    }\n\n    function pad(n) {\n      return (n < 10 ? '0' : '') + n;\n    }\n  });\n})();\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/timer.js?");

/***/ }),

/***/ "./src/js/scripts/video-opener.js":
/*!****************************************!*\
  !*** ./src/js/scripts/video-opener.js ***!
  \****************************************/
/***/ (() => {

"use strict";
eval("\n\nvar videoLink = \"<iframe class=\\\"video__item\\\" src=\\\"https://www.youtube.com/embed/VjINuQX4hbM?autoplay=1\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\\" allowfullscreen></iframe>\";\nvar body = document.body;\nvar container = document.getElementById('video');\ncontainer.addEventListener('click', getVideo);\n\nfunction render() {\n  var html = \"\\n        <section class=\\\"video\\\">\\n            <div class=\\\"video__modal\\\">\\n                <button class=\\\"video__button\\\">\\n                    <i class=\\\"fa fa-times\\\"></i>\\n                </button>\\n                \".concat(videoLink, \"\\n            </div>\\n        </section>    \\n    \");\n  body.insertAdjacentHTML(\"beforeend\", html);\n}\n\nfunction getVideo(e) {\n  e.preventDefault();\n  body.classList.add('no-scroll');\n  render();\n  var videoSection = document.querySelector('.video');\n  videoSection.addEventListener('click', closeVideo);\n}\n\nfunction closeVideo(e) {\n  var event = e.target;\n  if (event.matches('.video__item')) return;\n  body.classList.remove('no-scroll');\n  var videoSection = document.querySelector('.video');\n  videoSection.remove();\n}\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/video-opener.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project-fruitka-team/./src/scss/style.scss?");

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
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;