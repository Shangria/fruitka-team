'use strict'

window.addEventListener('load', () => {
    
    const carouselRow = document.getElementById('carousel');

    const item = carouselRow.querySelector('.carousel__item');

    const itemWidth = item.offsetWidth;

    function carousel() {
        carouselRow.style.transform = `translateX(-${itemWidth}px)`;
        let firstElem = carouselRow.firstElementChild;
        let clone = firstElem.cloneNode(true);
        
        

        carouselRow.addEventListener('transitionend', () => {
            carouselRow.appendChild(clone);
            firstElem.remove();

            carouselRow.style.transition = 'none';
            carouselRow.style.transform = `translateX(0)`;
            setTimeout(() => {
                carouselRow.style.transition = 'transform 1s';
            });

        })

    }


    
    setInterval(carousel, 2000);
})
