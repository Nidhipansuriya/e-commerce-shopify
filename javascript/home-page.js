// class HomePage{
  
//     constructor(){
//         this.init();
//     }
//     slider = () => {
//         // hero slider
//         document.addEventListener( 'DOMContentLoaded', function () {
//               $('.hero-section').slick({
//                 dots: false,
//                 infinite: true,
//                 speed: 500,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 fade: true,
//                 cssEase: 'linear',
//                 arrows: false
//               });
//               // home page product slider
//               $('.product_slider').slick({
//                 centerMode: false,
//                 appendArrows: '.product_slider_arrow',
//                 slidesToShow: 5,
//                 responsive: [
//                   {
//                     breakpoint: 1200,
//                     settings: {
//                       slidesToShow: 4
//                     }
//                   },
//                   {
//                     breakpoint: 992,
//                     settings: {
//                       slidesToShow: 3
//                     }
//                   },
//                   {
//                     breakpoint: 768,
//                     settings: {
//                       slidesToShow: 3
//                     }
//                   },
//                   {
//                     breakpoint: 631,
//                     settings: {
//                       slidesToShow: 2
//                     }
//                   }
//                 ]
//               });

//         });

//     }
//     init = () => {
//         this.slider();
//     }
//     // menu Button
// }

if(document.querySelector('body').classList.contains('template-index')){
    new HomePage;
}

// blankBgOpen = () => {
//   document.querySelector('body').classList.add('overflow-hidden');
// };
// blankBgClose = () => {
//   document.querySelector('body').classList.remove('overflow-hidden');
// };


var side_bar = document.querySelector('.side_bar');
var openBtn = document.querySelector('#open_btn');
var closeBtn = document.querySelector('#close_btn');

openBtn.addEventListener('click', function () {
  side_bar.style.left = '0px';
  document.querySelector('body').classList.add('overflow-hidden');
});
closeBtn.addEventListener('click', function () {
  side_bar.style.left = '-100%';
  document.querySelector('body').classList.remove('overflow-hidden');
});