(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

                        gsap.registerPlugin(ScrollTrigger);






        $(window).on('load scroll', function() {
            timelineAnimation1();
            timelineAnimation2();
        });


        // expect timeline animation
        function timelineAnimation1() {
            if ($('.single-expect-timeline').length) {
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
            }
        }

        // product timeline animation
        function timelineAnimation2() {
            if ($('.single-timeline').length) {
                $('.single-timeline').each(function () {
                    var $this = $(this);
                    var elementTop = $this.offset().top;
                    var elementHeight = $this.outerHeight();
                    var windowHeight = $(window).height();
                    var scrollTop = $(window).scrollTop();

                    var elementMiddle = elementTop + elementHeight / 2;
                    var viewportMiddle = scrollTop + windowHeight / 2;

                    if (viewportMiddle >= elementTop) {
                    if (!$this.hasClass('active')) {
                        $this.addClass('active');
                    }

                    // Progress calculation (0 to 1)
                    var distance = viewportMiddle - elementTop;
                    var progress = distance / (elementHeight * 1); // 1x height = adjust for sensitivity
                    progress = Math.max(0, Math.min(1, progress));

                    // Step-wise logic
                    var heightPercent = 0;

                    if (progress < 0.3) {
                        heightPercent = progress * (10 / 0.3); // 0-30% scroll → 0-10%
                    } else if (progress < 0.7) {
                        heightPercent = 10 + ((progress - 0.3) * (40 / 0.4)); // 30%-70% scroll → 10%-50%
                    } else {
                        heightPercent = 50 + ((progress - 0.7) * (50 / 0.3)); // 70%-100% scroll → 50%-100%
                    }

                    // Clamp
                    heightPercent = Math.min(100, heightPercent);

                    $this.find('.timeline-line').css('height', heightPercent + '%');

                    } else {
                    $this.removeClass('active');
                    $this.find('.timeline-line').css('height', '0%');
                    }
                });
            }
        }




        // product 360 rotation on scroll
        $(window).on('load resize', function () {

            if ($('.wd-moving-product').length) {

                gsap.to(".moving-product-wrapper", {
                    rotation: 360,
                    transformOrigin: "center center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".moving-product-wrapper",
                        start: "bottom bottom", 
                        end: "top top",
                        scrub: 0.5,
                        markers: true
                    }
                });
            }

        });



    });
})(jQuery);