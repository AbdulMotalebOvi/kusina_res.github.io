$(function() {
    
    "use strict";
    
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    
    
    

    
    
    
    
    
    $('.Video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    $('.counter_up h2').counterUp({
		delay: 30,
		time: 2000
	});
    
    
    
    
});

flatpickr("input[type= datetime-local]", {});

$(".carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,	
    autoplayHoverPause: true,
    smartSpeed: 1000,
    dots: true

});

  //===== Mobile Menu 
    
  $(".navbar-toggler").on('click', function() {
    $(this).toggleClass('active');
});

$(".navbar-nav a").on('click', function() {
    $(".navbar-toggler").removeClass('active');
});


//===== close navbar-collapse when a  clicked

$(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
});


//===== Sticky

$(window).on('scroll',function(event) {    
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
        $(".header-area").removeClass("sticky");
    }else{
        $(".header-area").addClass("sticky");
    }
});


function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function(e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        arrows: false,
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();

$(document).ready(function(){
    
  
	AOS.init();
    
});