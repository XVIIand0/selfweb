$(".music").hover(function(){
  $(".music_pic").removeClass('mu');
  $(".music_pic").animate({
    "width":"80%",
    "marginTop":"3%",
    })
  if($('.basic').is(':animated')){
    $('.basic').stop(true,true);
}
  $(".basic").animate({
    "height":"100%"
  })
});
$(".music").mouseout(function(){
  if($('.basic').is(':animated')){
    $('.basic').stop(true,true);
}
  $(".music_pic").animate({
    "width":"100%",
    })
  $(".music_pic").toggleClass('mu');
 $(".basic").animate({
    "height":"35%"
  })
});




$(".game").mouseover(function(){
  $(".game_pic").removeClass('inner');
  $(".game_pic").animate({
    "width":"100%",
    "marginTop":"3%",
    })
  if($('.basic').is(':animated')){
    $('.basic').stop(true,true);
}
  $(".basic").animate({
    "height":"100%"
  })
});
$(".game").mouseout(function(){
  $(".game_pic").animate({
    "width":"150%",
    })
  if($('.basic').is(':animated')){
    $('.basic').stop(true,true);
}
  $(".game_pic").toggleClass('inner');
  $(".basic").animate({
    "height":"35%"
  })

});


$(".program").mouseover(function(){
  $(".program_pic").removeClass('inner');
  $(".program_pic").animate({
    "width":"100%",
    "marginTop":"3%",
    })
  if($('.basic').is(':animated')){
    $('.basic').stop(true,true);
}
  $(".basic").animate({
    "height":"100%"
  })
});
$(".program").mouseout(function(){
  $(".program_pic").animate({
    "width":"150%",
    }).show().animate({opacity:1});
  $(".program_pic").toggleClass('inner');
  if($('.basic').is(':animated')){
    $('.basic').stop(true,true);
}
$(".basic").animate({
    "height":"35%"
  })
});


$(".sleep").mouseover(function(){
  $(".sleep_pic").removeClass('inner');
  $(".sleep_pic").animate({
    "width":"100%",
    "marginTop":"3%",
    })
  if($('.basic').is(':animated')){
    $('.basic').stop(true,true);
}
  $(".basic").animate({
    "height":"100%"
  })
});
$(".sleep").mouseout(function(){
  $(".sleep_pic").animate({
    "width":"150%",
    })
  $(".sleep_pic").toggleClass('inner');
  if($('.basic').is(':animated')){
    $('.basic').stop(true,true);
}
$(".basic").animate({
    "height":"35%"
  })
});

$(".ho").mouseover(function(){
  $("aside").toggleClass('aside_ho');
});
$(".ho").mouseout(function(){
  $("aside").removeClass('aside_ho');
});

$(".nav_basic").click(function(){
  $('html,body').animate({scrollTop:$(".title_basic").offset().top}, 800);
});
$(".nav_cl").click(function(){
  $('html,body').animate({scrollTop:$(".title_cl").offset().top}, 800);
});
$(".nav_tar").click(function(){
  $('html,body').animate({scrollTop:$(".title_tar").offset().top}, 800);
});
$(".nav_pho").click(function(){
  $('html,body').animate({scrollTop:$(".title_pho").offset().top}, 800);
});
$(function() {
   
    $('.totop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');  
        return false;
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });
});

