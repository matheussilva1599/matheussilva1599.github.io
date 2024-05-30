// responsive.js/index.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-images');
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    let index = 0;

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % totalImages;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
});
