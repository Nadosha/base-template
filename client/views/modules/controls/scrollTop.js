import {Template} from 'meteor/templating';

Template.scrollTop.events({
    'click #to-top': function(event) {
        event.preventDefault();

        $('html').animate({
            scrollTop: 0
        }, 900);
        return false;
    }
});