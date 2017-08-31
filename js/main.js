function setHeiHeight() {
    $('.head').css({
        height: $(window).height() + 'px'
    });
}
setHeiHeight();
$(window).resize( setHeiHeight );

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.fixed').addClass("sticky");
    $('.logo-brand').addClass("sticky");
    $('.navbar-nav').addClass("sticky");
  }
  else{
    $('.fixed').removeClass("sticky");
    $('.logo-brand').removeClass("sticky");
    $('.navbar-nav').removeClass("sticky");
  }
});



function setEqualHeight(columns)
    {
    var tallestcolumn = 0;
    columns.each(
        function()
        {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
    }
    $(document).ready(function() {
        setEqualHeight($(".first-serv"));
        setEqualHeight($(".second-serv"));
    });

