$().ready(function () {
    $('.slick-carousel').slick({
        arrows: false,
        dots: false,
        infinite: true,
        fade: false,
        responsive: [
            {
                breakpoint: 821,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 821,
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
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 821,
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
    slidesToShow: 6,
    slidesToScroll: 6,
    focusOnSelect: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 821,
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
});


// TABS
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.height = "0";
        tabcontent[i].style.overflow = "hidden";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "";
    }
    document.getElementById(pageName).style.height = "auto";
    elmnt.style.color = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


$(".select").click(function () {
    var is_open = $(this).hasClass("open");
    if (is_open) {
        $(this).removeClass("open");
    } else {
        $(this).addClass("open");
    }
});

$(".select li").click(function () {

    var selected_value = $(this).html();
    var first_li = $(".select li:first-child").html();

    $(".select li:first-child").html(selected_value);
    $(this).html(first_li);

});

$(document).mouseup(function (event) {

    var target = event.target;
    var select = $(".select");
    if (!select.is(target) && select.has(target).length === 0) {
        select.removeClass("open");
    }
});