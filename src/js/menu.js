$('.menu__button').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('menu__button_active');
  $('.navbar-menu-list').toggleClass('navbar-menu-list_active');
});