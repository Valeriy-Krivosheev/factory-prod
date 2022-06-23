new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.header-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="fraction-1">0</span><span class="' + currentClass + '"></span>' +
        '<span class="fraction-2">/0</span><span class="' + totalClass + '"></span>';
    }
  }
})

new Swiper('.slider-modules', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.modules-button-next',
    prevEl: '.modules-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  }
})

new Swiper('.slider-factories', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.factories-button-next',
    prevEl: '.factories-button-prev',
  },
  pagination: {
    el: '.factories-pagination',
    type: 'progressbar'
  },
  breakpoints: {
    480: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
  }
})


new Swiper('.slider-news', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.news-button-next',
    prevEl: '.news-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    }
  },

})

const menuBtn = document.querySelector('.nav-menu');
const menuList = document.querySelector('.nav__list')
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menuBtn.classList.toggle('active')
  menuList.classList.toggle('nav__list--active')
})