$(document).ready(function () {
    // Hero Section Slider
    $(".hero-section-slider").slick({
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
    });

    // Trending Slider
    $(".trending-slider").slick({
        slidesToShow: 4,
        variableWidth: true,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
    });

    // Deals Slider
    $(".deals-slider").slick({
        slidesToShow: 3,
        variableWidth: true,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
    });

    // Trending offers Slider
    $(".trending-offers-slider").slick({
        slidesToShow: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        centerMode: true,
        variableWidth: true,
    });

    // Testimonial Slider
    $(".testimonial-slider").slick({
        slidesToShow: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        centerMode: true,
        variableWidth: true,
    });
});
