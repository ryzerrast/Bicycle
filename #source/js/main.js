//@prepros-append ibg.js
//@prepros-append slider.js

const iconMenu = document.querySelector('.header__icon'),
      bodyMenu = document.querySelector('.header__body');

iconMenu.addEventListener('click', function() {
   this.classList.toggle('active');
   bodyMenu.classList.toggle('active');
   if(this.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = 'auto';
   }
});