$(function(){
    $('header nav > ul > li').hover(function(){
        $('.sub_bg').stop().slideDown(200);
        $('.sub').stop().slideDown(200);
    },function(){
        $('.sub_bg').stop().slideUp(200);
        $('.sub').stop().slideUp(200);
    });

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    $('section.box1 ul li .new').hover(function(){
        $(this).find('.new_btn a').addClass('active');
    },function(){
        $('section.box1 ul li .new .new_btn a.active').removeClass('active');
    });
});