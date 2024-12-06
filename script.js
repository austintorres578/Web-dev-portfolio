// Select elements
const hero = document.querySelector('.hero');
const heroButton = document.querySelector('#hero-button');
const formTop = document.querySelector('.form-top');
const heroContact = document.querySelector('.hero-contact');
const heroContactForm = document.querySelector('.hero-contact-form');
const heroContactAbout = document.querySelector('.hero-contact-about');
const heroName = document.querySelector('.hero-name');

let initialized = false; // Flag to check if the initial position has been set

// Function to handle hero background movement
function heroBackgroundShift(event) {
  const { left, top, width, height } = hero.getBoundingClientRect();
  const x = (event.clientX - left) / width;
  const y = (event.clientY - top) / height;

  const moveX = (x * 2 - 1) * -30; // Normalize and invert X
  const moveY = (y * 2 - 1) * -30; // Normalize and invert Y

  hero.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
}

// Initialize background position on mouse enter
function initializeBackgroundPosition() {
  if (!initialized) {
    hero.style.backgroundPosition = '50% 50%';
    initialized = true;
  }
}

// Reveal hero contact
function revealHeroContact() {
  heroContact.style.opacity = 1;
  heroContact.style.pointerEvents = 'all';
  heroContactAbout.style.top = '0%';
  heroContactForm.style.top = '0%';
  heroName.style.opacity = 0;
  heroName.style.pointerEvents = 'none';
}

// Close hero contact
function closeHeroContact() {
  heroContact.style.opacity = 0;
  heroContact.style.pointerEvents = 'none';
  heroContactAbout.style.top = '-100%';
  heroContactForm.style.top = '100%';
  heroName.style.opacity = 1;
  heroName.style.pointerEvents = 'all';
}

// Event listeners
hero.addEventListener('mouseenter', initializeBackgroundPosition);
hero.addEventListener('mousemove', heroBackgroundShift);
heroButton.addEventListener('click', revealHeroContact);
formTop.querySelector('button').addEventListener('click', closeHeroContact);
