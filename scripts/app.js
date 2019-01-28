document.addEventListener('DOMContentLoaded', function(){

  // Mobile/Tablet Menu
  document.querySelector('.hamburger-toggle').addEventListener('click', function () {
    document.querySelector('.header-container').classList.toggle('nav-mobile-menu-open');
    document.querySelector('.hamburger').classList.toggle('is-active');
  });

  // ScrollTrigger Animation
  // var trigger = new ScrollTrigger();

});
