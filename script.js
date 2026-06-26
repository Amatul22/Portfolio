// Gentle reveal-on-scroll for sections. Respects prefers-reduced-motion.
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var revealEls = document.querySelectorAll(
    '.exp-card, .sticker, .t-item, .contact-card'
  );

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.style.opacity = 1; });
    return;
  }

  revealEls.forEach(function (el) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el) { observer.observe(el); });
})();
