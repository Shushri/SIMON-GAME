var buttonColours=["green","red","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
function nextsequence(){
  $("h1").text("Level "+level);
  level=level+1;
  randomNumber=Math.floor(Math.random()*4);
  randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut().fadeIn();
  var audio=new Audio("sounds/"+randomChosenColour+".mp3");
  audio.play(); 
}

$(".btn").on("click",function(){
  var userChosenColour=$(this).attr("id");
  $("#"+userChosenColour).fadeOut().fadeIn();
  userClickedPattern.push(userChosenColour);
  check_answer();
  var audio=new Audio("sounds/"+userChosenColour+".mp3");
  audio.play();

})

function check_answer(currentlevel){

}

$(document).on("keypress",nextsequence)
