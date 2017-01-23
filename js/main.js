var counter = 0;
$(document).ready(function(){
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
