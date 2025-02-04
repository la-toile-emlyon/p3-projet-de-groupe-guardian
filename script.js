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
navButtons[0].classList.add('active');
slides[0].classList.add('active');

document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.querySelector(".contact__button");
    const modal = document.querySelector(".contact__modal");
    const closeModal = document.querySelector(".contact__close");
    modal.style.display = "none";


    // Ouvrir la modal au clic sur le bouton jaune
    contactButton.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Fermer la modal au clic sur le bouton de fermeture
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fermer la modal au clic en dehors du formulaire
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        monBouton.addEventListener('click', function(event) {
            event.stopPropagation()
          });
    });
});