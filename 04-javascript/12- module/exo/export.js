"use strict";
/* 
showSlides(n):

Affiche l’image correspondant à slideIndex.

Cache les autres images.

Met en surbrillance le point actif.


plusSlides(n):

Passe à l’image suivante ou précédente.


currentSlide(n):

Passe à une image spécifique lorsqu’un point est cliqué.


addevent():

Ajoute des événements de clic aux points pour changer d’image.


Écouteurs d’événements pour les boutons :

Le bouton prev affiche l’image précédente.

Le bouton next affiche l’image suivante. */

let slideIndex = 1;
showSlides(slideIndex);
export default function plusSlides(n) {
  
  showSlides(slideIndex += n);
}


export function currentSlide(n) {
  showSlides(slideIndex = n);
}

export function showSlides(n) {
  console.log(slideIndex);
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
export function addevent(){
  document.querySelectorAll('.dot').forEach((dot, index)=>{
    dot.addEventListener("click", () =>{
      currentSlide(index +1)
    })
  })
}

document.querySelector(".prev").addEventListener("click", function () {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function () {
  plusSlides(1);
});



