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
  slidesPerRow: 1,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        // slidesToShow: 4,
        rows: 3,
        slidesPerRow: 2,
      },
    },
  ],
  mobileFirst: true,
});
