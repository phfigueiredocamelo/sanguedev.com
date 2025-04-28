export function initScrollSpy() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-menu a');
  
  // Set a threshold for when a section is considered "active"
  const threshold = 200;
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - threshold;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = '#' + section.getAttribute('id');
      }
    });
    
    // If we're at the top of the page, set hero section as active
    if (scrollPosition < threshold) {
      current = '#hero-section';
    }
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  });
}