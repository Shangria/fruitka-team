(()=>{var t={158:()=>{"use strict";window.addEventListener("load",(function(){var t=document.getElementById("carousel"),e=t.querySelector(".carousel__item");setInterval((function(){var n=e.offsetWidth,r=t.firstElementChild;t.style.transform="translateX(-".concat(n,"px)"),t.addEventListener("transitionend",(function e(){t.appendChild(r),t.style.transition="none",t.style.transform="translateX(0)",setTimeout((function(){t.style.transition="transform 1s"})),t.removeEventListener("transitionend",e)}))}),2e3)}))},827:()=>{function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(){var e="render-cart";function n(){return JSON.parse(window.localStorage.getItem("cart"))}function r(t){window.localStorage.setItem("cart",JSON.stringify(t))}null==n()&&r([]),document.addEventListener("registerAddToCartElements",(function(t){t.target.querySelectorAll("[data-add-to-cart]").forEach((function(t){var o=t.getAttribute("data-add-to-cart");o&&t.addEventListener("click",(function(){var t=n();t.includes(o)||(t.push(o),r(t),document.dispatchEvent(new Event(e)))}))}))})),document.addEventListener("registerRemoveFromCartElements",(function(t){t.target.querySelectorAll("[data-remove-from-cart]").forEach((function(t){var o=t.getAttribute("data-remove-from-cart");o&&t.addEventListener("click",(function(){var t=n();t.includes(o)&&(r(t=t.filter((function(t){return t!==o}))),document.dispatchEvent(new Event(e)))}))}))})),window.addEventListener("load",(function(){document.dispatchEvent(new CustomEvent("registerAddToCartElements")),document.dispatchEvent(new CustomEvent("registerRemoveFromCartElements"));var o=document.getElementById("clear-cart");function a(){var e,n,r=document.querySelector(".total-table-body_data"),o=document.querySelectorAll(".product-table-body__total"),a=0;(n=o,function(e){if(Array.isArray(e))return t(e)}(n)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){e=+t.textContent.replace(/[^\d]/g,""),a+=e,r.innerHTML="$"+a}))}null!=o&&o.addEventListener("click",(function(){document.getElementById("body-container").remove(),document.querySelector(".total-table-body_data").innerText="",r([])}));var c=document.getElementById("cart-container");function i(t){var e=JSON.parse(window.localStorage.getItem("products")),r=n(),o=e.filter((function(t){return r.includes(t.title)}));t.innerHTML='\n                <table class="product-table">\n                    <thead class="product-table-head">\n                        <tr class="product-table-head__row">\n                            <th class="product-table-head__titles"></th>\n                            <th class="product-table-head__titles">Product Image</th>\n                            <th class="product-table-head__titles">Name</th>\n                            <th class="product-table-head__titles">Price</th>\n                            <th class="product-table-head__titles">Quantity</th>\n                            <th class="product-table-head__titles">Total</th>\n                        </tr>\n                    </thead>\n                    <tbody class="product-table-body" id="body-container"></tbody>\n                </table>\n            ';var c=t.querySelector("tbody");o.forEach((function(t){var e=document.createElement("tr");e.classList.add("product-table-body__row"),e.innerHTML='\n                        <td class="product-table-body_data">\n                            <a class="product-table-body_remove__link" data-remove-from-cart="'.concat(t.title,'">\n                                <i class="product-table-body_remove fa fa-times-circle"></i>\n                            </a>\n                        </td>\n                        <td class="product-table-body_data"><img class="product-table-body__image" src="').concat(t.src,'"/></td>\n                        <td class="product-table-body__name product-table-body_data">').concat(t.title,'</td>\n                        <td class="product-table-body__price product-table-body_data">$').concat(t.cost,'</td>\n                        <td class="product-table-body__quantity product-table-body_data">\n                            <input class="product-table-body__quantity__input" type="number" value="1"/>\n                        </td>\n                        <td class="product-table-body__total product-table-body_data">$').concat(t.cost,"</td>\n                "),c.append(e),a(),e.querySelector("input").addEventListener("change",(function(n){if(n.target.value<1)n.target.value=1;else{var r=parseInt(n.target.value||"0");e.querySelector(".product-table-body__total").innerText="$"+r*t.cost,a()}}))})),c.dispatchEvent(new CustomEvent("registerRemoveFromCartElements",{bubbles:!0}))}null!=c&&(i(c),document.addEventListener(e,(function(t){i(c)})))}))}()},325:()=>{window.localStorage.setItem("products",JSON.stringify([{src:"./img/products/product-img-1.jpg",alt:"strawberry-img",title:"Strawberry",cost:85,type:"berries"},{src:"./img/products/product-img-2.jpg",alt:"berry-img",title:"Berry",cost:70,type:"berries"},{src:"./img/products/product-img-3.jpg",alt:"lemon-img",title:"Lemon",cost:35,type:"citruses"},{src:"./img/products/product-img-4.jpg",alt:"kiwi-img",title:"Kiwi",cost:50,type:"fruits"},{src:"./img/products/product-img-5.jpg",alt:"apple-img",title:"Apple",cost:20,type:"fruits"},{src:"./img/products/product-img-6.jpg",alt:"raspberry-img",title:"Raspberry",cost:60,type:"berries"},{src:"./img/products/product-img-7.jpg",alt:"lime-img",title:"Lime",cost:90,type:"citruses"},{src:"./img/products/product-img-8.jpg",alt:"banana-img",title:"Banana",cost:40,type:"fruits"},{src:"./img/products/product-img-9.jpg",alt:"orange-img",title:"Orange",cost:35,type:"citruses"},{src:"./img/products/product-img-10.jpg",alt:"pear-img",title:"Pear",cost:25,type:"fruits"},{src:"./img/products/product-img-11.jpg",alt:"guava-img",title:"Guava",cost:90,type:"fruits"},{src:"./img/products/product-img-12.jpg",alt:"plum-img",title:"Plum",cost:20,type:"fruits"},{src:"./img/products/product-img-13.jpg",alt:"grapes-img",title:"Grapes",cost:55,type:"berries"},{src:"./img/products/product-img-14.jpg",alt:"blueberry-img",title:"Blueberry",cost:85,type:"berries"},{src:"./img/products/product-img-15.jpg",alt:"mango-img",title:"Mango",cost:35,type:"fruits"},{src:"./img/products/product-img-16.jpg",alt:"garnet-img",title:"Garnet",cost:70,type:"fruits"},{src:"./img/products/product-img-17.jpg",alt:"morinda",title:"Morinda citrus-leaf",cost:35,type:"citruses"},{src:"./img/products/product-img-18.jpg",alt:"watermelon-img",title:"Watermelon",cost:85,type:"berries"},{src:"./img/products/product-img-19.jpg",alt:"melon-img",title:"Melon",cost:70,type:"berries"}]))},674:()=>{window.addEventListener("load",(function(){var t=document.querySelector(".header__menu-box");t.querySelector(".header__menu-burger").addEventListener("click",(function(){t.querySelector(".header__menu-burger").classList.toggle("active"),t.querySelector(".header__menu").classList.toggle("active"),document.body.classList.toggle("no-scroll")}))}))},709:()=>{function t(){var t=document.querySelector(".header__inner"),e=document.querySelector(".header__navigation"),n=document.querySelector(".header__icon");window.matchMedia("(max-width: 600px)").matches?e.append(n):t.append(n)}window.addEventListener("scroll",(function(){var t=document.getElementById("header-scroll"),e=document.querySelector(".header__inner"),n=window.pageYOffset;n>=100?(t.classList.add("header_background-color"),e.classList.add("header__inner_scroll")):0===n&&(t.classList.remove("header_background-color"),e.classList.remove("header__inner_scroll"))})),window.addEventListener("load",t),window.addEventListener("resize",t)},808:()=>{window.addEventListener("load",(function(){function t(){if(!(this.children.length>1))return!1;this.children[1].classList.toggle("header_sub-menu-active")}document.getElementById("header__menu-title").querySelectorAll("[data-sub-menu]").forEach((function(e){e.addEventListener("mouseenter",t,!1),e.addEventListener("mouseleave",t,!1)}))}))},215:()=>{window.addEventListener("load",(function(){var t=document.getElementById("loader__wrapper");t.classList.add("loader-hidden"),setTimeout((function(){t.remove()}),1e3)}))},979:()=>{window.addEventListener("load",(function(){document.getElementById("search-link").addEventListener("click",(function(){var t=document.createElement("section");t.classList.add("search"),t.id="search-window",t.innerHTML='\n                                <div class="search__wrapper">\n                                  <div class="search__btn_close" id="search-close"><i class="fa fa-close"></i></div>\n                                  <div class="search__container">\n                                    <h3>search for:</h3>\n                                    <input class="search__line" id="search-input" type="text" placeholder="Keywords"/>\n                                    <button class="search__btn" id="search-btn-send" type="submit">Search<i class="fa fa-search"></i></button>\n                                  </div>\n                                </div>\n                              ',document.body.prepend(t);var e=document.getElementById("search-window"),n=document.getElementById("search-close"),r=document.getElementById("search-input"),o=document.getElementById("search-btn-send");n.addEventListener("click",(function(){e.remove()})),o.addEventListener("click",(function(t){var e=new URLSearchParams(window.location.search);e.set("searchValue",r.value),window.location="shop.html?"+e.toString()}))}))}))},48:()=>{window.addEventListener("load",(function(){var t=(new Date).getTime()+1728e5,e=document.getElementById("section-product-promotion-days"),n=document.getElementById("section-product-promotion-hours"),r=document.getElementById("section-product-promotion-mins"),o=document.getElementById("section-product-promotion-secs");function a(){var a,i,d,s,l=(new Date).getTime(),u=(t-l)/1e3;a=c(parseInt(u/86400)),u%=86400,i=parseInt(u/3600),u%=3600,d=c(parseInt(u/60)),s=c(parseInt(u%60)),e.innerHTML=a,n.innerHTML=i,r.innerHTML=d,o.innerHTML=s}function c(t){return(t<10?"0":"")+t}a(),setInterval((function(){a()}),1e3)}))},106:()=>{"use strict";var t=document.body;function e(e){e.target.matches(".video__item")||(t.classList.remove("no-scroll"),document.querySelector(".video").remove())}document.getElementById("video").addEventListener("click",(function(n){var r;n.preventDefault(),t.classList.add("no-scroll"),r='\n        <section class="video">\n            <div class="video__modal">\n                <button class="video__button">\n                    <i class="fa fa-times"></i>\n                </button>\n                '.concat('<iframe class="video__item" src="https://www.youtube.com/embed/VjINuQX4hbM?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',"\n            </div>\n        </section>    \n    "),t.insertAdjacentHTML("beforeend",r),document.querySelector(".video").addEventListener("click",e)}))}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(e,n){var r,o,a=this,c=0;a.prev=function(){u("back")},a.next=function(){u("forward")},a.setSlide=l,a.touchSlider=function(t,e){var n=event.changedTouches[0],r=Math.abs(t.pageX-n.pageX),o=Math.abs(t.pageY-n.pageY);(r>20||o>20)&&r>o&&(n.pageX<t.pageX?e.next():e.prev())},a.getInitialPoint=function(){return event.changedTouches[0]},r=[];var i,d=function(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,d=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){d=!0,c=t},f:function(){try{i||null==r.return||r.return()}finally{if(d)throw c}}}}(e);try{for(d.s();!(i=d.n()).done;){var s=i.value;r.push(s),s.classList.add("slider-hidden"),s.classList.remove("slider-shown")}}catch(t){d.e(t)}finally{d.f()}function l(t){var e;c=t,g(),e=t>=c?"forward":"back",m(),p(e)}function u(t){g(),"back"===t?0===c?c=r.length-1:c-=1:c===r.length-1?c=0:c+=1,m(),p(t)}function m(){r.map((function(t,e){e===c?(t.classList.remove("slider-hidden"),t.classList.add("slider-shown")):(t.classList.add("slider-hidden"),t.classList.remove("slider-shown"))}))}function p(t){n&&(o=setTimeout((function(){u(t)}),n))}function g(){o&&clearTimeout(o)}l(0)}n(325),n(827),n(979),n(674),n(709),n(808),n(48),window.addEventListener("load",(function(){var t,n=new e(document.querySelectorAll("#local-shop-owner_slider li"),3e3),r=document.getElementById("local-shop-owner_slider");r.addEventListener("touchstart",(function(e){t=n.getInitialPoint()}),!1),r.addEventListener("touchend",(function(e){n.touchSlider(t,n)}),!1)})),n(106),n(215),n(158),window.addEventListener("load",(function(){var t,n=new e(document.querySelectorAll("[data-sliders-box]"),4e4),r=document.getElementById("wrapper-banner-slider"),o=document.getElementById("data-slider-left"),a=document.getElementById("data-slider-right");o.addEventListener("click",(function(){n.prev()})),a.addEventListener("click",(function(){n.next()})),r.addEventListener("touchstart",(function(e){t=n.getInitialPoint()}),!1),r.addEventListener("touchend",(function(e){n.touchSlider(t,n)}),!1)}))})()})();