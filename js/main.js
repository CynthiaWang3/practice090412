$(function () {


    $(window).scroll(function () {

        var scrollHeight = $(window).scrollTop();

        /*
        if(零錢 >= 100){
            吃大餐
        } else {
            吃泡麵
        }
        */

        if (scrollHeight >= 50) {
            $('nav').addClass('scroll');
        } else {
            $('nav').removeClass('scroll');
        }

    });

    $('#showMenuBtn').click(function () {
        $('.nav-list').toggleClass('active');

    });

    $('.nav-list a').click(function () {
        $('.nav-list').removeClass('active');
    });
});