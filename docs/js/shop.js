(()=>{var e={158:()=>{"use strict";window.addEventListener("load",(function(){var e=document.getElementById("carousel"),t=e.querySelector(".carousel__item");setInterval((function(){var n=t.offsetWidth,a=e.firstElementChild;e.style.transform="translateX(-".concat(n,"px)"),e.addEventListener("transitionend",(function t(){e.appendChild(a),e.style.transition="none",e.style.transform="translateX(0)",setTimeout((function(){e.style.transition="transform 1s"})),e.removeEventListener("transitionend",t)}))}),2e3)}))},674:()=>{window.addEventListener("load",(function(){var e=document.querySelector(".header__menu-box");e.querySelector(".header__menu-burger").addEventListener("click",(function(){e.querySelector(".header__menu-burger").classList.toggle("active"),e.querySelector(".header__menu").classList.toggle("active"),document.body.classList.toggle("no-scroll")}))}))},709:()=>{window.addEventListener("scroll",(function(){var e=document.getElementById("header-scroll"),t=document.querySelector(".header__inner"),n=window.pageYOffset;n>=100?(e.classList.add("header_background-color"),t.classList.add("header__inner_scroll")):0===n&&(e.classList.remove("header_background-color"),t.classList.remove("header__inner_scroll"))}))},808:()=>{window.addEventListener("load",(function(){function e(){if(!(this.children.length>1))return!1;this.children[1].classList.toggle("header_sub-menu-active")}document.getElementById("header__menu-title").querySelectorAll("[data-sub-menu]").forEach((function(t){t.addEventListener("mouseenter",e,!1),t.addEventListener("mouseleave",e,!1)}))}))},215:()=>{window.addEventListener("load",(function(){var e=document.getElementById("loader__wrapper");e.classList.add("loader-hidden"),setTimeout((function(){e.remove()}),1e3)}))},365:()=>{window.addEventListener("load",(function(){var e,t=JSON.parse(window.localStorage.getItem("products")),n=document.querySelector(".pagination"),a=n.querySelector(".pagination__container"),r=document.querySelectorAll("[data-filter]"),o=(null!==(e=new URLSearchParams(window.location.search).get("searchValue"))&&void 0!==e?e:"all").toLowerCase();function i(e){var t=e.map((function(e){return'\n            <li class="pagination__col" data-type = '.concat(e.type,'>\n                <img class="pagination__img" src = ').concat(e.src," alt= ").concat(e.alt,'>\n                <div class="pagination__box">\n                    <h3>').concat(e.title,'</h3>\n                    <div class="pagination__box-text">\n                        <span>Per Kg</span>\n                        ').concat(e.cost,'\n                    </div>\n                    <a class="pagination__box-button btn-main">\n                        <i class="fa fa-shopping-cart pagination__icon"></i>\n                        Add to Cart\n                    </a>          \n                </div>\n            </li>\n        ')})).join("");a.innerHTML=t}function c(e,t){return e.title.localeCompare(t.title)}function s(e){i(t.filter((function(n){return"all"===e?t:n.type===e})).sort(c))}function l(e){r.forEach((function(t){t.getAttribute("data-filter")==e?t.classList.add("active"):t.classList.remove("active")}))}null!=o&&(s(o),l(o)),n.addEventListener("click",(function(e){var t=e.target.getAttribute("data-filter");t&&s(t)})),n.addEventListener("click",(function(e){var n=+e.target.innerHTML;if(e.target.closest(".pagination__btn")&&!isNaN(n)){var a=6*(n-1),r=a+6;i(t.slice(a,r))}})),n.addEventListener("click",(function(e){l(e.target.getAttribute("data-filter"))}))}))},935:()=>{window.addEventListener("load",(function(){}))}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(674),n(709),n(935),n(808),n(215),n(158),n(365)})()})();