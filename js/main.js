(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

//scrolling buttons

$(document).ready(function() {
    // Button click event for scrolling to About section
    $('#scroll-about').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var targetSection = $($(this).attr('href')); // Get the target section
        if (targetSection.length) {
            $('html, body').animate({scrollTop: targetSection.offset().top}, 1500, 'easeInOutExpo');
        }
    });
});

$(document).ready(function() {
    // Button click event for scrolling to About section
    $('#scroll-number').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var targetSection = $($(this).attr('href')); // Get the target section
        if (targetSection.length) {
            $('html, body').animate({scrollTop: targetSection.offset().top}, 1500, 'easeInOutExpo');
        }
    });
});

$(document).ready(function() {
    // Button click event for scrolling to About section
    $('#scroll-testimonials').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var targetSection = $($(this).attr('href')); // Get the target section
        if (targetSection.length) {
            $('html, body').animate({scrollTop: targetSection.offset().top}, 1500, 'easeInOutExpo');
        }
    });
});

$(document).ready(function() {
    // Button click event for scrolling to About section
    $('#scroll-appointment').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var targetSection = $($(this).attr('href')); // Get the target section
        if (targetSection.length) {
            $('html, body').animate({scrollTop: targetSection.offset().top}, 1500, 'easeInOutExpo');
        }
    });
});

$(document).ready(function() {
    // Button click event for scrolling to About section
    $('#scroll-consultation-1').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var targetSection = $($(this).attr('href')); // Get the target section
        if (targetSection.length) {
            $('html, body').animate({scrollTop: targetSection.offset().top}, 1500, 'easeInOutExpo');
        }
    });
});

$(document).ready(function() {
    // Button click event for scrolling to About section
    $('#scroll-consultation').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var targetSection = $($(this).attr('href')); // Get the target section
        if (targetSection.length) {
            $('html, body').animate({scrollTop: targetSection.offset().top}, 1500, 'easeInOutExpo');
        }
    });
});

$(document).ready(function() {
    // Button click event for scrolling to About section
    $('#scroll-map').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var targetSection = $($(this).attr('href')); // Get the target section
        if (targetSection.length) {
            $('html, body').animate({scrollTop: targetSection.offset().top}, 1500, 'easeInOutExpo');
        }
    });
});

$(document).ready(function() {
    // Button click event for scrolling to About section
    $('#scroll-team').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var targetSection = $($(this).attr('href')); // Get the target section
        if (targetSection.length) {
            $('html, body').animate({scrollTop: targetSection.offset().top}, 1500, 'easeInOutExpo');
        }
    });
});

