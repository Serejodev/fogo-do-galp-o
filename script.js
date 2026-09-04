  // Menu mobile
  var navToggle = document.getElementById('navToggle');
  var navList = document.getElementById('navList');
  var navEl = document.querySelector('nav');

  navToggle.addEventListener('click', function () {
    var isOpen = navList.classList.toggle('open');
    navEl.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Fecha o menu ao clicar num link (mobile)
  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
      navEl.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Destaca o link do menu de acordo com a seção visível
  var sections = document.querySelectorAll('section[id]');
  var navLinks = navList.querySelectorAll('a');

  function highlightNav() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (sec) {
      var top = sec.offsetTop;
      var bottom = top + sec.offsetHeight;
      var id = sec.getAttribute('id');
      var link = navList.querySelector('a[href="#' + id + '"]');
      if (!link) return;
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }

  // Botão voltar ao topo
  var backToTop = document.getElementById('backToTop');
  function toggleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    highlightNav();
    toggleBackToTop();
  });
  highlightNav();
  toggleBackToTop();

  // Toast ao clicar num card da galeria (lembrando que são ilustrações)
  var toast = document.getElementById('galleryToast');
  var toastTimer;
  document.querySelectorAll('.g-card').forEach(function (card) {
    card.addEventListener('click', function () {
      toast.textContent = card.getAttribute('data-caption') + ' →';
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        toast.classList.remove('show');
      }, 2200);
    });
  });
