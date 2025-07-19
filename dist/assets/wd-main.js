(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

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

                    var timelineDate = timeline.find('.timeline-date-wrapper');
                    var timelineDateInner = timeline.find('.timeline-date');
                    var dateHeight = timelineDate.outerHeight();

                    var fillableHeight = timelineHeight;

                    // Trigger area
                    var triggerStart = timelineTop - windowHeight * 0.7;  // Start point
                    var triggerEnd = timelineTop + fillableHeight - windowHeight * 0.7; // End point

                    var scrollPosition = scrollTop;

                    if (scrollPosition >= triggerStart && scrollPosition <= triggerEnd) {
                        var progress = (scrollPosition - triggerStart) / (triggerEnd - triggerStart);

                        // Date-fill: first half
                        var dateFillProgress = Math.min(progress * 2, 1);
                        timeline.find('.timeline-date .date-fill').css('height', (dateFillProgress * 100) + '%');

                        // Add/remove active when date-fill 100%
                        if (dateFillProgress >= 1) {
                            timelineDateInner.addClass('active');
                        } else {
                            timelineDateInner.removeClass('active');
                        }

                        // Line-fill: second half
                        var lineFillProgress = Math.max((progress - 0.5) * 2, 0);
                        timeline.find('.line-fill').css('height', (lineFillProgress * 100) + '%');

                    } else if (scrollPosition < triggerStart) {
                        // Before start: reset
                        timeline.find('.timeline-date .date-fill').css('height', '0%');
                        timeline.find('.line-fill').css('height', '0%');
                        timelineDateInner.removeClass('active');
                    } else if (scrollPosition > triggerEnd) {
                        // After end: full
                        timeline.find('.timeline-date .date-fill').css('height', '100%');
                        timeline.find('.line-fill').css('height', '100%');
                        timelineDateInner.addClass('active');
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
                gsap.registerPlugin(ScrollTrigger);

                // Ensure ScrollTrigger refreshes on resize
                ScrollTrigger.refresh();

                // Get the window width to adjust behavior for mobile
                const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

                gsap.to(".moving-product-wrapper img", {
                    rotation: 360,
                    transformOrigin: "center center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".moving-product-wrapper",
                        start: isMobile ? "bottom bottom" : "top top",
                        end: isMobile ? "top top" : "+=50%",
                        scrub: 0.5,
                        // markers: true,
                        // invalidateOnRefresh: true
                    }
                });
            }
        });




    });
})(jQuery);