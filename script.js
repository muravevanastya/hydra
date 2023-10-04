const homeSwiper = new Swiper('.home__info', {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    840: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: '.home__info-button-next',
    prevEl: '.home__info-button-prev',
  },
});

const servicesSwiper = new Swiper('.services__cards', {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    840: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: '.services__cards-btn-next',
    prevEl: '.services__cards-btn-prev',
  },
});