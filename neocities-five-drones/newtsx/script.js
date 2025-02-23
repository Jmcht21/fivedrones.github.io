// Gestion de l'écran de chargement
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const progressText = document.getElementById('progress-text');

  let itemsLoaded = 0;
  const totalItems = document.images.length + 1;

  function updateProgress() {
    const progress = Math.round((itemsLoaded / totalItems) * 100);
    progressBarFill.style.width = progress + '%';
    progressText.textContent = `Chargement ${progress}%`;

    if (itemsLoaded === totalItems) {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }, 500);
    }
  }

  Array.from(document.images).forEach(img => {
    if (img.complete) {
      itemsLoaded++;
      updateProgress();
    } else {
      img.addEventListener('load', () => {
        itemsLoaded++;
        updateProgress();
      });
      img.addEventListener('error', () => {
        itemsLoaded++;
        updateProgress();
      });
    }
  });

  window.addEventListener('load', () => {
    itemsLoaded++;
    updateProgress();
  });
});

// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
});

// Initialisation de PhotoSwipe
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        moreText: '',
        closeIcon: 'times',
        nextIcon: 'angle-right',
        prevIcon: 'angle-left',
        plyr: {
            config: {
                ratio: '16:9',
                fullscreen: {
                    enabled: true,
                    fallback: true,
                    iosNative: true
                }
            }
        }
    });
});

// Smooth scroll pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});