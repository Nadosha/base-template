Router.route('/', {
    name: 'home',
    template: 'landing',
    layoutTemplate: 'landing',
    onBeforeAction: function() {
        this.next();
    }
});


