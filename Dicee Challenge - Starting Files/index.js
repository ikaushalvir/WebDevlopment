// random number generation for both the dice.

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
