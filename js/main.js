const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

navTriggerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-is-open')
})

// swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // breakpoints
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },    
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});

// scroll reveal animations
const sr = ScrollReveal({
  origin: 'button',
  distance: '60px',
  duration: 3000,
  delay: 800,
  // reset: true,
})

// hero
sr.reveal('.hero__text', { origin: 'top' });

// steps
sr.reveal('.steps__step', { origin: 'bottom', distance: '100px', interval: 100 });

// about
sr.reveal('.about__text', { origin: 'left' });
sr.reveal('.about__img', { origin: 'rigth', delay: 800 });

// testimonial
sr.reveal('.testimonial__bg', { origin: 'bottom', delay: 800 });
sr.reveal('.testimonial__title', { origin: 'bottom' });
sr.reveal('.testimonial__slider', { origin: 'bottom', delay: 1000 });

// brands
sr.reveal('.brands__img', { origin: 'bottom', distance: '100px', delay: 600, interval: 100 });

// work
sr.reveal('.work__title', { origin: 'bottom', distance: '100px', delay: 600, interval: 100 });
sr.reveal('.work__subtitle', { origin: 'bottom', distance: '100px', delay: 800, interval: 100 });
sr.reveal('.work__grid', { origin: 'bottom', distance: '100px', delay: 1000, interval: 100 });

// stats
sr.reveal('.stats', { origin: 'bottom', distance: '100px' });
sr.reveal('.stats__item', { origin: 'bottom', distance: '100px', interval: 100 });

// news
sr.reveal('.news__title', { origin: 'bottom', distance: '100px' });
sr.reveal('.news__subtitle', { origin: 'bottom', distance: '100px', delay: 800 });
sr.reveal('.news__item', { origin: 'bottom', distance: '100px', interval: 100, delay: 800 });
   
// contact
sr.reveal('.contact__container', { origin: 'bottom' });
sr.reveal('.contact__text', { origin: 'bottom', delay: 800 });

// footer
sr.reveal('.footer__item', { origin: 'bottom', interval: 100, delay: 800 });
