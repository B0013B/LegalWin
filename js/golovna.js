// $(function(){

//     $('.slider__item').slick({
//         arrows: false,
//         dots: true,
//         autoplay: true,
//         fade: true,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     dots: false
//                 }
//             }
//         ]
//     });

   
//     // код для активації кнопки меню
//     $('.menu__btn').on('click', function(){
//         $('menu__list').toggleClass('menu__list--active');
//     }) 
//   });

$('.slider__item').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 380,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });