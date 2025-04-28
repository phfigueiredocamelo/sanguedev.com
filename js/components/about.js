export function initAbout() {
  const aboutSection = document.getElementById('about-section');
  
  const aboutHTML = `
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Quem Sou</span>
        <h2 class="section-title">Além dos códigos, <span class="accent">conheça-me melhor</span></h2>
      </div>
      
      <div class="about-container">
        <div class="about-image">
          <img src="/ghibli.png" alt="Ghibli" />
          <div class="experience-badge">
            <span class="number">7</span>
            <span class="text">Anos de<br>Experiência</span>
          </div>
        </div>
        
        <div class="about-content">
          <div class="about-tabs">
            <button class="tab-button active" data-tab="professional">Profissional</button>
            <button class="tab-button" data-tab="personal">Pessoal</button>
          </div>
          
          <div class="tab-content active" id="professional-tab">
            <p class="lead-text">
              Desenvolvedor apaixonado com experiência sólida em transformar ideias em soluções digitais.
            </p>
            
            <p>
              Com mais de sete anos de experiência em startups de alto impacto. Atuo no desenvolvimento full-stack de soluções tecnológicas, 
              desde a concepção até a fase de produção e feedback, sempre com foco em criar aplicações robustas e escaláveis.
              <br><br>
              Tenho ampla vivência em integrações bancárias, CRMs e outros sistemas corporativos, 
              guiando-me pela compreensão profunda das necessidades de cada cliente para entregar soluções sob medida. Atualmente, dedico-me à experimentação 
              com modelos avançados de IA — desde agentes autônomos até arquiteturas MPC — para acelerar a geração de valor, validar novas ideias e abrir caminhos para oportunidades inovadoras.
            </p>
            
            <ul class="skills-list">
              <li>
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div class="skill-info">
                  <h4>Dev Stack</h4>
                  <p>JS, TS, Python, PHP, Java, Kotlin</p>
                </div>
              </li>
              
              <li>
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div class="skill-info">
                  <h4>Infra Stack</h4>
                  <p>AWS, Docker, Terraform, CI/CD</p>
                </div>
              </li>

              <li>
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <div class="skill-info">
                  <h4>Jornada</h4>
                  <p>Creditoo, Creditas, Altis</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div class="tab-content" id="personal-tab">
            <p class="lead-text">
              Apaixonado por desafios animais e carros clássicos.
            </p>
            
            <p>
              Fora do mundo dos códigos, sou um entusiasta de carros clássicos e tenho um projeto de restauração em andamento. Também sou pai de três cães, oito gatos e uma tartaruga incrível que sempre me acompanham durante as sessões de programação.
            </p>
            
            <p>
              Acredito que criatividade e tecnologia andam de mãos dadas, e busco inspiração em boas conversas com amigos, familiares e pesquisas com nossas novas tecnologias generativas. Minha filosofia é que a tecnologia deve simplificar a vida das pessoas e não complicar como acontece com muitas soluções atuais.
            </p>
            
            <div class="interests">
              <span class="interest-tag">Carros Clássicos</span>
              <span class="interest-tag">IA</span>
              <span class="interest-tag">Natureza</span>
              <span class="interest-tag">Família</span>
              <span class="interest-tag">Tecnologia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  aboutSection.innerHTML = aboutHTML;
  
  // Handle tab switching
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}