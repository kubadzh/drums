//*document.querySelector("button").addEventListener("click", handleClick) //* this will find the 1st button in our html document,
//*document.getElementByClassName("a drum").addEventListener("click", handleClick)   //* and then it adds an addEventListener to that button, so that it listens to that "click"
//* that happend on that button, and when it does it runs the code inside the function "handleClick"

//Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //* dot drum - means we are targeting a class 'drum'/.length - will count all buttons

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML); // like else statement
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // we are adding "pressed" class so css styling applies

  setTimeout(function () {
    activeButton.classList.remove("pressed"); // this will remove styling, creating an animation
  }, 100);
}
