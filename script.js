const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('site-nav');
if (menuButton && navigation) {
  const setMenuOpen = open => {
    navigation.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  menuButton.addEventListener('click', () => setMenuOpen(!navigation.classList.contains('open')));
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
}




// MagCloud external-purchase speed bump — robust live-link version.
(() => {
  const modal = document.getElementById('magcloud-modal');
  const continueLink = document.getElementById('continue-magcloud');

  document.querySelectorAll('.magcloud-link').forEach(link => {
    link.addEventListener('click', event => {
      const url = link.dataset.magcloudUrl || link.getAttribute('href');
      if (!url || url === '#') return;

      // If modal markup is unavailable for any reason, allow normal MagCloud navigation.
      if (!modal || !continueLink) return;

      event.preventDefault();
      continueLink.setAttribute('href', url);
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  if (!modal) return;

  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  modal.querySelectorAll('[data-close-magcloud]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
})();
