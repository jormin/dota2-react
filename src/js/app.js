import $ from 'jquery';
$(function(){
    //@首页 图片滑动效果
    $(".am_list_block").on('mouseover', function(){
        $('.am_img_bg').removeClass('am_img_bg');
        $(this).find('.am_img').addClass('bounceIn');
    });
    $('.am_img').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('.am_img').removeClass('bounceIn');
    });
    if($(window).width() < 700 ){
        $('.am_list_block').off();
    }

});



