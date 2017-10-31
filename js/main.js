    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 34.860008,
                lng: -111.793766,
            },
            zoom: 7
        });
    }






    $(function() {
        $('.humburger__list--not-js').removeClass('humburger__list--not-js');


        $('.humburger__button ').click(function(e) {

            var element = $(event.target);
            var menu = $('.humburger__list');
            if (element.hasClass('humburger__button--open')) {
                menu.addClass('humburger__list--active');


            } else {
                menu.removeClass('humburger__list--active');
            }
        })
        var image = function() {
            $(".intro").removeClass('intro--no-webp');
        }

        Modernizr.on('webp', function(result) {

            if (result) {

                image();

            }
        });


        $('.js-form-open').click(function(e) {
            var button = $(event.target);

            var form = $('.search-hotels__form');


            if (!form.hasClass('search-hotels__form--open')) {
                form.addClass('search-hotels__form--open');
                button.css("background-color", "#766357");

            } else {
                form.removeClass('search-hotels__form--open');
                button.css("background-color", "#81b3d2");
            }

        })






    })