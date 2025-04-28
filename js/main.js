import { initHeader } from './components/header.js';
import { initHero } from './components/hero.js';
import { initAbout } from './components/about.js';
import { initServices } from './components/services.js';
import { initPhilosophy } from './components/philosophy.js';
import { initContact } from './components/contact.js';
import { initFooter } from './components/footer.js';
import { initThemeToggle } from './utils/theme.js';
import { initAnimations } from './utils/animations.js';
import { initScrollSpy } from './utils/scrollSpy.js';

// Initialize all components and utils
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initHeader();
  initHero();
  initAbout();
  initServices();
  initPhilosophy();
  initContact();
  initFooter();
  
  // Initialize utilities
  initThemeToggle();
  initAnimations();
  initScrollSpy();

  // Handle scroll-to functionality for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          document.querySelector('.hamburger').classList.remove('active');
        }
        
        // Smooth scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
});