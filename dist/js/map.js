//  $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(window).scrollTop() > 500) {
//       if ($(window).width() > 666) {
//         $('.map > script').attr('src', 'https://api-maps.yandex.ru/2.1/?apikey=d8d80a96-bfba-4810-baaf-e4a249cb1729&lang=ru_RU');
//       } else {
//         $('.map > script').attr('src', 'https://api-maps.yandex.ru/2.1/?apikey=d8d80a96-bfba-4810-baaf-e4a249cb1729&lang=ru_RU');
//       }
//     }
//   })
// });
 /* /* //  */
 /*   
     window.addEventListener('load', function () {

     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = 'src="https://api-maps.yandex.ru/2.1/?apikey=d8d80a96-bfba-4810-baaf-e4a249cb1729&lang=ru_RU';
     
  });  */
  
// setTimeout(function () {
//   var elem = document.createElement('script');
//   elem.type = 'text/javascript';
//   elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=d8d80a96-bfba-4810-baaf-e4a249cb1729&lang=ru_RU';
//   document.getElementsByTagName('body')[0].appendChild(elem);
// }, 2000);

      // ymaps.ready(init);
      // function init(){ 
      //   // Создание карты.    
      //   var myMap = new ymaps.Map("map",
      //    {
      //      center: [55.4331999, 37.5517477],
      //     zoom: 17,
      //     controls: [],
        
      //   });
      //   myMap.behaviors.disable('scrollZoom');  

      //   var myPlacemark = new ymaps.Placemark([55.433225, 37.553891], 
      //     {
      //     hintContent: 'г. Москва, ул. Советская 48 корп. 3',
      //     balloonContent: 'г. Москва, ул. Советская 48 корп. 3'
      //    },
          
      //     {
      //     iconLayout: 'default#imageWithContent',
      //     iconImageHref: "img/map-icon.png",
      //     iconContent: "Монтирование отопления и сантехники",
      //     iconImageSize: [46, 66],
      //     iconImageOffset: [-20, -60]
      
      //             }, );

      //   myMap.geoObjects.add(myPlacemark);
      //  }
       

// Создаем геообъект с типом геометрии "Точка".


//   function initMap() {
//     var coordinates = { lat: 47.212325, lng: 38.933663 },

//       map = new google.maps.Map(document.getElementById('map'), {
//         center: coordinates
//        });
//    }

// function initMap() {
//   var element = document.getElementById('map');
//   var options = {
//     zoom: 5,
//     center: { lat: 55.7558, lng: 37.6173 },
//   };
       
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
