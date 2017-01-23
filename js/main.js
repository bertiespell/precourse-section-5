var counter = 0;
$(document).ready(function(){
  $(".correct").click(function(){
    console.log("correct!");
    $(this).removeClass("correct");
      counter += 1;
    $(this).addClass("correctAnswer");
    document.getElementById("score").innerHTML = counter;
  });
  $(".wrong").click(function(){
    console.log("wrong!");
    $(this).addClass("wrongAnswer");
  });
});
