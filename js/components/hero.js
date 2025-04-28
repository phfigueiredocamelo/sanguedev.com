export function initHero() {
  const heroSection = document.getElementById('hero-section');
  
  const heroHTML = `
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">Muita <span class="accent">energia</span></span>
          <span class="title-line">com <span class="accent">paixão</span> e <span class="accent">tecnologia</span>.</span>
        </h1>
        
        <p class="hero-subtitle">
          Desenvolvedor apaixonado por criar experiências digitais que combinam
          <strong>desenvolvimento</strong>, <strong>infraestrutura</strong> e <strong>arquitetura</strong>.
        </p>
        
        <div class="hero-cta">
          <a href="#services-section" class="cta-button primary">Conheça meu trabalho</a>
          <a href="#contact-section" class="cta-button secondary">Vamos conversar</a>
        </div>
      </div>
      
      <div class="hero-image">
        <div class="image-container">
          <img src="/animals.jpg" alt="Eu passando a mão em um elefante" />
        </div>
      </div>
    </div>
    
    
  `;
  
  heroSection.innerHTML = heroHTML;
  
  // Animate title on page load
  const titleLines = document.querySelectorAll('.title-line');
  titleLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, 300 * (index + 1));
  });
}