// ============================================
// Utility Functions
// ============================================

export function smoothScrollTo(elementId) {
 const element = document.getElementById(elementId);
 if (element) {
  element.scrollIntoView({ behavior: 'smooth' });
 }
}

export function initSmoothScroll() {
 // Add smooth scroll to all CTA buttons
 const ctaButtons = document.querySelectorAll('[data-scroll-to]');

 ctaButtons.forEach(button => {
  button.addEventListener('click', (e) => {
   e.preventDefault();
   const targetId = button.dataset.scrollTo;
   smoothScrollTo(targetId);
  });
 });
}
