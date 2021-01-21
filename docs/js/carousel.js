'use strict'

window.addEventListener('load', () => {
    
    const carouselRow = document.getElementById('carousel');

    const item = carouselRow.querySelector('.carousel__item');

    function carousel() {
        const itemWidth = item.offsetWidth;
        const firstElem = carouselRow.firstElementChild;

        carouselRow.style.transform = `translateX(-${itemWidth}px)`;
        
        carouselRow.addEventListener('transitionend', () => {
            carouselRow.appendChild(firstElem);
            

            carouselRow.style.transition = 'none';
            carouselRow.style.transform = `translateX(0)`;
            setTimeout(() => {
                carouselRow.style.transition = 'transform 1s';
            });

        })
    }

    setInterval(carousel, 2000);
})
