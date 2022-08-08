$().ready(function () {
    $('.slick-carousel').slick({
        arrows: false,
        centerPadding: "0",
        dots: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        fade: true,
        centerMode: true,
        adaptiveHeight: true,
        focusOnSelect: true,
        prevArrow: '<i class="fa-solid fa-angle-left next"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right previous"></i>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<i class="fa-solid fa-angle-left next"></i>',
                    nextArrow: '<i class="fa-solid fa-angle-right previous"></i>',
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<i class="fa-solid fa-angle-left next"></i>',
                    nextArrow: '<i class="fa-solid fa-angle-right previous"></i>',
                }
            }
        ]
    });
});

$(document).ready(function () {
    $(".mobile-nav i").click(function () {
        $(".site-nav-menu").toggleClass("mobile-menu");
    });
});


$('.usp').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // centerPadding: "0",
    // centerMode: true,
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 2000,
            settings: "unslick"
        },
        {
            breakpoint: 1440,
            settings: "unslick"
        },
        {
            breakpoint: 1024,
            settings: "unslick"
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



$('.productcard').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 2000,
            settings: "unslick"
        },
        {
            breakpoint: 1440,
            settings: "unslick"
        },
        {
            breakpoint: 1024,
            settings: "unslick"
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                prevArrow: '<i class="fa-solid fa-angle-left brandnext"></i>',
                nextArrow: '<i class="fa-solid fa-angle-right brandprevious"></i>',
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<i class="fa-solid fa-angle-left brandnext"></i>',
                nextArrow: '<i class="fa-solid fa-angle-right brandprevious"></i>',
            }
        }
    ]
});


$('.brands').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 2000,
            settings: "unslick"
        },
        {
            breakpoint: 1440,
            settings: "unslick"
        },
        // {
        //     breakpoint: 1280,
        //     settings: {
        //         slidesToShow: 4,
        //         slidesToScroll: 4,
        //         infinite: true,
        //         dots: false,
        //         arrows: false,
        //     }
        // },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                prevArrow: '<i class="fa-solid fa-angle-left brandnext"></i>',
                nextArrow: '<i class="fa-solid fa-angle-right brandprevious"></i>',
            }
        },
        {
            breakpoint: 601,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<i class="fa-solid fa-angle-left brandnext"></i>',
                nextArrow: '<i class="fa-solid fa-angle-right brandprevious"></i>',
            }
        },
        {
            breakpoint: 426,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<i class="fa-solid fa-angle-left brandnext"></i>',
                nextArrow: '<i class="fa-solid fa-angle-right brandprevious"></i>',
            }
        }
    ]
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object

});