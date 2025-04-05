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
  //button animation and sound
  $("#"+randomChosenColour).fadeOut().fadeIn();
  var audio=new Audio("sounds/"+randomChosenColour+".mp3");
  audio.play(); 
}

$(".btn").on("click",function(){
  var userChosenColour=$(this).attr("id");
  //button animation and sound
  $("#"+userChosenColour).fadeOut().fadeIn();
  var audio=new Audio("sounds/"+userChosenColour+".mp3");
  audio.play();

  userClickedPattern.push(userChosenColour);
  var len=userClickedPattern.length;
  check_answer(len);
  

})

function check_answer(len){
    
    if(gamePattern[len-1]!=userClickedPattern[len-1]){
      $("h1").text("GAME OVER!!!");
      var audio=new Audio("sounds/wrong.mp3");
      audio.play();
    }
    else if(len===gamePattern.length){
      nextsequence();
    }
    
}

$(document).on("keypress",nextsequence)
