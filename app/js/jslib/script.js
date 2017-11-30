$( document ).ready(function() {

    $('#reserve-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 50000,
        dots: false,
        arrows: false
    });

    $('.about-slider').slick({
        dots: false
    });


    //hover settings for section "shop"

    $('.shop-column1 .shop-button a').hover(
        function() {
            $( '.shop-column1 .shop-price' ).addClass('shop-price-bg-change');
        },
        function() {
            $( '.shop-column1 .shop-price' ).removeClass( 'shop-price-bg-change' );
    });

    $('.shop-column2 .shop-button a').hover(
        function() {
            $( '.shop-column2 .shop-price' ).addClass('shop-price-bg-change');
        },
        function() {
            $( '.shop-column2 .shop-price' ).removeClass( 'shop-price-bg-change' );
        });

    $('.shop-column3 .shop-button a').hover(
        function() {
            $( '.shop-column3 .shop-price' ).addClass('shop-price-bg-change');
        },
        function() {
            $( '.shop-column3 .shop-price' ).removeClass( 'shop-price-bg-change' );
        });


    $('.shop-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        asNavFor: '.shop-slider-nav'
    });
    $('.shop-slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.shop-slider',
        dots: false,
        arrows: true,
        fade: true,
        centerMode: false,
        focusOnSelect: true
    });

});