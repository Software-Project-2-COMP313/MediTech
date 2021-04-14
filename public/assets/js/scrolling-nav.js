(function ($) {
    "use strict";
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if ($(window).width() > 767) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 70)
                    }, 1500, "easeInOutExpo");
                    return false;
                }
            }
        }
        else {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 50)
                    }, 1500, "easeInOutExpo");
                    return false;
                }
            }
        }
    });
    if ($(window).width() > 767) {
 $( document ).ready(function() {
      var hash = window.location.hash;
      
        $('html, body').animate({
          scrollTop: ($(hash).offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      
   
});    
           }
       else {
            $( document ).ready(function() {
      var hash = window.location.hash;
      
        $('html, body').animate({
          scrollTop: ($(hash).offset().top - 50)
        }, 1000, "easeInOutExpo");
        return false;
      
   
}); 
            }
    
    

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 70
  });

})(jQuery); // End of use strict
