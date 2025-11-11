// Swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Доступность
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

// Табы

document.querySelectorAll('.job__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.job__link').forEach(function (btn) {
      btn.classList.remove('job__link_active')
    });
    e.currentTarget.classList.add('job__link_active'); document.querySelectorAll('.job__content').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('job__content_active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('job__content_active');
  });
});

// Аккордеон

$(".accordion").accordion({
  heightStyle: "content",
  active: true
});

// Burger

document.querySelector('.header__burger').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__menu').classList.add('header__menu_active');
});

document.querySelector('.header__menu-cross').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__menu').classList.remove('header__menu_active');
});

// Search

document.querySelector('.header__search').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__search__menu').classList.add('header__search_active');
});

document.querySelector('.header__search_closed').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__search__menu').classList.remove('header__search_active');
});
