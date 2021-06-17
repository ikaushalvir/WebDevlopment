document.querySelector("button").addEventListener( "click" , function() {


  //function for animation

  buttonAnimation();

  //for sound
  diceRollSound();

  //function to generate dice roll
  diceRoll();


} )

//dice roll diceRollSound

function diceRollSound(){
  let rollSound=new Audio("sounds/ONEDICE.wav");
  rollSound.play();
}

//button animation
function buttonAnimation(){
  document.querySelector("button").classList.add("pressed");
  setTimeout(function(){
  document.querySelector("button").classList.remove("pressed");
},100)

}

// to generate dice roll
function diceRoll(){
  let randomNumber1 = Math.floor(Math.random()*6)+1;
  let randomNumber2 = Math.floor(Math.random()*6)+1;

  //changing the image attribute.
  document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML=" Match Draw ";
  }

  else if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🏆 Player1 Won";
  }

  else {
    document.querySelector("h1").innerHTML="Player2 Won 🏆";
  }

}
