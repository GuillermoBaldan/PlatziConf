$(function(){
	$('[data-toggle="tooltip"]').tooltip()
})

//Script de navegación del carrousel de testimonios
let slideIndex;


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



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("testimonial-slide");
  console.log("------------------------------")
  console.log("slides.length: "+ slides.length)
  console.log("slideIndex: "+slideIndex)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) 
  {
	slideIndex = 1 
  	}
  slides[slideIndex-1].style.display = "block";
 
  setTimeout(showSlides, 1000); // Change image every 5 seconds
}



slideIndex = 0;
showSlides();