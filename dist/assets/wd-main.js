(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {



            $(window).on('load scroll', function() {
  $('.single-expect-timeline').each(function() {
    var timeline = $(this);
    var timelineTop = timeline.offset().top;
    var timelineHeight = timeline.outerHeight();
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    var viewportBottom = scrollTop + windowHeight;

    // Timeline date bottom position
    var timelineDate = timeline.find('.timeline-date-wrapper');
    var dateTop = timelineDate.offset().top;
    var dateHeight = timelineDate.outerHeight();
    var dateBottom = dateTop + dateHeight;

    // Trigger point (e.g., 30% or 70% from top)
    var triggerPoint = scrollTop + windowHeight * 0.7;

    // Fill only after date bottom crosses trigger point
    var diff = triggerPoint - dateBottom;

    // Fillable height: timeline total height minus distance from top to timeline-date bottom
    var fillableHeight = timelineHeight - dateHeight;

    var percent = 0;

    if (diff >= 0) {
      percent = (diff / fillableHeight) * 100;
      if (percent > 100) percent = 100;
    } else {
      percent = 0;
    }

    timeline.find('.line-fill').css('height', percent + '%');

    // timeline-date active toggle
    if (dateBottom < triggerPoint) {
      timeline.find('.timeline-date').addClass('active');
    } else {
      timeline.find('.timeline-date').removeClass('active');
    }
  });
});



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