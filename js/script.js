$().ready(function () {
    $('.slick-carousel').slick({
        arrows: false,
        centerPadding: "0",
        dots: false,
        // slidesToShow: ,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        fade: true,
        centerMode: true,
        adaptiveHeight: true,
        focusOnSelect: true,
    });
});

$(document).ready(function () {
    $(".mobile-nav i").click(function () {
        $(".site-nav-menu").toggleClass("mobile-menu");
    });
});

$('.productcard').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
});


$('.brands').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object

});