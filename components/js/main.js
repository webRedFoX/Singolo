$(function() {

    // page scroll to id
    $(".page-scroll a[href*='#']").mPageScroll2id({offset:75});


    $('body').scrollspy({ target: '#bs-example-navbar-collapse-1', offset: 90 });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

});