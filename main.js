const swiper = new Swiper('.mySwiper', {
    loop: true,
    mousewheel: true,
    centeredSlide:true,
    slidesPerView: 4,
    spaceBetween: 1,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      393:{
        slidesPerView: 2,
      },
    },
  });

