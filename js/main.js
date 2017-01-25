var counter = 0;
$(document).ready(function(){
  $("#scrollBar").animate({left: '200px'}, "slow");
  $(".correct").click(function(){
    counter += 1;
    document.getElementById("score").innerHTML = counter;
    $(this).addClass("correctAnswer");
    $(this).unbind();
    $(this).siblings().unbind();
  });
  $(".wrong").click(function(){
    $(this).addClass("wrongAnswer");
    $(this).unbind();
    $(this).siblings().unbind();
  });
});
