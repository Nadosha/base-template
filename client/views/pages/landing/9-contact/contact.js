/**
 * Created by andrey on 13.11.2018.
 */
Template.contact.onRendered(function() {
    // =========================== Google MAPS
    GoogleMaps.ready('exampleMap', function(map) {});

    $('[name=phone]').inputmask("+38 (999) 999-99-99");

    //Form validation and sending
    $('#contact-form').validate({
        rules: {
            firstName: {
                required: true
            },
            secondName: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            message: {
                required: true
            }
        },
        errorElement: 'p',
        errorClass: "validation-error-label",
        highlight: function(element, errorClass, validClass) {
            $(element).parent('.input-group').removeClass('has-success');
            $(element).parent('.input-group').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parent('.input-group').addClass('has-success');
            $(element).parent('.input-group').removeClass('has-error');
        },
        submitHandler: function(event) {
            let formSet = $(event).serializeArray();

            let contactForm = {};
            _.each(formSet, (i) => {
                contactForm[i.name] = i.value || '';
            });

            Meteor.call('sendForm', contactForm, function(err, res) {
                sAlert.info('Спасибо за ваше обращение. Мы с вами свяжемся в ближайшее время')
            });
        }
    });
});