let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let thumbnails = document.querySelectorAll('.thumbnails img');

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.style.opacity = (index === slideIndex) ? 1 : 0.6;
    });
}

function nextSlide() {
    showSlides(slideIndex + 1);
}

function prevSlide() {
    showSlides(slideIndex - 1);
}

function currentSlide(n) {
    showSlides(n - 1);
}
