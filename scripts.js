let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
    slides.style.transition = 'transform 1s ease-in-out';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
