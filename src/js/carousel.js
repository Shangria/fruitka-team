'use strict'

window.addEventListener('load', () => {
    
    const carouselRow = document.getElementById('carousel');

    const item = carouselRow.querySelector('.carousel__item');

    const itemWidth = item.offsetWidth;

    function carousel() {
        carouselRow.style.transform = `translateX(-${itemWidth}px)`;
        const firstElem = carouselRow.firstElementChild;
        const clone = firstElem.cloneNode(true);
        
        

        carouselRow.addEventListener('transitionend', () => {
            clone.remove();
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
