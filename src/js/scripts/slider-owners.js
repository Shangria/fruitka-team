import {AutoSlider} from './slider.js'

window.addEventListener('load', function () {
    const slider = new AutoSlider(document.querySelectorAll('#local-shop-owner_slider li'), 3000);
    slider.init();
});
