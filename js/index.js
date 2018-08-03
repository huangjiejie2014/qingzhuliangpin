
$(function () {
    var swiper1 = new Swiper('.swiper-container', {
        loop:true,
        preventClicks:false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    $(".nav_middle .midddle_hover").hover(function () {
        $(".hover_whole").css("display","none");
        $(this).find(".hover_whole").stop().slideDown(200);
    },function () {
        $(".hover_whole").css("display","none");
    });
    $(".nav_right .float_box").hover(function () {
        $(".hover_cart").css("display","none");
        $(this).find(".hover_cart").stop().slideDown(200);
    },function () {
        $(".hover_cart").css("display","none");
    });
    $(".nav_right .icon-search").click(function () {
        if($(".input_box").css("display","none")) {
            $(".input_box").css("display","block");
        }else {
           return;
        }
    });
    $(".right_whole .normal").hover(function () {
        $(".gray").css("display","none");
        $(this).find(".gray").stop().slideDown(200);
    },function () {
        $(".gray").css("display","none");
    });
    $(".content_pic li").hover(function () {
        $(this).find(".black").css("display","block");
    },function () {
        $(this).find(".black").css("display","none");
    });
    $(".content_pic li").hover(function () {
        $(this).find(".black02").css("display","block");
    },function () {
        $(this).find(".black02").css("display","none");
    });
});