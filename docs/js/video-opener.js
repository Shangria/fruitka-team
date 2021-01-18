'use strict';

const videoLink = `<iframe class="video__item" src="https://www.youtube.com/embed/VjINuQX4hbM?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

const body = document.body;

const container = document.getElementById('video');

container.addEventListener('click', getVideo);

function render() {
    const html = `
        <section class="video">
            <div class="video__modal">
                <button class="video__button">
                    <i class="fa fa-times"></i>
                </button>
                ${videoLink}
            </div>
        </section>    
    `;

    body.insertAdjacentHTML("beforeend", html);
}

function getVideo(e) {
    e.preventDefault();
    const event = e.target; 

    if(!event.closest('.description__video')) return;

    body.classList.add('no-scroll');

    render();

    const videoSection = document.querySelector('.video');
    videoSection.addEventListener('click', closeVideo);
}



function closeVideo(e) {
   const event = e.target;
   
   if(event.matches('.video__item')) return;

   body.classList.remove('no-scroll');

   const videoSection = document.querySelector('.video');
   videoSection.remove();
}