
  (function ($) {
  
  "use strict";

    var themeToggle = document.querySelector('.theme-toggle');
    var themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    function updateThemeToggle(theme) {
      if (!themeToggle || !themeIcon) return;

      var isDark = theme === 'dark';
      themeIcon.className = isDark ? 'bi bi-sun' : 'bi bi-moon-stars';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggle.querySelector('.visually-hidden').textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    }

    if (themeToggle) {
      updateThemeToggle(document.documentElement.dataset.theme || 'light');
      themeToggle.addEventListener('click', function () {
        var nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem('novinda-theme', nextTheme);
        updateThemeToggle(nextTheme);
      });
    }

    // SCROLL REVEALS
    var revealTargets = document.querySelectorAll('.about-visual-panel, .about-thumb, .education-card, .experience-card, .services-thumb, .projects-thumb, .portfolio-heading');
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (revealTargets.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
      document.body.classList.add('motion-ready');
      var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12 });

      revealTargets.forEach(function (target) {
        target.classList.add('reveal-on-scroll');
        revealObserver.observe(target);
      });
    }

    // PRE LOADER
    $(function(){
      $('.preloader').fadeOut(400);
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


