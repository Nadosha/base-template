/**
 * Created by andrey on 20.12.2018.
 */

Template.landing.onRendered(function() {
    "use strict";
    new WOW().init();
    let viewportTop = 0;

    $(window).scroll(function(){
        viewportTop = $('html').scrollTop();
        if (viewportTop >= 700) {
            $('#to-top').removeClass('hidden-to-top');
        }  else {
            $('#to-top').addClass('hidden-to-top');
        }
    });
})
