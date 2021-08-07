
// courses random color

/*
var coursesColor = ['#fff','green'];
var couresBox = document.querySelectorAll('.individual-courses');

for(i= 0; i<couresBox.length;i++){
   couresBox[i].style.backgroundColor  = coursesColor[Math.floor(Math.random() * coursesColor.length)];
}*/

// counter testmonial

$('.counter-num').each(function () {
   $(this).prop('Counter',0).animate({
       Counter: $(this).text()
   }, {
       duration: 4000,
       easing: 'swing',
       step: function (now) {
           $(this).text(Math.ceil(now));
       }
   });
});
