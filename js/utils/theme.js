export function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use the system preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.add('light-theme');
  }
  
  // Update the button icon state
  updateButtonIcon();
  
  // Theme toggle click event
  themeToggle.addEventListener('click', () => {
    // Toggle theme
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    
    // Save preference
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update button icon
    updateButtonIcon();
  });
  
  // Update theme button icon based on active theme
  function updateButtonIcon() {
    const isDark = document.body.classList.contains('dark-theme');
    
    if (isDark) {
      document.querySelector('.sun-icon').style.display = 'block';
      document.querySelector('.moon-icon').style.display = 'none';
    } else {
      document.querySelector('.sun-icon').style.display = 'none';
      document.querySelector('.moon-icon').style.display = 'block';
    }
  }
  
  // Listen for system theme changes
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
      updateButtonIcon();
    }
  });
}