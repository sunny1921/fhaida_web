document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.review-card');

    function updateSlides() {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    document.querySelector('.slide-btn.left').addEventListener('click', function() {
        slideIndex--;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        updateSlides();
    });

    document.querySelector('.slide-btn.right').addEventListener('click', function() {
        slideIndex++;
        if (slideIndex >= slides.length) slideIndex = 0;
        updateSlides();
    });
});
