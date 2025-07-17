(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        // product timeline animation
        $(window).on('scroll', function() {
            var wrapper = $('.product-timeline-wrapper');
            var wrapperTop = wrapper.offset().top;
            var wrapperHeight = wrapper.outerHeight();
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();

            var distance = scrollTop + windowHeight - wrapperTop;
            var percent = distance / wrapperHeight;

            // Limit to 0–1
            percent = Math.max(0, Math.min(1, percent));

            // Set .timeline-line height
            wrapper.find('.timeline-line').css({
                height: (percent * 100) + '%'
            });

            // Add active class to each .single-timeline
            $('.single-timeline').each(function() {
                var elTop = $(this).offset().top;
                var elHeight = $(this).outerHeight();
                var distance = scrollTop + windowHeight - elTop;
                var elPercent = distance / elHeight;

                if (elPercent > 5) {
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