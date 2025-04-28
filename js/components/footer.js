export function initFooter() {
  const footerContainer = document.getElementById('footer-container');
  
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <a href="#" class="logo">
              <span class="logo-name">Sangue Dev<span class="accent">.</span></span>
            </a>
            <p class="footer-tagline">Muita energia com paixão e tecnologia.</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-links-group">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#hero-section">Início</a></li>
                <li><a href="#about-section">Sobre Mim</a></li>
                <li><a href="#services-section">Serviços</a></li>
                <li><a href="#philosophy-section">Filosofia</a></li>
                <li><a href="#contact-section">Contato</a></li>
              </ul>
            </div>
            
            <div class="footer-links-group">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#services-section">Desenvolvimento de Software</a></li>
                <li><a href="#services-section">Infraestrutura</a></li>
                <li><a href="#services-section">Consultoria Técnica</a></li>
              </ul>
            </div>
            
            <div class="footer-links-group">
              <h4>Contato</h4>
              <ul>
                <li><a href="mailto:contato@henriquefigueiredo.com">paulo@sanguedev.com</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-social">
            <h4>Redes Sociais</h4>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/paulohenrique-figueiredo" target="_blank" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/phfigueiredocamelo" target="_blank" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://instagram.com/henrique.dev" target="_blank" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Sangue Dev. Todos os direitos reservados.</p>
          <button id="scroll-to-top" aria-label="Voltar ao topo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  `;
  
  footerContainer.innerHTML = footerHTML;
  
  // Handle scroll to top button
  const scrollToTopButton = document.getElementById('scroll-to-top');
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Show/hide scroll to top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add('visible');
    } else {
      scrollToTopButton.classList.remove('visible');
    }
  });
}