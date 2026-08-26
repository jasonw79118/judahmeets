const b=document.querySelector('.menu-toggle'),n=document.querySelector('nav');b?.addEventListener('click',()=>n.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));

// MagCloud external-purchase speed bump.
(() => {
  const modal = document.getElementById('magcloud-modal');
  const continueLink = document.getElementById('continue-magcloud');
  if (!modal || !continueLink) return;

  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.magcloud-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const url = link.dataset.magcloudUrl;
      if (!url) return; // Add the final MagCloud product URL before enabling.
      continueLink.href = url;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  modal.querySelectorAll('[data-close-magcloud]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
})();
