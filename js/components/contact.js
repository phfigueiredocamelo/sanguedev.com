export function initContact() {
  const contactSection = document.getElementById('contact-section');
  
  const contactHTML = `
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Contato</span>
        <h2 class="section-title">Vamos criar algo <span class="accent">extraordinário</span></h2>
      </div>
      
      <div class="contact-container">
        <div class="contact-info">
          <p class="contact-lead">
            Estou aberto para novos projetos, parcerias e oportunidades para colaborar em ideias interessantes.
          </p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="method-content">
                <h4>Email</h4>
                <p><a href="mailto:paulo@sanguedev.com">paulo@sanguedev.com</a></p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div class="method-content">
                <h4>Instagram</h4>
                <p><a href="https://instagram.com/sanguedev" target="_blank">@sanguedev</a></p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div class="method-content">
                <h4>LinkedIn</h4>
                <p><a href="https://www.linkedin.com/in/paulohenrique-figueiredo/" target="_blank">https://www.linkedin.com/in/paulohenrique-figueiredo/</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container">
          
        </div>
      </div>
    </div>
  `;
}