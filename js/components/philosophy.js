export function initPhilosophy() {
  const philosophySection = document.getElementById('philosophy-section');
  
  const philosophyHTML = `
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Filosofia</span>
        <h2 class="section-title">Como eu <span class="accent">trabalho</span></h2>
      </div>
      
      <div class="philosophy-container">
        <div class="philosophy-content">
          <p class="philosophy-quote">
            "Acredito que a tecnologia deve ser uma ferramenta para simplificar a vida das pessoas e não complicar como acontece com muitas soluções atuais"
          </p>
          
          <p class="philosophy-text">
            Minha abordagem de trabalho é centrada em três pilares fundamentais: comunicação clara, qualidade técnica e entrega de valor. Busco entender profundamente os objetivos do negócio e as necessidades dos usuários antes de iniciar qualquer desenvolvimento.
          </p>
        </div>
        
        <div class="principles-grid">
          <div class="principle-card">
            <div class="principle-number">01</div>
            <h3>Comunicação Transparente</h3>
            <p>Mantenho uma comunicação clara e objetiva durante todo o projeto, garantindo alinhamento constante sobre expectativas, prazos e resultados.</p>
          </div>
          
          <div class="principle-card">
            <div class="principle-number">02</div>
            <h3>Excelência Técnica</h3>
            <p>Comprometo-me com a qualidade do código, seguindo as melhores práticas e padrões da indústria para entregar soluções robustas e sustentáveis.</p>
          </div>
          
          <div class="principle-card">
            <div class="principle-number">03</div>
            <h3>Foco em Resultados</h3>
            <p>Priorizo entregas que gerem valor real para o negócio e para os usuários, alinhando sempre os aspectos técnicos aos objetivos estratégicos.</p>
          </div>
          
          <div class="principle-card">
            <div class="principle-number">04</div>
            <h3>Design Centrado no Usuário</h3>
            <p>Coloco as necessidades e expectativas dos usuários no centro do processo de desenvolvimento, criando experiências intuitivas e agradáveis.</p>
          </div>
        </div>
        
        <div class="process-steps">
          <h3>Meu Processo de Trabalho</h3>
          
          <div class="steps-container">
            <div class="step">
              <div class="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M7 20.66C7 19.1 9.9 17.61 12 17.61C14.1 17.61 17 19.1 17 20.66"></path>
                </svg>
              </div>
              <div class="step-content">
                <h4>Descubra</h4>
                <p>Entendimento profundo do problema, necessidades dos usuários e objetivos do negócio.</p>
              </div>
            </div>
            
            <div class="step-connector"></div>
            
            <div class="step">
              <div class="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div class="step-content">
                <h4>Defina</h4>
                <p>Planejamento da solução, arquitetura e definição de tecnologias e abordagens.</p>
              </div>
            </div>
            
            <div class="step-connector"></div>
            
            <div class="step">
              <div class="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <div class="step-content">
                <h4>Desenvolva</h4>
                <p>Implementação da solução com ciclos iterativos de desenvolvimento e validação.</p>
              </div>
            </div>
            
            <div class="step-connector"></div>
            
            <div class="step">
              <div class="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="step-content">
                <h4>Entregue</h4>
                <p>Lançamento, monitoramento e suporte contínuo para garantir o sucesso da solução.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  philosophySection.innerHTML = philosophyHTML;
  
  // Add animation for principle cards on scroll
  const observeElements = (elements, className) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(className);
          }, 100 * Array.from(elements).indexOf(entry.target));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  };
  
  // Observe principle cards
  const principleCards = document.querySelectorAll('.principle-card');
  observeElements(principleCards, 'visible');
  
  // Observe process steps
  const processSteps = document.querySelectorAll('.step');
  observeElements(processSteps, 'visible');
}