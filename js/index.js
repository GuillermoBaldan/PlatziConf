$(function(){
	$('[data-toggle="tooltip"]').tooltip()
})

//Script de navegación del carrousel de testimonios
let slideIndex = 1;
showSlides(slideIndex);

function prevSlide() {
	console.log("prevSlidew")
  showSlides(slideIndex -= 1);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimonial-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
