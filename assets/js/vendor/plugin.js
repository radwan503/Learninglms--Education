// Avoid `console` errors in browsers that lack a console.
(function() {
   var method;
   var noop = function () {};
   var methods = [
       'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
       'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
       'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
       'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
   ];
   var length = methods.length;
   var console = (window.console = window.console || {});

   while (length--) {
       method = methods[length];

       // Only stub undefined methods.
       if (!console[method]) {
           console[method] = noop;
       }
   }
}());
   
   
   var swiper = new Swiper(".swiper-container", {
     autoplay: {
       delay: 5000,
       disableOnInteraction: false
     },
     speed: 500,
     loop: false,
     pagination: {
       el: ".swiper-pagination",
       type: "fraction"
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev"
     },
     on: {
       init: function () {
         $(".swiper-progress-bar").removeClass("animate");
         $(".swiper-progress-bar").removeClass("active");
         $(".swiper-progress-bar").eq(0).addClass("animate");
         $(".swiper-progress-bar").eq(0).addClass("active");
       },
       slideChangeTransitionStart: function () {
         $(".swiper-progress-bar").removeClass("animate");
         $(".swiper-progress-bar").removeClass("active");
         $(".swiper-progress-bar").eq(0).addClass("active");
       },
       slideChangeTransitionEnd: function () {
         $(".swiper-progress-bar").eq(0).addClass("animate");
       }
     }
   });
 
