var currentSlide = 0;
var slides = document.getElementsByClassName('slider-image');
var intervalId;

function changeSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Fonction pour faire défiler automatiquement le carrousel
function autoSlide() {
  changeSlide(1);
}

// Démarre le défilement automatique toutes les 3 secondes
function startAutoSlide() {
  intervalId = setInterval(autoSlide, 4000);
}

// Arrête le défilement automatique
function stopAutoSlide() {
  clearInterval(intervalId);
  // Redémarre le défilement automatique après 1 minute d'inactivité
  setTimeout(startAutoSlide, 60000);
}

// Ajoute un gestionnaire d'événement click pour les flèches
document.querySelector('.slider-arrow.prev').addEventListener('click', stopAutoSlide);
document.querySelector('.slider-arrow.next').addEventListener('click', stopAutoSlide);
