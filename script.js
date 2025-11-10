let slides = document.querySelectorAll('.slideshow img');
let current = 0;

function showNext() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(showNext, 5000);
