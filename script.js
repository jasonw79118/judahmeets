const b=document.querySelector('.menu-toggle'),n=document.querySelector('nav');b?.addEventListener('click',()=>n.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));




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
