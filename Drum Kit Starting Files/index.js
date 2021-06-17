//to get the button list
let buttonList = document.querySelectorAll(".drum");


//add addEventListener to all the buttons.
for (let i = 0; i < buttonList.length; i++) {

  buttonList[i].addEventListener("click", function() {

    let buttonInnerHtml = this.innerHTML;

    playSound(buttonInnerHtml);

    buttomAnimation(buttonInnerHtml);




  })

}


// addEventListener to the entire document for keyboard press
// entire document is listener for the keydown

document.addEventListener("keydown",function(event){

  playSound(event.key);

  buttomAnimation(event.key);

})


//to play the sound on button click or keyboard press
function playSound(keyValue){

  switch (keyValue) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(keyValue);
  }
}

//add animation to the button press.

function buttomAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  },100)

}
