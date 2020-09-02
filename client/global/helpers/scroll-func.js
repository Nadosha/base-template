/**
 * Created by andrey on 20.12.2018.
 */
Template.registerHelper('scrollActivation', function() {
    function isElementInViewport(elem) {
        let $elem = $(elem);

        // Get the scroll position of the page.
        let viewportTop = $('html').scrollTop();
        let viewportBottom = viewportTop + $(window).height();

        // Get the position of the element on the page.
        let elemTop = Math.round( $elem.offset().top );
        let elemBottom = elemTop + $elem.height() + 200;

        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }

    // Check if it's time to start the animation.
    function checkAnimation() {
        let $elem = $('.content-section');

        $elem.each(function(){
            let $singleElement = $(this);
            // If the animation has already been started
            if($singleElement.hasClass('achivments-section')) {

                //Counter from 0 till data
                $('.counter').each(function() {
                    let $this = $(this),
                        countTo = $this.attr('data-count');

                    $({ countNum: $this.text()}).animate({
                            countNum: countTo
                        },{
                            duration: 1200,
                            easing:'linear',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }

                        });
                });
            }

            if ($singleElement.hasClass('start')) return;


            if (isElementInViewport($singleElement)) {
                // Start the animation
                $singleElement.removeClass('hidden');
                $singleElement.addClass('start');
            }

        });
    }

    // Capture scroll events
    $(window).scroll(function(){
        //checkAnimation();
    });
});