/*global $,owl,Placeholdem,smoothScroll,wrap_pop,alert*/
$(document).ready(function () {
    "use strict";

    /* [[[[[[[[[[[[[[[[[[[[[ Content Table ]]]]]]]]]]]]]]]]]]]]]

    -2  Parallax
    -3  Height 100%
    -4  Accordion
    -5  Modern Tabs
    -6  Placeholder Animation Focus
    -7  Scrool To Top Button Function
    -8  Gallery Mixitup & Prettyphoto Show
    -9  Loader Screen
    -10 Sliders
    -11 Mobile Nav
    -12 Desktop Navigation Hover
    -13 Search Container Div
    -14 Add Sticky Header
    -15 Counter Number
    -16 Progress Bars
    -17 Video Caption

    */

    /* -------------------------------------------
     Parallax
     --------------------------------------------- */

    $(".counter").parallax("50%", 0.7);
    $(".blog-head").parallax("70%", 0.5);
    $(".presso-header").parallax("50%", 1);

    /* ---------------------------------------------
     Height 100%
    --------------------------------------------- */

    $(".js-height-full").height($(window).height());
    $(".js-height-parent").each(function () {
        $(this).height($(this).parent().first().height());
    });

    // Function for block height 100%
    function height_line(height_object, height_donor) {
        height_object.height(height_donor.height());
        height_object.css({
            "line-height": height_donor.height() + "px"
        });
    }

    var pageSection = $(".full-item, .counter, .blog-head, .video-caption, .presso-header");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    /* ---------------------------------------------
     Accordion
    --------------------------------------------- */
    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("easeOutExpo");
    $(".accordion > dt > a").first().addClass("active");

    $(".accordion > dt > a").on("click", function () {
        var current = $(this).parent().next("dd");
        $(".accordion > dt > a").removeClass("active");
        $(this).addClass("active");
        allPanels.not(current).slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");
        return false;
    });


    /* ---------------------------------------------
     Modern Tabs
    --------------------------------------------- */
    var modern_tabs;
    $(".modern_tabs_all > li").on("click", function () {
        if (!($(this).parent("li").hasClass("active"))) {
            modern_tabs = $(".modern_tabs_cont > .tab-pane").filter($(this).attr("href")).height();
            $(".modern_tabs_cont").animate({
                height: modern_tabs
            }, function () {
                $(".modern_tabs_cont").css("height", "auto");
            });
        }
    });

    /* ---------------------------------------------
     Placeholder Animation Focus
    --------------------------------------------- */
    Placeholdem(document.querySelectorAll('[placeholder]'));

    /* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-60px");
        }
    });

    $(".toTop").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    /* ---------------------------------------------
     Gallery Mixitup & Prettyphoto Show
    --------------------------------------------- */
    $('.gallery-container,.shop-container').mixItUp();

    // for prettyphoto images gallery
    $("a[rel^='prettyPhoto']").prettyPhoto({
        theme: 'dark_rounded',
        social_tools: false,
        deeplinking: false
    });

    $('.gallery-filters li').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
        return false;
    });

    /* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */
    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('.presso-preloader').fadeOut(1000);
    });

    /* ---------------------------------------------
     Sliders
    --------------------------------------------- */
    $(".fullwidth-slider").owlCarousel({
        transitionStyle: "fadeUp",
        navigation: true,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 3000,
        pagination: true,
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"]
    });

    $(".testimonials-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 7000,
        pagination: false,
        items: 3,
        mouseDrag: true,
        navigationText: ["<span class='testi-left'><i class='fa fa-long-arrow-left'></i></span>", "<span class='testi-right'><i class='fa fa-long-arrow-right'></i></span>"],
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 2],
			[1000, 3],
			[1200, 3],
			[1400, 3],
			[1600, 4]
        ]
    });

    $(".blog-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 5000,
        pagination: false,
        items: 3,
        mouseDrag: true,
        navigationText: ["<span class='blogge-left'><i class='fa fa-long-arrow-left'></i></span>", "<span class='blogge-right'><i class='fa fa-long-arrow-right'></i></span>"],
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 2],
			[1000, 3],
			[1200, 3],
			[1400, 3],
			[1600, 4]
        ]
    });

    $(".team-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 5000,
        pagination: false,
        items: 3,
        stopOnHover: true,
        mouseDrag: true,
        navigationText: ["<span class='teeam-left'><i class='fa fa-long-arrow-left'></i></span>", "<span class='teeam-right'><i class='fa fa-long-arrow-right'></i></span>"],
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 2],
			[1000, 3],
			[1200, 3],
			[1400, 3],
			[1600, 4]
        ]
    });

    // Item carousel
    $(".clients-slider").owlCarousel({
        autoPlay: 2500,
        stopOnHover: true,
        items: 5,
        mouseDrag: false,
        itemsDesktop: [1199, 4],
        itemsTabletSmall: [768, 3],
        itemsMobile: [480, 2],
        pagination: false,
        navigation: false
    });

    // Single-portfolio-slider
    $(".single-portfolio-slider").owlCarousel({
        navigation: true,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 3000,
        pagination: false,
        navigationText: ["<span class='single-left'><i class='fa fa-angle-left'></i></span>", "<span class='single-right'><i class='fa fa-angle-right'></i></span>"]
    });

    // Single-related Post carousel
    $(".post-related-slider").owlCarousel({
        autoPlay: 2500,
        stopOnHover: true,
        items: 3,
        mouseDrag: true,
        itemsDesktop: [1199, 3],
        itemsTabletSmall: [768, 2],
        itemsMobile: [480, 1],
        pagination: false,
        navigation: true,
        navigationText: ["<span class='related-left'><i class='fa fa-angle-left'></i></span>", "<span class='related-right'><i class='fa fa-angle-right'></i></span>"]
    });

    // Product-img-slider
    $(".product-img-slider").owlCarousel({
        navigation: false,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 3000,
        pagination: false,
        navigationText: ["<span class='product-left'><i class='fa fa-angle-left'></i></span>", "<span class='product-right'><i class='fa fa-angle-right'></i></span>"]
    });

    /* ---------------------------------------------
     Mobile Nav
    --------------------------------------------- */
    //hide left slide nav
    $('.open-mobile-nav').on('click', function () {
        $('.mask-inner').css('margin-left', '260px');
        $('.wrap-pop').fadeIn();
        $('.side-mobile-nav').css('left', '0px');
        $('body').css('position', 'fixed');
        return false;
    });

    $('.wrap-pop').on('click', function () {
        $('.mask-inner').css('margin-left', '0px');
        $(this).fadeOut();
        $('.side-mobile-nav').css('left', '-280px');
        $('body').css('position', 'relative');
        return false;
    });

    $('.show-all').on('click', function () {
        $('.side-mobile-nav ul li ul.mobi-drop').slideToggle(250);
        return false;
    });
    /* ---------------------------------------------
     Desktop Navigation Hover
    --------------------------------------------- */
    $('.dropdown').on('mouseenter', function () {
        $(this).find('.dropdown-menu').stop(true, true).slideDown(250);
        $(this).find('.dropdown-toggle').stop(true, true).addClass('active');
    });

    $('.dropdown').on('mouseleave', function () {
        $(this).find('.dropdown-menu').stop(true, true).slideUp(250);
        $(this).find('.dropdown-toggle').stop(true, true).removeClass('active');
    });

    /* ---------------------------------------------
     Search Container Div
    --------------------------------------------- */

    $('.open-search-box').on('click', function () {
        $('.search-container').slideDown();
        return false;
    });
    $('.close-search-box').on('click', function () {
        $('.search-container').slideUp();
        return false;
    });

    /* ---------------------------------------------
     Add Sticky Header
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 43) {
            $('.main-header').addClass('sticky');
        } else {
            $('.main-header').removeClass('sticky');
        }
    });

    /* ---------------------------------------------
     Counter Number
    --------------------------------------------- */

    $(".count-number").appear(function () {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 5000,
            refreshInterval: 60
        });
    });

    /* ---------------------------------------------
     Progress Bars
    --------------------------------------------- */
    $('.progress-bars').appear(function () {
        $.fn.progress = function () {
            var percent = this.data("percent");
            this.css("width", percent + "%");
        };
        $(".bar-one .bar").progress();
        $(".bar-two .bar").progress();
        $(".bar-three .bar").progress();
        $(".bar-four .bar").progress();
    });

    /* ---------------------------------------------
     Video Caption
    --------------------------------------------- */
    $('.video-caption i').on('click', function () {
        $('.video-caption').slideUp();
        return false;
    });

});