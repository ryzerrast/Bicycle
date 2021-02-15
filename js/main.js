
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
function ibg(){
   let ibg = document.querySelectorAll(".ibg");
      for (let i = 0; i < ibg.length; i++) {
         if( ibg[i].querySelector('img') ) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
         }
      }
   }
   
ibg();
if( $('.slider__wrapper').length > 0 ) {
   $('.slider__wrapper').slick({
   // autoplay: true,
   // infinite: false,
      dots: true,
      arrows: false,
      accessibility: false,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplaySpeed: 3000,
      nextArrow: '<button type="button" class="slick-next"</button>',
      prevArrow: '<button type="button" class="slick-prev"</button>',
    });
}