// Glavni slider (za slike na vrhu)
const mainSliderPrev = document.querySelector('.main-slider .slider-prev');
const mainSliderNext = document.querySelector('.main-slider .slider-next');
const mainSlider = document.querySelector('.main-slider .slider-container');
const mainImages = mainSlider.querySelectorAll('.slider-image');
let mainIndex = 0;

function showMainImage(idx) {
    mainSlider.style.transform = `translateX(-${idx * 100}%)`;
}

mainSliderNext.addEventListener('click', () => {
    mainIndex = (mainIndex + 1) % mainImages.length;
    showMainImage(mainIndex);
});

mainSliderPrev.addEventListener('click', () => {
    mainIndex = (mainIndex - 1 + mainImages.length) % mainImages.length;
    showMainImage(mainIndex);
});

// Slider za usluge
const servicesSliderPrev = document.querySelector('.services-slider .slider-prev');
const servicesSliderNext = document.querySelector('.services-slider .slider-next');
const servicesSlider = document.querySelector('.services-slider .slider-container');
const servicesImages = servicesSlider.querySelectorAll('.slider-image');
let servicesIndex = 0;

function showServicesImage(idx) {
    servicesSlider.style.transform = `translateX(-${idx * 100}%)`;
}

servicesSliderNext.addEventListener('click', () => {
    servicesIndex = (servicesIndex + 1) % servicesImages.length;
    showServicesImage(servicesIndex);
});

servicesSliderPrev.addEventListener('click', () => {
    servicesIndex = (servicesIndex - 1 + servicesImages.length) % servicesImages.length;
    showServicesImage(servicesIndex);
});
