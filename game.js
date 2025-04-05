var buttonColours=["green","red","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];
var level=1;
function nextsequence(){

  $("h1").text("Level "+level);
  level=level+1;
  
  randomNumber=Math.floor(Math.random()*4);
  randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //button animation and sound
  $("#"+randomChosenColour).fadeOut();
  setTimeout(function(){
    $("#"+randomChosenColour).fadeIn();
  },50)
  
  var audio=new Audio("sounds/"+randomChosenColour+".mp3");
  audio.play();
  
  userClickedPattern=[];
}

$(".btn").on("click",function(){
  var userChosenColour=$(this).attr("id");
  //button animation and sound
  $("#"+userChosenColour).addClass("pressed");
  setTimeout(function(){
    $("#"+userChosenColour).removeClass("pressed");
  },80)
  var audio=new Audio("sounds/"+userChosenColour+".mp3");
  audio.play();
  

  userClickedPattern.push(userChosenColour);
  var len=userClickedPattern.length;
  check_answer(len);
  

})

function check_answer(len){
    
    if(gamePattern[len-1]!=userClickedPattern[len-1]){
      $("h1").text("GAME OVER!!! press any key to restart!!!");
      gamePattern=[];
      userClickedPattern=[];
      level=1;
      //sound and animation
      var audio=new Audio("sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over")
      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);
    }
    else if(len===gamePattern.length){
      setTimeout(function(){
        nextsequence();
      },1000);
    }
    
}

$(document).on("keypress",nextsequence)
