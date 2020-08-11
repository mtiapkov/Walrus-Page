$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
    
  });
  $(".clickable1").click(function(){
    $("#showImage").slideToggle();
    $("#hideImage").slideToggle();
  })
});

