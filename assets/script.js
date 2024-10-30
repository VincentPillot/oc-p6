const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentSlide = 0;
const sliderImg = document.querySelector('.banner-img');
const sliderText = document.querySelector("#banner > p");

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

// Update l'affichage du slider
function updateSlide(index) {
    const slide = slides[index];  // Récupérer la slide actuelle
    sliderImg.src = 'assets/images/slideshow/' + slide.image;
    sliderText.innerHTML = slide.tagLine;

    // Update les dots
    document.querySelector('.dot_selected').classList.remove('dot_selected');
    dots[index].classList.add('dot_selected');
}

// Slide précédente
arrowLeft.addEventListener('click', function () {
    currentSlide -= 1;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlide(currentSlide);
});

// Slide suivante
arrowRight.addEventListener('click', function () {
    currentSlide += 1;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlide(currentSlide);
});

// Initialiser le slider
updateSlide(currentSlide);