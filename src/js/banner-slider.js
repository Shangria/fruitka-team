window.addEventListener('load', function () {

    const sliderBox = new Slider(document.querySelectorAll('[data-sliders-box]'), 4000);
    // const sliderBanner = new Slider(document.querySelectorAll('[data-slider-banner]'), 4000);
    const arrowLeft = document.getElementById('data-slider-left');
    const arrowRight = document.getElementById('data-slider-right');


    arrowLeft.addEventListener('click', function () {
        sliderBox.prev();
        // sliderBanner.prev();
    });


    arrowRight.addEventListener('click', function () {
        sliderBox.next()
        // sliderBanner.next();
    });
});

