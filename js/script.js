$(document).ready( function() {
    $(".decorative__brace").addClass("about-me__decorative--brace");
    $(".decorative__hash").addClass("about-me__decorative--hash");
    $(".decorative__tag-1").addClass("about-me__decorative--tag-1");
    $(".decorative__tag-2").addClass("about-me__decorative--tag-2");
    $(".decorative__div-1").addClass("about-me__decorative--div-1");
    $(".decorative__div-2").addClass("about-me__decorative--div-2");

    $("a[href^='#']").on("click", function(event) {
        event.preventDefault();
        
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        
        $("html, body").animate({scrollTop: top}, 1500);
      });

    $("#nav-btn").click(function () {
        if($(".page-header__toggle").hasClass("page-header__toggle--closed")) {
            $(".page-header__nav").css("display", "block");
            $(".page-header__toggle").removeClass("page-header__toggle--closed").addClass("page-header__toggle--opened");
        } else {
            $(".page-header__nav").css("display", "none");
            $(".page-header__toggle").removeClass("page-header__toggle--opened").addClass("page-header__toggle--closed");
        };

        if($(".page-header").hasClass("page-header--margin")) {
            $(".page-header").removeClass("page-header--margin");
        } else {
            $(".page-header").addClass("page-header--margin");
        };
    });
    
    $(".main-nav__link--header").click(function () {
        if($(".page-header__toggle").hasClass("page-header__toggle--opened")) {
            $(".page-header__nav").css("display", "none");
            $(".page-header__toggle").removeClass("page-header__toggle--opened").addClass("page-header__toggle--closed");
            $(".page-header").removeClass("page-header--margin");
        }
    });

    $(".button--modal-contact").click(function () {
        $(".modal--contact").show();
        $(".modal__overlay").show();
    });

    $("#contact-close-btn").click(function () {
        $(".modal--contact").hide();
        $(".modal__overlay").hide();
    });

    $(".modal__overlay").click( function (event){
        $(this).hide();
        $(".modal--contact").hide();
        $(".modal--call-back").hide();
    });

    $(".button--modal-call").click(function () {
        $(".modal--call-back").show();
        $(".modal__overlay").show();
    });

    $("#call-back-close-btn").click(function () {
        $(".modal--call-back").hide();
        $(".modal__overlay").hide();
    });

    if ($(window).width() > 1369) {
        $(".slider__list").append("<div class='slider__item slider__item--desktop'><a class='slider__link slider__link--img slider__link--even' href='#'><img class='slider__img' src='img/psychologist-desktop.jpg' alt='Скриншот сайта психолога Веры Антоновой'></a><a class='slider__link slider__link--description' href='#'>Сайт психолога Веры Антоновой</a></div><div class='slider__item slider__item--desktop'><a class='slider__link slider__link--img' href='#'><img class='slider__img' src='img/child-desktop.jpg' alt='Скриншот сайта магазина детской одежды'></a><a class='slider__link slider__link--description' href='#'>Сайт магазина детской одежды</a></div><div class='slider__item slider__item--desktop'><a class='slider__link slider__link--img slider__link--even' href='#'><img class='slider__img' src='img/fish-desktop.jpg' alt='Скриншот сайта магазина Рыболов'></a><a class='slider__link slider__link--description' href='#'>Сайт магазина &laquo;Рыболов&raquo;</a></div>");
    } else {
        $(".slider__item--desktop").remove();
    };

    $(".slider__list").slick({
        infinite: true,
        arrows: true,
        prevArrow: $(".slider__nav--left"),
        nextArrow: $(".slider__nav--right"),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1370,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    dotsClass: "nav-circle__list",
                    appendDots: $(".nav-circle")
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    dotsClass: "nav-circle__list",
                    appendDots: $(".nav-circle")
                }
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    dots: true,
                    dotsClass: "nav-circle__list",
                    appendDots: $(".nav-circle")
                }
            }
        ]
    });

});
