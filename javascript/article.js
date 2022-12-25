// class articlePage{
//     constructor(){
//         this.init();
//     }
//     slider = () => {
//         // console.log("called");
//         document.addEventListener( 'DOMContentLoaded', function () {
//             let elms = document.getElementsByClassName('article-recomm-slider');
//             for ( let i = 0, len = elms.length; i < len; i++ ) {
//                 new Flickity(elms[ i ], {
//                     pageDots: false,
//                     initialIndex: 1,
//                     wrapAround: true,
//                     cellAlign: 'left'
//                 });
//             }
//         }); 
//     }
//     init = () => {
//         this.slider();
//     }
// }

// if(document.querySelector('body').classList.contains('template-article')){
//     new articlePage;
// }