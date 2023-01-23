$(function(){
	$('[data-toggle="tooltip"]').tooltip()
})

//Script de navegación del carrousel de testimonios
let slideIndex;
let slides = document.getElementsByClassName("testimonial-slide");


function prevSlide() {
 slideIndex -= 1;
 if (slideIndex < 1) 
 {
   slideIndex = slides.length; 
	 }
 draw();
}

function nextSlide() {
slideIndex += 1;
if (slideIndex > slides.length) 
{
  slideIndex = 1 
	}
draw();
}

function currentSlide(n) {
  slideIndex = n;
  draw();
}



function showSlides() {
  let i;
  console.log("------------------------------")
  console.log("slides.length: "+ slides.length)
  console.log("slideIndex: "+slideIndex)

  slideIndex++;
  if (slideIndex > slides.length) 
  {
	slideIndex = 1 
  	}

  draw();
  setTimeout(showSlides, 4000); // Change image every 5 seconds
}

function draw(){
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	  }
	  slides[slideIndex-1].style.display = "block";
}



slideIndex = 0;
showSlides();