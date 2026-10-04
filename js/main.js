'use strict';
(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const navigation = document.getElementById('primary-navigation');
  if (toggle && navigation) {
    const closeMenu = (returnFocus = false) => {
      navigation.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Buka navigasi');
      if (returnFocus) toggle.focus();
    };
    toggle.addEventListener('click', () => {
      const open = navigation.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navigation.classList.contains('is-open')) closeMenu(true);
    });
    document.addEventListener('click', event => {
      if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    window.matchMedia('(min-width: 1101px)').addEventListener('change', () => closeMenu());
  }
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const fields = new FormData(form);
      const subject = `Konsultasi ${fields.get('topic')} — ${String(fields.get('name')).trim()}`;
      const body = [
        'Yth. Dr. Ir. Rachmat Manggala Purba,', '',
        `Nama: ${String(fields.get('name')).trim()}`,
        `Email: ${String(fields.get('email')).trim()}`,
        `Instansi: ${String(fields.get('organization') || '—').trim()}`,
        `Keperluan: ${fields.get('topic')}`, '',
        String(fields.get('message')).trim(), '', 'Terima kasih.'
      ].join('\n');
      const link = `mailto:rachmatmp.rmp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.hidden = false;
      status.textContent = 'Draf dibuka di aplikasi email Anda. Periksa isinya, lalu kirim dari aplikasi tersebut. Jika aplikasi tidak terbuka, hubungi rachmatmp.rmp@gmail.com melalui layanan email Anda.';
      window.location.href = link;
    });
  }
  const back = document.querySelector('[data-back-top]');
  if (back) {
    const update = () => { back.hidden = window.scrollY < 700; };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // Progressive enhancement: content stays visible before JS and after errors.
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;

  const revealSelector = [
    '.section-heading', '.heading-inline', '.split > *', '.bio-layout .prose > *',
    '.pillar', '.feature-publication', '.video-feature > *', '.cta-inner > div',
    '.education', '.credential', '.timeline-item', '.academic', '.organization-card',
    '.expertise-section > div:first-child', '.expertise-groups > div',
    '.pub-item', '.video-card', '.selection-row', '.contact-block', '.faq > details'
  ].join(', ');
  const candidates = [...document.querySelectorAll(revealSelector)];
  const candidateSet = new Set(candidates);
  const pending = new Set(candidates.filter(element => {
    // Reveal each block only once; nested blocks must not animate twice.
    for (let parent = element.parentElement; parent; parent = parent.parentElement) {
      if (candidateSet.has(parent)) return false;
    }
    return element.getBoundingClientRect().top >= window.innerHeight;
  }));
  if (!pending.size) return;

  const clearAnimation = element => {
    element.classList.remove('scroll-reveal');
    element.style.removeProperty('--reveal-delay');
  };
  const observer = new IntersectionObserver(entries => {
    let sequence = 0;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      observer.unobserve(element);
      pending.delete(element);
      // Skip past blocks on anchor jumps, restored scroll, and keyboard focus.
      if (motion.matches || entry.boundingClientRect.bottom <= 0 ||
          element.contains(document.activeElement)) return;
      element.style.setProperty('--reveal-delay', `${Math.min(sequence++, 2) * 85}ms`);
      element.classList.add('scroll-reveal');
    });
    if (!pending.size) observer.disconnect();
  }, { rootMargin: '0px 0px 32px 0px', threshold: 0 });

  pending.forEach(element => observer.observe(element));
  document.addEventListener('animationend', event => {
    if (event.animationName === 'scroll-reveal-in') clearAnimation(event.target);
  });
  document.addEventListener('focusin', event => {
    const element = event.target.closest(revealSelector);
    // Find the actual selected block if the focused link is inside a nested one.
    for (let block = element; block; block = block.parentElement) {
      if (pending.delete(block)) observer.unobserve(block);
      if (block.classList.contains('scroll-reveal')) clearAnimation(block);
    }
  });
  motion.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    pending.clear();
    document.querySelectorAll('.scroll-reveal').forEach(clearAnimation);
  });
})();
