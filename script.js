const burgerMenu = document.querySelector('.header__burger');
const links = document.querySelector('.header__container');
const menuItems = document.querySelectorAll('.header__nav-item');
const body = document.querySelector('body')

burgerMenu.addEventListener('click', () => {
  links.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  body.classList.toggle('lock')
})

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    links.classList.remove('active');
    burgerMenu.classList.remove('active');
    body.classList.remove('lock');
  });
});

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
});