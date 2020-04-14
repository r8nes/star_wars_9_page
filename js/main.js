$(document).ready(function () {

   $('.owl-carousel').owlCarousel({
      autoWidth:true,
      autoplay: true,
autoplayTimeout:5000,
autoplayHoverPause:false,
stagePadding: -20,
      center:true,
      loop: true,
      margin: 10,
      responsive: {
         0: {
            items: 1
         },
         
         700: {
            items: 2
         },
         1100: {
           items: 3 
         },
         1300: {
            items: 4
         }
      }
   })

  
});