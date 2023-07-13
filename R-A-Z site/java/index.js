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

function generateRandomPosition() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var randomX = Math.floor(Math.random() * (screenWidth - 50));
  var randomY = Math.floor(Math.random() * (screenHeight - 50));

  return { x: randomX, y: randomY };
}

function moveCharacter(characterId) {
  var character = document.getElementById(characterId);
  var position = generateRandomPosition();

  var containerWidth = document.querySelector('.container').offsetWidth;
  var containerHeight = document.querySelector('.container').offsetHeight;

  // Vérifier et ajuster les positions pour rester à l'intérieur du conteneur
  if (position.x + 50 > containerWidth) {
    position.x = containerWidth - 50;
  }
  if (position.y + 50 > containerHeight) {
    position.y = containerHeight - 50;
  }

  character.style.left = position.x + 'px';
  character.style.top = position.y + 'px';
}

setInterval(function() {
  moveCharacter('character1');
  moveCharacter('character2');
  moveCharacter('character3');
  moveCharacter('character4');
  moveCharacter('character5');
}, 2000); // Déplace les personnages toutes les 2 secondes (ajustez selon vos besoins)
