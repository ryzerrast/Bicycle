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