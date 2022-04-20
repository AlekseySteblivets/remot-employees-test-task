$('.slider').slick({
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      initialSlide: 3,
      breakpoint: 1169,
      settings: {
        slidesToShow: 1.68,
      },
    },
  ],
  mobileFirst: true,
});

$('.slider-examples').slick({
  rows: 3,
});
