(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        // product timeline animation
        $(window).on('scroll', function() {
            $('.single-timeline').each(function() {
                var $this = $(this);
                var elementTop = $this.offset().top;
                var elementHeight = $this.outerHeight();
                var windowHeight = $(window).height();
                var scrollTop = $(window).scrollTop();

                if (scrollTop + windowHeight >= elementTop + (elementHeight * 3)) {
                    if (!$this.hasClass('active')) {
                        $this.addClass('active');
                        $this.find('.timeline-line').stop().animate({
                            height: '100%'
                        }, 600); // adjust duration as needed
                    }
                } else {
                    if ($this.hasClass('active')) {
                        $this.removeClass('active');
                        $this.find('.timeline-line').stop().animate({
                            height: '0%'
                        }, 300);
                    }
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