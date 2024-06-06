$(function(){
    $('h3').click(function() {
      $('.box').slideUp(400);
      $(this).next('.box').slideToggle(400);
    });
  });
