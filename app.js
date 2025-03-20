// Fonction pour gérer la sticky navbar et changer la couleur au scroll
window.onscroll = function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("scrolled");
      navbar.classList.remove("sticky");
  }
};

// Fonction pour activer/désactiver le menu hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});




document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll('.gallery-item img');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImg = lightboxOverlay.querySelector('img');

  // Ouvrir la lightbox au clic sur une image
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxOverlay.classList.add('active');
    });
  });

  // Fermer la lightbox au clic sur le bouton de fermeture
  lightboxClose.addEventListener('click', () => {
    lightboxOverlay.classList.remove('active');
  });

  // Fermer en cliquant en dehors de l'image
  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.classList.remove('active');
    }
  });
});








document.querySelector('.swiper-button-next').addEventListener('click', restartTypewriter);
document.querySelector('.swiper-button-prev').addEventListener('click', restartTypewriter);
function restartTypewriter() {
  const texts = document.querySelectorAll(".typewriter-text");
  texts.forEach(el => {
    el.style.animation = "none"; // Reset the animation
    // Trigger a reflow to ensure animation reset
    el.offsetHeight; // reflow
    el.style.animation = "typing 3s steps(30, end) forwards, blink-caret .75s step-end infinite"; // Restart the animation
  });
}



const swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  
});





document.getElementById("pricingToggle").addEventListener("change", function() {
  const isAnnual = this.checked; // true pour annuel, false pour mensuel
  document.querySelectorAll(".pricing-card").forEach(card => {
    const monthlyPrice = card.getAttribute("data-monthly");
    const annualPrice = card.getAttribute("data-annual");
    const priceElement = card.querySelector(".price");
    
    if (isAnnual) {
      priceElement.innerHTML = `$${annualPrice}<span class="duration">/an</span>`;
    } else {
      priceElement.innerHTML = `$${monthlyPrice}<span class="duration">/mois</span>`;
    }
  });
});
