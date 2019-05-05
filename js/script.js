
$(function () { 
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 300) {
            $('#monitor').addClass('animate');
            $('#phone').addClass('animate');
        };
            
            
        if(y > 400){
          $('#support').find('img').addClass('animate grow-img');
          $('#speed').find('img').addClass('animate grow-img');
          $('#smart').find('img').addClass('animate grow-img');
        };
       
    });
});