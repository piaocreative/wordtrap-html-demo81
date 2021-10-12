$( document ).ready( function() {

  if ( $('.about-details' ).length ) {
    $('.about-details').slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.about-prev'),
      nextArrow: $('.about-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
          }
        }
      ]
    });   
  }

  if ( $( '.banner-products' ).length ) {
    $('.banner-products').slick({
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode:true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });   
  }

});