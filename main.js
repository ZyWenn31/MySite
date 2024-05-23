const swiper = new Swiper('.mySwiper', {
    loop: true,
    mousewheel: true,
    centeredSlide:true,
    slidesPerView: 2.5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      394:{
      loop: true,
      mousewheel: true,
      centeredSlide:true,
      slidesPerView: 4,
      spaceBetween: 1,
      }
    }
  });

  new Swiper('.first-swiper', {
    loop: false,
    slidesPerView: 1,
    pagination:{
      el: '.swiper-pagination',
    },
  });

  new Swiper('.second-swiper', {
    loop: false,
    slidesPerView: 1,
    scrollbar:{
      el: '.swiper-scrollbar'
    }
  });

