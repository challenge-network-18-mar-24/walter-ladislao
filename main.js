// Lista delle immagini
var images = ['red_ghost.png', 'blu_ghost.png'];
var currentIndex = 0;

// Funzione per cambiare l'immagine
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Incrementa l'indice e riporta a 0 se si raggiunge la fine dell'array
  var img = document.getElementById('image');
  img.src = images[currentIndex];
}

// Avvia l'animazione per cambiare l'immagine ogni 3 secondi
setInterval(changeImage, 2000);