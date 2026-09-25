const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const header = document.querySelector('.site-header');

const savedLanguage = window.localStorage.getItem('villa-language');
if (savedLanguage === 'en') document.body.classList.add('is-english');

document.querySelector('.lang-toggle').addEventListener('click', () => {
  const isEnglish = document.body.classList.toggle('is-english');
  document.documentElement.lang = isEnglish ? 'en' : 'es';
  window.localStorage.setItem('villa-language', isEnglish ? 'en' : 'es');
});

const updateHeader = () => {
  const progress = Math.min(window.scrollY / 260, 1);
  header.style.setProperty('--header-alpha', (0.08 + progress * 0.86).toFixed(2));
  header.classList.toggle('is-scrolled', progress > 0.08);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = document.querySelector('.form-note');
    note.textContent = 'Gracias. Hemos recibido tu solicitud y te responderemos pronto.';
    event.currentTarget.reset();
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();