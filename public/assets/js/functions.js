$(document).ready(function () {
    "use strict";

    $(function () {
        var myLazyLoad = new LazyLoad({
            elements_selector: ".lazy"
        });
    });

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
        smooth: 2,
        effects: true,
    });

    //new WOW().init();
    new WOW({
        mobile: false
    }).init();
    // wow end

    //var currentIP;
    var key = '5XpThOAEkfgOvEJ';
    var currentIP = $("meta[name=ip2loc]").attr('content');
    var pgurl = $("meta[name=page_url]").attr('content');
    $.ajax({
        method: 'get',
        url: '//pro.ip-api.com/json/' + currentIP,
        data: {
            key: key
        },
        success: function (data) {
            if (data) {
                $('input[name=ip2loc_ip]').val(data.query);
                $('input[name=ip2loc_isp]').val(data.isp);
                $('input[name=ip2loc_org]').val(data.org);
                $('input[name=ip2loc_country]').val(data.country);
                $('input[name=ip2loc_region]').val(data.regionName);
                $('input[name=ip2loc_city]').val(data.city);
                //$('input[name=pageurl]').val(pageurl);
            }
        }
    });
    ////// fancybox
    $('[data-fancybox="swf-file"]').fancybox({
        iframe: {
            css: {
                width: '336px',
                height: '280px'
            }
        }
    });
    $('[data-fancybox="video-file"]').fancybox({
        iframe: {
            css: {
                width: '580px',
                height: '340px'
            }
        }
    });
    ////// fancybox end

    ////// footer year
    $(function () {
        "use strict";
        var theYear = new Date().getFullYear();
        $('#year').html(theYear);
    });


    // Initialize thumbnail slider first
    $('.thumb-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        asNavFor: '.slider-content'
    });

    // Initialize main slider
    $('.slider-content').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        vertical: true,
        autoplay: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: '.thumb-slider'
    });

    // Ensure the main slider starts in center mode
    $('.slider-content').on('init', function (event, slick) {
        setTimeout(function () {
            slick.slickGoTo(Math.floor(slick.slideCount / 4)); // Go to the middle slide
        }, 500); // Adjust the timeout duration if needed
    });

    $('.slider-content').slick('refresh');
    $('.thumb-slider').slick('refresh');


    // Tabbing *****************************

    $('[data-targetit]').on('click', function () {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        var target = $(this).data('targetit');
        $('.' + target).siblings('[class*="my-tabs"]').removeClass('current');
        $('.' + target).addClass('current');
        $('.slick-slider').slick('setPosition', 0);
    });

    // faq

    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');
        for (var i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }
        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));

    // Initialize thumbnail slider first
    $('.slider-rht').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        asNavFor: '.slider-lft'
    });

    // Initialize main slider
    $('.slider-lft').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        vertical: true,
        autoplay: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: '.slider-rht'
    });

    // Ensure the main slider starts in center mode
    $('.slider-lft').on('init', function (event, slick) {
        setTimeout(function () {
            slick.slickGoTo(Math.floor(slick.slideCount / 4)); // Go to the middle slide
        }, 500); // Adjust the timeout duration if needed
    });

    $('.slider-lft').slick('refresh');
    $('.slider-rht').slick('refresh');
    // slider end

    // Initialize thumbnail slider first
    $('.process-slider-rht').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        asNavFor: '.process-slider-lft'
    });

    // Initialize main slider
    $('.process-slider-lft').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        vertical: true,
        autoplay: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: '.process-slider-rht'
    });

    // Ensure the main slider starts in center mode
    $('.process-slider-lft').on('init', function (event, slick) {
        setTimeout(function () {
            slick.slickGoTo(Math.floor(slick.slideCount / 4)); // Go to the middle slide
        }, 500); // Adjust the timeout duration if needed
    });

    $('.process-slider-lft').slick('refresh');
    $('.process-slider-rht').slick('refresh');


    $('.menu-btn').click(function () {
        $(".menu-wapper").toggleClass("open");
        $("body").addClass("menu-open");
    });

    $('.close-menu').click(function () {
        $(".menu-wapper").removeClass("open");
        $("body").removeClass("menu-open");
    });

    $('.review-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });
    // Initialize thumbnail slider first
    $('.services-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: 30,
        arrows: false,
        focusOnSelect: false,
        autoplay: true,
        responsive: [{
                breakpoint: 900,
                settings: {
                    unslick: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    ////// mob slider
    $(".mob-slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 10000,
                settings: "unslick"
            },
            {
                breakpoint: 900,
                settings: {
                    unslick: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

}); // document ready end