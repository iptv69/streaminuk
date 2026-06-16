// StreaminUK — shared interactions
(function () {
  // Sticky nav shadow on scroll
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.qa-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.qa');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.qa').forEach(function (q) { q.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Current year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form -> compose email (no backend needed)
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = encodeURIComponent(form.name.value || '');
      var email = encodeURIComponent(form.email.value || '');
      var msg = encodeURIComponent(form.message.value || '');
      var to = form.getAttribute('data-email') || 'support@streaminuk.co.uk';
      var subject = encodeURIComponent('Website enquiry from ' + (form.name.value || 'a visitor'));
      var body = 'Name: ' + decodeURIComponent(name) + '%0D%0AEmail: ' + decodeURIComponent(email) +
                 '%0D%0A%0D%0A' + decodeURIComponent(msg);
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    });
  }
})();
