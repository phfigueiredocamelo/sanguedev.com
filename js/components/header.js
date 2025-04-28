export function initHeader() {
  const headerContainer = document.getElementById('header-container');
  
  // Create header HTML
  const headerHTML = `
    <header class="header">
      <div class="container">
        <a href="#" class="logo">
          <img src="/logo.png" alt="Sangue Dev" class="logo-icon">
        </a>
        
        <nav class="desktop-nav">
          <ul>
            <li><a href="#about-section">Sobre Mim</a></li>
            <li><a href="#services-section">Serviços</a></li>
            <li><a href="#philosophy-section">Filosofia</a></li>
            <li><a href="#contact-section">Contato</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <button id="theme-toggle" aria-label="Alternar tema claro/escuro">
            <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          
          <button class="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <div class="mobile-menu">
        <nav>
          <ul>
            <li><a href="#about-section">Sobre Mim</a></li>
            <li><a href="#services-section">Serviços</a></li>
            <li><a href="#philosophy-section">Filosofia</a></li>
            <li><a href="#contact-section">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
  
  // Inject header HTML
  headerContainer.innerHTML = headerHTML;
  
  // Handle hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
  
  
  
  // Handle scroll behavior for header
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add box shadow when scrolled
    if (currentScrollTop > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide header when scrolling down, show when scrolling up
    if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    
    lastScrollTop = currentScrollTop;
  });
}