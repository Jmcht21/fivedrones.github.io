
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobile-menu');

            if (hamburger && mobileMenu) {
                hamburger.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                    mobileMenu.classList.toggle('visible');
                    hamburger.classList.toggle('is-active');
                });
            } else {
                console.error('Hamburger or mobile menu element not found');
            }
        });
        document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const progressText = document.getElementById('progress-text');
  let imagesLoaded = 0;
  const totalImages = document.images.length;

  function updateProgress() {
    const progress = Math.round((imagesLoaded / totalImages) * 100);
    progressBarFill.style.width = progress + '%';
    progressText.textContent = `Chargement ${progress}%`;

    if (imagesLoaded === totalImages) {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }, 500);
    }
  }

  if (totalImages === 0) {
    loadingScreen.style.display = 'none';
  } else {
    Array.from(document.images).forEach(img => {
      if (img.complete) {
        imagesLoaded++;
        updateProgress();
      } else {
        img.addEventListener('load', () => {
          imagesLoaded++;
          updateProgress();
        });
        img.addEventListener('error', () => {
          imagesLoaded++;
          updateProgress();
        });
      }
    });
  }
});

