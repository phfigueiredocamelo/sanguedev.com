export function initServices() {
  const servicesSection = document.getElementById('services-section');
  
  const servicesHTML = `
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Serviços</span>
        <h2 class="section-title">Soluções que <span class="accent">entrego</span></h2>
      </div>
      
      <div class="services-container">
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3 class="service-title">Desenvolvimento</h3>
          <p class="service-description">
            Criação de sites e aplicações web responsivas, rápidas e otimizadas para SEO, com foco em experiência do usuário além de aplicações backend.
          </p>
          <ul class="service-features">
            <li>Sites Institucionais</li>
            <li>E-commerce</li>
            <li>Aplicações Web</li>
            <li>Landing Pages</li>
            <li>Aplicações Backend</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h3 class="service-title">Infraestrutura</h3>
          <p class="service-description">
            Configuração e gerenciamento de servidores, redes e sistemas de armazenamento de dados.
          </p>
          <ul class="service-features">
            <li>Cloud</li>
            <li>Serverless</li>
            <li>CI/CD</li>
            <li>Containers</li>
            <li>DevOps</li>
            <li>Infra como Código</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 class="service-title">Consultoria Técnica</h3>
          <p class="service-description">
            Orientação estratégica para projetos digitais, avaliação de tecnologias e otimização de processos de desenvolvimento.
          </p>
          <ul class="service-features">
            <li>Análise de Arquitetura</li>
            <li>Otimização de Performance</li>
            <li>Definição de Stack</li>
            <li>Revisão de Código</li>
          </ul>
        </div>
      </div>
      
      <div class="projects-preview">
        <h3>Projetos Recentes</h3>
        
        <div class="projects-grid">

          <div class="project-card">
            <div class="project-image">
              <img src="/giveincoins.png" alt="Give in Coins" />
            </div>
            <div class="project-info">
              <h4>Give in Coins</h4>
              <p>Plataforma que permite doações em criptomoedas via Pix, cartão de crédito e outros meios locais, com conversão automática via plataforma On-Ramp. <br>
              <a href="https://giveincoins.com" target="_blank">Visite o site</a>
              </p>
              <span class="project-tag">Native App</span>
              <span class="project-tag">Donations</span>
              <span class="project-tag">Crypto</span>
              <span class="project-tag">On-Ramp</span>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <img src="/preencheai.png" alt="Aplicativo de gestão" />
            </div>
            <div class="project-info">
              <h4>Extensão Chrome</h4>
              <p>Desenvolvimento de extensão Chrome para preenchimento automático de formulários com IA.</p>
              <span class="project-tag">JavaScript</span>
              <span class="project-tag">OpenAI</span>
              <span class="project-tag">Chrome Extension</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
  
  servicesSection.innerHTML = servicesHTML;
  
  // Add hover effect to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      serviceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}