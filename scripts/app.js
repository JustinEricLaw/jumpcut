// Scroll Trigger
document.addEventListener('DOMContentLoaded', function(){

  // Mobile/Tablet Menu
  document.querySelector('.hamburger-toggle').addEventListener('click', function () {
    document.querySelector('.header-container').classList.toggle('nav-mobile-menu-open');
  });

  // ScrollTrigger Animation
  var trigger = new ScrollTrigger();

});
