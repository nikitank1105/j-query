$(document).ready(function() {
    $('.multiple-items').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.slide-items').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

});