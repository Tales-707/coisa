// MENU
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
// SLIDER
const swiper = new Swiper(".swiper",{
  autoplay: {
        delay: 10000,
        disableOnInteraction: false,
        
      },
  loop: true,
  navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination:{
      el: ".swiper-pagination",
  },
  keyboard: true,
  dynamicBullets: true,
});
    
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
// SCROOL REVEVAL
ScrollReveal().reveal('.conteúdo',{delay:1000, reset: true});
