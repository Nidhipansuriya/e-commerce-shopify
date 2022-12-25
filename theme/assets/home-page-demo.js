// (function() {
//     var touchingCarousel = false,
//       touchStartCoords;

//     document.body.addEventListener('touchstart', function(e) {
//       if (e.target.closest('.flickity-slider')) {
//         touchingCarousel = true;
//       } else {
//         touchingCarousel = false;
//         return;
//       }

//       touchStartCoords = {
//         x: e.touches[0].pageX,
//         y: e.touches[0].pageY
//       }
//     });

//     document.body.addEventListener('touchmove', function(e) {
//       if (!(touchingCarousel && e.cancelable)) {
//         return;
//       }

//       var moveVector = {
//         x: e.touches[0].pageX - touchStartCoords.x,
//         y: e.touches[0].pageY - touchStartCoords.y
//       };

//       if (Math.abs(moveVector.x) > 7)
//         e.preventDefault()

//     }, {passive: false});
//   })();