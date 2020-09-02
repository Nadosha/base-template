/**
 * Created by andrey on 13.11.2018.
 */
Template.navbar.onRendered(function() {
    "use strict";
    $.stellar('refresh');

    let slideHeight = $(window).height();

    $('.parallax-blog').css('height', slideHeight);
    $('.parallax-blog-wrapper').css('height', slideHeight);


    $.stellar({
        responsive: false,horizontalScrolling: false,positionProperty: 'transform'
    });
    $(window).resize(function () {
        $('.parallax-blog').css('height', slideHeight);
        $('.parallax-blog-wrapper').css('height', slideHeight);

    });

    // Navigation Scroll
    $(window).scroll(function(event) {

        let scrollDistance = $(window).scrollTop();
        // Assign active class to nav links while scolling
        $('.section-block').each(function (i) {
            if ($(this).position().top - 70 <= scrollDistance) {
                $('#navbar li.active').removeClass('active');
                $('#navbar li').eq(i).addClass('active');
            }
        });

        if ($(this).scrollTop() > 200) {
            $('#menu').fadeIn(500);
        } else {
            $('#menu').fadeOut(500);
        }
    });

    $('.navbar-collapse ul li a, .startscroll').on('click', function() {
        if(this.hash) {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 80}, 1000, function (i) {

                $(".navbar-collapse").collapse('hide');
                return false;
            });
        }
        return false;
    });
})