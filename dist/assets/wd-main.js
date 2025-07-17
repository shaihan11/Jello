(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        // product timeline animation
        $(window).on('scroll', function() {
            $('.single-timeline').each(function() {
                var elementTop = $(this).offset().top;
                var elementHeight = $(this).outerHeight();
                var windowHeight = $(window).height();
                var scrollTop = $(window).scrollTop();

                // Calculate when the element is 30% from the bottom of the viewport
                if (scrollTop + windowHeight >= elementTop + (elementHeight * 5)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        });


        // product 360 rotation on scroll
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".moving-product-wrapper img", {
            rotation: 360,
            transformOrigin: "center center",
            ease: "none", 
            scrollTrigger: {
                trigger: ".wd-moving-product",
                start: "top 30%", 
                end: "bottom center", 
                scrub: 1.5, 
                // markers: true 
            }
        });


    });
})(jQuery);