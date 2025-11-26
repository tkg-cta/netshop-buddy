// ============================================
// Header Module
// ============================================

export function initHeader() {
  const header = document.querySelector('.l-header');
  
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 10) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  
  // Initial check
  handleScroll();
}
