
var presstheno = document.querySelectorAll(".drum").length;


for ( var i = 0 ; i< presstheno; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function (){



var keyclick = this.innerHTML;


playsound(keyclick);

animation(keyclick);

});
}
/*var audio = new Audio("sounds/tom-1.mp3");
audio.play();

var numberofclick = document.querySelectorAll(".drum").length;

for ( var i = 0 ; i < numberofclick; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", press);

function press () {

    alert("play the song");
    
};
}*/

/*document.querySelectorAll(".drum")[1].addEventListener("click", function () {

    alert("stop the song");
    
});*/



document.addEventListener("keypress", function (event){
   playsound(event.key);

   animation(event.key);
});


function playsound(key) {
   switch (key) {
      case "a":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
  
       case "s":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
          
       case "d":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
          
       case "f":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();  
          break;
  
       case "j":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
  
       case "k":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;   
  
       case "l":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play(); 
          break;  
  
      default:
          break;
  }
  
}


function animation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);

    activebutton.classList.add("pressed");

    setTimeout (function (){
      activebutton.classList.remove("pressed");
    },100);
}