$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      if ($(window).width() > 666) {
        $('.map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afc2b50c47acdb9daa8bdc1baac86cbce1c43408ffdaebf96469297a62d97e1e6&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false');
      } else {
        $('.map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afc2b50c47acdb9daa8bdc1baac86cbce1c43408ffdaebf96469297a62d97e1e6&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false');
      }
    }
  })
});
