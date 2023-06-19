// Skrypty JavaScript

// Podążanie menu głównego za scrollem
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});
