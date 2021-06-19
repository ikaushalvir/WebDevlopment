//array conisite of game pattern
let gamePattern = [];

//array to store button colors;
let buttonColours = ["red","blue","green","yellow"];

//user clicked pattern
let userClickedPattern = [];

//TO DETECT GAME Start
let isGameStart=false;

//game level indicator
let level=0;

// function to generate a randomNumber
function nextSequence() {
  //to change h1 heading.
  gameLevelIndicator();

  // increment level variable
  level++;

  // empty the userClickedPattern array;
  userClickedPattern=[];

  // creating a randomNumber between 0 to 3
  let randomNumber =  Math.round(Math.random()*3);

  //picking up  a random color from buttonColours array
  let randomChosenColour = buttonColours[randomNumber];

  //pushing randomChosenColour at the end of the gamePattern array;
  gamePattern.push( randomChosenColour );


  //flash animation
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  //to play sounds
  playSound(randomChosenColour);


}



function playSound(name) {
  // to play sound
  let audio = new Audio('sounds/'+name+'.mp3');
  audio.play();

}

function animatePress(currentColour) {
  // adding the pressed class.
  $("."+currentColour).addClass("pressed");

  // removing the class after 100 milliseconds
  setTimeout( function() {
      $("."+currentColour).removeClass("pressed");
  }, 100 )
}

// to indicate game level
function gameLevelIndicator() {
  $("#level-title").text("Level "+level);

}

//GAME LOGIC
function checkAnswer(currentLevel) {


  if( userClickedPattern[currentLevel] === gamePattern[currentLevel] ) {
    console.log(userClickedPattern,gamePattern)
    if(userClickedPattern.length===gamePattern.length) {
      setTimeout( function() {
        nextSequence();
      }, 100)
    }

  }

  else {
    gameOver();

    startOver();

  }

}
function startOver() {
  level=0;
  gamePattern=[];
  isGameStart=false;
}


function gameOver() {
  //when user gets the answer wrong.
  let gameOver=new Audio("sounds/wrong.mp3");
  gameOver.play();
  $("body").addClass("game-over");

  //class will be removed after 2000 milliseconds
  setTimeout( function() {
    $("body").removeClass("game-over");
  },200)

  //change the title of game.
  $("#level-title").text("Game Over, Press Any Key to Restart");


}

//detecting click of a button by user
$(".btn").on("click", function(event) {

  let userChosenColour = event.target.id;
  // pushing the chosen colour to userClickedPattern array
  userClickedPattern.push( userChosenColour );

  // animation when user clicks
  animatePress(userChosenColour);

  // play sound when user clicks a button.
  playSound( userChosenColour );


  let lastIndex=(userClickedPattern.length)-1;
  // to check the user pattern with game pattern
  checkAnswer(lastIndex);

})

//detecting keyboard button click.
$("body").on("keydown", function(event) {
  if( !(isGameStart) ) {

    // toggle the isGameStart variable
    isGameStart=true;

    //changing h1 heading

    nextSequence();

  }
})
