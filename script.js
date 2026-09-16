const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => nav?.classList.remove('open')));

document.getElementById('form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = (id) => document.getElementById(id).value.trim();
  const message = [
    'Hello WebForge!', '',
    `Name: ${value('name')}`,
    `Business: ${value('brandName')}`,
    `Website type: ${value('type')}`,
    `Details: ${value('details')}`,
    '', "I'd like to discuss this project."
  ].join('\n');
  window.open(`https://wa.me/2349123429926?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

const filterButtons = document.querySelectorAll('.filterBtn');
const portfolioCards = document.querySelectorAll('.demoGrid .demo');
filterButtons.forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach((item) => item.classList.toggle('active', item === button));
  portfolioCards.forEach((card) => {
    const visible = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('is-hidden', !visible);
  });
}));

const track = document.getElementById('testimonialTrack');
const dots = [...document.querySelectorAll('.dot')];
let testimonialIndex = 0;
const showTestimonial = (index) => {
  if (!track) return;
  testimonialIndex = (index + dots.length) % dots.length;
  track.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === testimonialIndex));
};
document.getElementById('testimonialPrev')?.addEventListener('click', () => showTestimonial(testimonialIndex - 1));
document.getElementById('testimonialNext')?.addEventListener('click', () => showTestimonial(testimonialIndex + 1));
dots.forEach((dot, index) => dot.addEventListener('click', () => showTestimonial(index)));
let testimonialTimer = window.setInterval(() => showTestimonial(testimonialIndex + 1), 6500);
[...document.querySelectorAll('.sliderBtn, .dot')].forEach((control) => control.addEventListener('click', () => { window.clearInterval(testimonialTimer); testimonialTimer = window.setInterval(() => showTestimonial(testimonialIndex + 1), 6500); }));
