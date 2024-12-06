
$(window).scroll(function () { 
    if($(this).scrollTop() > 190){
        $('main section.about_our .container .left').addClass('left_animation');
        $('main section.about_our .container .right').addClass('right_animation');

    }else if($(this).scrollTop() < 50){
        $('main section.about_our .container .left').removeClass('left_animation');
        $('main section.about_our .container .right').removeClass('right_animation');
    }
});

$(window).scroll(function () {
    if($(this).scrollTop() > 700){
        $('main section.doctors-team .container .list-item .item').addClass('item_animation');
    }else if($(this).scrollTop() < 550){
        $('main section.doctors-team .container .list-item .item').removeClass('item_animation');
    }
});

$(window).scroll(function () { 
    if($(this).scrollTop() > 60){
        $('section.up_top').addClass('up_top-active');
    }else{
        $('section.up_top').removeClass('up_top-active');

    }
});


