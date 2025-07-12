(function ($) {
    'use strict';

    // :: Preloader
    //$(function () {
    //    $(window).on('load', function () {
    //        $('.preloader').delay(500).fadeOut('slow');
    //        $('body').delay(500).css({ 'overflow': 'visible' });
    //    });
    //})

    // :: Navbar Active Activation
    $(function () {
        $('#navbar').find('a').each(function () {
            var oldUrl = $(this)[0].href.replace('.cshtml', '').replace('Pages/Home', '');
            var newUrl = document.baseURI.replace('.cshtml', '').replace('Pages/Home', '');
            if (newUrl.toLowerCase() == oldUrl.toLowerCase()) {
                $(this).parent().addClass('active');
            }
            else {
                $(this).parent().removeClass('active');
            }
        });
    })

    // :: Navbar Sticky Activation
    $(function () {
        $(window).on('scroll load resize', function (event) {
            var navBarHeight = 37.6;
            var scrollValue = $(window).scrollTop();

            if (scrollValue > navBarHeight) {
                $('#navbar').addClass('fixed-top');
            }
            else {
                $('#navbar').removeClass('fixed-top');
            }
        });
    })

    // :: WOW Initialization
    $(function () {
        new WOW().init();
    })

    // :: Heroslider Initialization
    $(function () {
        var heroSlider = $('.heroslider .heroslider-inner');

        heroSlider.camera({
            loader: false,
            navigation: true,
            autoPlay: true,
            time: 6000,
            playPause: false,
            pagination: false,
            thumbnails: false,
            overlayer: true,
            hover: false,
        });
    })

    // :: Tooltips Initialization
    $(function () {
        $('[data-toggle="tooltip"]').data('trigger', 'hover').tooltip();
    })

 

  

})(jQuery);