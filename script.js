// section NavBa
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) { 
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
});

// Section temoignages
const track = document.querySelector('.temoignages__track');
const slides = Array.from(document.querySelectorAll('.temoignages__slide'));
const navButtons = Array.from(document.querySelectorAll('.temoignages__nav-btn'));

function goToSlide(index) {

    const totalSlides = slides.length;
    const targetIndex = index % totalSlides;

    navButtons.forEach(btn => btn.classList.remove('active'));
    navButtons[targetIndex].classList.add('active');

    
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${targetIndex * slideWidth}px)`;

    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[targetIndex].classList.add('active');
}

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        goToSlide(index + 1); 
    });
});


// Contact form
const contactButton = document.querySelector('.contact__button');
const contactModal = document.querySelector('.contact__modal');
const contactClose = document.querySelector('.contact__close');

contactButton.addEventListener('click', () => {
    contactModal.style.display = 'flex'; // Affiche la modal
});

contactClose.addEventListener('click', () => {
    contactModal.style.display = 'none'; // Cache la modal
});

window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none'; // Cache la modal si on clique en dehors
    }
});

// Section contexte - documentaire
