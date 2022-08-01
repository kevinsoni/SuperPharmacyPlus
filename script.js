$().ready(function () {
    $('.slick-carousel').slick({
        arrows: false,
        centerPadding: "0",
        dots: false,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        // centerMode: true,
        // variableWidth: true
        // adaptiveHeight: true,
        focusOnSelect: false,
    });
});
