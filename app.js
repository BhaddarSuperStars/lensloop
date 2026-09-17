const AFFILIATE_LINK = 'https://www.awin1.com/cread.php?awinmid=124966&awinaffid=3067297';
const BANNERS = [
  'https://www.awin1.com/cread.php?s=4742718&v=124966&q=601646&r=3067297',
  'https://www.awin1.com/cread.php?s=4742696&v=124966&q=601645&r=3067297',
  'https://www.awin1.com/cread.php?s=4742695&v=124966&q=601644&r=3067297'
];
const CONTACT_EMAIL = 'agents@getservices.ai';
const CONTACT_PHONE = '313-729-1534';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-aff]').forEach((el) => {
    el.setAttribute('href', AFFILIATE_LINK);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'sponsored noopener nofollow');
    if (el.getAttribute('href') === '#' || el.getAttribute('href') === '') {
      el.setAttribute('href', AFFILIATE_LINK);
    }
  });

  document.querySelectorAll('a[href*="awin1.com"]').forEach((el) => {
    el.setAttribute('rel', 'sponsored noopener nofollow');
    el.setAttribute('target', '_blank');
  });

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.textContent = open ? 'Close' : 'Menu';
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.textContent = 'Menu';
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.decoding = 'async';
    });
  }
});
