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

eval("window.addEventListener('load', function () {\n  var _urlParams$get;\n\n  var products = JSON.parse(window.localStorage.getItem('products'));\n  var pagination = document.querySelector('.pagination');\n  var container = pagination.querySelector('.pagination__container');\n  var paginationBtn = pagination.querySelector('.pagination__btn');\n  var productTypeFilters = document.querySelectorAll('[data-filter]');\n  var elemOnPage = 6;\n  var urlParams = new URLSearchParams(window.location.search);\n  var initialFilterType = ((_urlParams$get = urlParams.get('searchValue')) !== null && _urlParams$get !== void 0 ? _urlParams$get : 'all').toLowerCase();\n\n  if (initialFilterType != null) {\n    filterProducts(initialFilterType);\n    toggleActiveCssClassForFilterButton(initialFilterType);\n    container.dispatchEvent(new CustomEvent('registerAddToCartElements', {\n      bubbles: true\n    }));\n  }\n\n  pagination.addEventListener('click', function (event) {\n    getFiltration(event);\n    toggleActiveCssClassForFilterButtonByClickEvent(event);\n    container.dispatchEvent(new CustomEvent('registerAddToCartElements', {\n      bubbles: true\n    }));\n  });\n\n  function createElem(arr) {\n    var html = arr.map(function (elem) {\n      return \"\\n            <li class=\\\"pagination__col\\\" data-type = \".concat(elem.type, \">\\n                <img class=\\\"pagination__img\\\" src = \").concat(elem.src, \" alt= \").concat(elem.alt, \">\\n                <div class=\\\"pagination__box\\\">\\n                    <h3>\").concat(elem.title, \"</h3>\\n                    <div class=\\\"pagination__box-text\\\">\\n                        <span>Per Kg</span>\\n                        $\").concat(elem.cost, \"\\n                    </div>\\n                    <a class=\\\"pagination__box-button btn-main\\\" data-add-to-cart=\\\"\").concat(elem.title, \"\\\">\\n                        <i class=\\\"fa fa-shopping-cart pagination__icon\\\"></i>\\n                        Add to Cart\\n                    </a>          \\n                </div>\\n            </li>\\n        \");\n    }).join('');\n    container.innerHTML = html;\n  }\n\n  function getFiltration(e) {\n    var filterType = e.target.getAttribute('data-filter');\n    if (!filterType) return;\n    filterProducts(filterType);\n  }\n\n  function alphabetSort(a, b) {\n    return a.title.localeCompare(b.title);\n  }\n\n  function filterProducts(filterType) {\n    var filteredArr = products.filter(function (elem) {\n      if (filterType === 'all') {\n        return products;\n      } else {\n        return elem.type === filterType;\n      }\n    }).sort(alphabetSort);\n    var showArr = filteredArr.slice(0, 6);\n    var countOfItems = Math.ceil(filteredArr.length / elemOnPage);\n    pagination.addEventListener('click', getPagination);\n\n    function getPagination(e) {\n      var pageNum = +e.target.innerHTML;\n      if (!e.target.closest('.pagination__btn') || isNaN(pageNum)) return;\n      var start = (pageNum - 1) * elemOnPage;\n      var end = start + elemOnPage;\n      var viewElements = filteredArr.slice(start, end);\n      createElem(viewElements);\n    }\n\n    function renderBtn() {\n      for (var i = 1; i <= countOfItems; i++) {\n        var li = document.createElement('li');\n        li.classList.add('pagination__item');\n        li.innerHTML = i;\n        paginationBtn.append(li);\n      }\n    }\n\n    createElem(showArr);\n    paginationBtn.innerHTML = '';\n    renderBtn();\n  }\n\n  function toggleActiveCssClassForFilterButtonByClickEvent(e) {\n    var element = e.target;\n    var filterType = element.getAttribute('data-filter');\n    toggleActiveCssClassForFilterButton(filterType);\n  }\n\n  function toggleActiveCssClassForFilterButton(filterType) {\n    productTypeFilters.forEach(function (element) {\n      var thisFilterType = element.getAttribute('data-filter');\n\n      if (thisFilterType == filterType) {\n        element.classList.add('active');\n      } else {\n        element.classList.remove('active');\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/pagination.js?");

/***/ }),

/***/ "./src/js/scripts/search.js":
/*!**********************************!*\
  !*** ./src/js/scripts/search.js ***!
  \**********************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var searchLink = document.getElementById('search-link');\n  searchLink.addEventListener('click', function () {\n    var searchBox = document.createElement('section');\n    searchBox.classList.add('search');\n    searchBox.id = 'search-window';\n    searchBox.innerHTML = \"\\n                                <div class=\\\"search__wrapper\\\">\\n                                  <div class=\\\"search__btn_close\\\" id=\\\"search-close\\\"><i class=\\\"fa fa-close\\\"></i></div>\\n                                  <div class=\\\"search__container\\\">\\n                                    <h3>search for:</h3>\\n                                    <input class=\\\"search__line\\\" id=\\\"search-input\\\" type=\\\"text\\\" placeholder=\\\"Keywords\\\"/>\\n                                    <button class=\\\"search__btn\\\" id=\\\"search-btn-send\\\" type=\\\"submit\\\">Search<i class=\\\"fa fa-search\\\"></i></button>\\n                                  </div>\\n                                </div>\\n                              \";\n    document.body.prepend(searchBox);\n    var searchWindow = document.getElementById('search-window');\n    var searchClose = document.getElementById('search-close');\n    var searchInput = document.getElementById('search-input');\n    var searchBtnSend = document.getElementById('search-btn-send');\n    searchClose.addEventListener('click', function () {\n      searchWindow.remove();\n    });\n    searchBtnSend.addEventListener('click', function (e) {\n      var params = new URLSearchParams(window.location.search);\n      params.set('searchValue', searchInput.value);\n      window.location = 'shop.html?' + params.toString();\n    });\n  });\n});\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/scripts/search.js?");

/***/ }),

/***/ "./src/js/shop.js":
/*!************************!*\
  !*** ./src/js/shop.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_data_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data-storage.js */ \"./src/js/scripts/data-storage.js\");\n/* harmony import */ var _scripts_data_storage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_data_storage_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/pagination.js */ \"./src/js/scripts/pagination.js\");\n/* harmony import */ var _scripts_pagination_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_pagination_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/search.js */ \"./src/js/scripts/search.js\");\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_search_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_cart_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/cart-function.js */ \"./src/js/scripts/cart-function.js\");\n/* harmony import */ var _scripts_cart_function_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_cart_function_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/header-menu.js */ \"./src/js/scripts/header-menu.js\");\n/* harmony import */ var _scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_menu_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/header-scroll.js */ \"./src/js/scripts/header-scroll.js\");\n/* harmony import */ var _scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_scroll_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/header-sub-menu.js */ \"./src/js/scripts/header-sub-menu.js\");\n/* harmony import */ var _scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_sub_menu_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/loader.js */ \"./src/js/scripts/loader.js\");\n/* harmony import */ var _scripts_loader_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_loader_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _scripts_carousel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/carousel.js */ \"./src/js/scripts/carousel.js\");\n/* harmony import */ var _scripts_carousel_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_carousel_js__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://project-fruitka-team/./src/js/shop.js?");

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