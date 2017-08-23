function setHeiHeight() {
    $('.site-header').css({
        height: $(window).height() + 'px'
    });
}
setHeiHeight();
$(window).resize( setHeiHeight );

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.fix-head').addClass("sticky");
    $('.logo').addClass("sticky");
    $('.navbar-nav').addClass("sticky");
  }
  else{
    $('.fix-head').removeClass("sticky");
    $('.logo').removeClass("sticky");
    $('.navbar-nav').removeClass("sticky");
  }
});