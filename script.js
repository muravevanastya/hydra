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
  spaceBetween: 38,
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

const techSwiper = new Swiper('.tech__companies', {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    840: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: '.tech__companies-btn-next',
    prevEl: '.tech__companies-btn-prev',
  },
});

const processSwiper = new Swiper('.process__container', {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    840: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: '.process__container-btn-next',
    prevEl: '.process__container-btn-prev',
  },
  // spaceBetween: 20,
});