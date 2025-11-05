
// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// Hero slider
const slides = document.querySelectorAll('.slide');
let current = 0;
function showSlide(i){
  slides.forEach((s, idx)=>{
    s.classList.toggle('active', idx === i);
  });
}
function nextSlide(){
  current = (current + 1) % slides.length;
  showSlide(current);
}
if (slides.length){
  showSlide(0);
  setInterval(nextSlide, 4500);
}
