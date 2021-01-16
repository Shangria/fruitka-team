// window.addEventListener('load', function () {
//     const arrowLeft = document.querySelectorAll('[data-slider-left]');
//     const arrowRight = document.querySelectorAll('[data-slider-right]');
//     const sliderContainer = [...document.querySelectorAll('[data-slider-container]')];
//     let currentIndex = 0;
//     let intervalId;
//
//
//     arrowLeft.forEach(function (arrow) {
//         arrow.addEventListener('click', function () {
//             sliderChangeElementManually('back');
//         })
//     });
//
//     arrowRight.forEach(function (arrow) {
//         arrow.addEventListener('click', function () {
//             sliderChangeElementManually('forward');
//         })
//     })
//
//     startAutoSlide();
//
//     function sliderChangeElementManually(direction) {
//         stopAutoSlide();
//         sliderChangeElement(direction);
//         startAutoSlide();
//     }
//
//     function sliderChangeElement(direction) {
//         let nextIndex;
//
//         if (direction === 'back') {
//             if (currentIndex === 0) {
//                 nextIndex = sliderContainer.length - 1;
//             } else {
//                 nextIndex = currentIndex - 1;
//             }
//         } else {
//             if (currentIndex === sliderContainer.length - 1) {
//                 nextIndex = 0;
//             } else {
//                 nextIndex = currentIndex + 1;
//             }
//         }
//
//         sliderContainer.map(function (element, index) {
//             if (index === nextIndex) {
//                 element.style.order = '1';
//             } else {
//                 element.style.order = '2';
//             }
//         });
//         currentIndex = nextIndex;
//     }
//
//
//     function startAutoSlide() {
//         intervalId = setInterval(function () {
//             sliderChangeElement('forward');
//         }, 6000);
//     }
//
//     function stopAutoSlide() {
//         clearInterval(intervalId);
//         intervalId = null;
//     }
//
//
// });


window.addEventListener('load', function () {

    const sliderBanner = new Slider(document.querySelectorAll('[data-slider-banner]'));
    const slider = new Slider(document.querySelectorAll('[data-slider-container]'));
    const arrowLeft = document.getElementById('data-slider-left');
    const arrowRight = document.getElementById('data-slider-right');


    arrowLeft.addEventListener('click', function () {
        sliderBanner.prev();
        slider.prev();

    });


    arrowRight.addEventListener('click', function () {
        sliderBanner.next();
       slider.next();

    });
});

