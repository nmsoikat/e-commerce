(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        /*
        |--------------------------------------------------------------------------
            STAR RATING
        |--------------------------------------------------------------------------
        */
        if ($('.star').length > 0) {
            $('.star').each(function () {
                var $star = $(this);
                $star.raty({
                    starOff: 'assets/img/star-off.png',
                    starOn: 'assets/img/star-on.png',
                    space: false,
                    score: function () {
                        return $(this).attr('data-score');
                    }
                });

            });
        }


        /*
        |--------------------------------------------------------------------------
            HOVER DROPDOWN MENU
        |--------------------------------------------------------------------------
        */

        $('ul.nav li.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });

        /*
        |--------------------------------------------------------------------------
            ACTIVE OWL CAROUSEL
        |--------------------------------------------------------------------------
        */
        $('.product-slider').owlCarousel({
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            // animateOut: 'zoomOut',
            // animateIn: 'zoomIn',
            // flipInX
            items: 1,
            margin: 0,
            stagePadding: 0,
            smartSpeed: 450,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true

        });
        $('.latest-review-slider').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            stagePadding: 0,
            smartSpeed: 450,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });
        $('.recent-slider').owlCarousel({
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 4,
            margin: 0,
            stagePadding: 0,
            smartSpeed: 450,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });
        // product detail page
        $('.product-images-view-slide').owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            center: true,
            margin: 10,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash'

        });
        $('.product-slect-images-view-slide').owlCarousel({
            items: 4,
            nav: false,
            dots: false,
            margin: 5,
            stagePadding: 0,
            smartSpeed: 450
        });
        // category page slider
        $('.testimonial-slider').owlCarousel({
            items: 1,
            nav: false,
            margin: 0,
            stagePadding: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });

        /*===================================================================================*/
        /* PRICE SLIDER
        /*===================================================================================*/
        jQuery(function () {

            // Price Slider
            if (jQuery('.price-slider').length > 0) {
                jQuery('.price-slider').slider({
                    min: 100,
                    max: 700,
                    step: 10,
                    value: [200, 500],
                    handle: "square"

                });

            }

        });

        /*
        |--------------------------------------------------------------------------
            ACTIVE STICKY HEADER
        |--------------------------------------------------------------------------
        */
        var navh = $('.header-nav');
        var navbarnav = $('.navbar-nav');
        $(window).scroll(function () {
            var scrollp = $(window).scrollTop();
            // console.log(scrollp)
            if (scrollp >= 100) {
                navh.addClass('my-sticky-nav');
                navbarnav.addClass('navbar-right');
                navbarnav.removeClass('navbar-left')
            } else {
                navh.removeClass('my-sticky-nav')
                navbarnav.addClass('navbar-left');
                navbarnav.removeClass('navbar-right')
            }
        });


        /*
        |--------------------------------------------------------------------------
            ACTIVE SCROLL TO UP 
        |--------------------------------------------------------------------------
        */
        //    animate to top
        var btn = $('.up');
        btn.on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 500); //500 ms dhore acroll(animate ) hoye top a jabe
        });

        // detect scroll and btn show and hide
        $(window).on('scroll', function () { // when window scroll hobe
            // console.log('scrolled..');
            var a = $(this), //ai windo bujate this ar this mane akhon a
                height = a.height(),
                top = a.scrollTop();

            if (top > height) {
                if (!btn.is(':visible')) {
                    btn.show();
                }
            } else {
                btn.hide();
            }

        });

        /*
        |--------------------------------------------------------------------------
            ACTIVE ACCORDEON
        |--------------------------------------------------------------------------
        */
        $('.accordeon-title').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        });


    });


    jQuery(window).load(function () {


    });


}(jQuery));	