window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');
  setTimeout(() => {
    loader.style.animation = 'fadeOutLoader 0.8s forwards';
    loader.addEventListener('animationend', () => {
      loader.style.display = 'none';
      mainContent.hidden = false;
    });
  }, 3000);
});
