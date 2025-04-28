export function initAnimations() {
  // Initialize intersection observers for scroll animations
  const fadeElements = document.querySelectorAll('.section-header, .hero-content, .about-container, .services-container, .philosophy-content, .principles-grid, .process-steps, .contact-container');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(element => {
    element.classList.add('fade-element');
    fadeObserver.observe(element);
  });
  
  // Staggered animations for card elements
  const staggeredElements = [
    { selector: '.service-card', className: 'stagger-fade-in' },
    { selector: '.project-card', className: 'stagger-fade-in' },
    { selector: '.contact-method', className: 'stagger-fade-in' }
  ];
  
  staggeredElements.forEach(({ selector, className }) => {
    const elements = document.querySelectorAll(selector);
    
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add the animation class with a staggered delay
          setTimeout(() => {
            entry.target.classList.add(className);
          }, 100 * index);
          
          staggerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
      staggerObserver.observe(element);
    });
  });
  
  // Parallax effect for hero image
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.15; // Adjust this value for more or less parallax effect
      
      if (scrolled < 600) { // Only apply effect when hero section is visible
        heroImage.style.transform = `translateY(${rate}px)`;
      }
    });
  }
  
  // Floating cards animation in hero section
  const floatingCards = document.querySelectorAll('.floating-card');
  
  floatingCards.forEach((card, index) => {
    // Staggered entrance
    setTimeout(() => {
      card.classList.add('visible');
    }, 800 + (index * 200));
    
    // Continuous floating animation
    setInterval(() => {
      card.classList.toggle('float-up');
    }, 3000 + (index * 500));
  });
}