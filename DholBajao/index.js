// Function to play sound based on the button pressed
function playSound(key) {
    var audio;
    switch (key) {
        case "w":
            audio = new Audio('./sounds/tom-1.mp3');
            break;
        case "a":
            audio = new Audio('./sounds/tom-2.mp3');
            break;
        case "s":
            audio = new Audio('./sounds/tom-3.mp3');
            break;
        case "d":
            audio = new Audio('./sounds/tom-4.mp3');
            break;
        case "j":
            audio = new Audio('./sounds/snare.mp3');
            break;
        case "k":
            audio = new Audio('./sounds/crash.mp3');
            break;
        case "l":
            audio = new Audio('./sounds/kick-bass.mp3');
            break;
        default:
            console.log(key);
            return; // Exit if no matching key
    }
    audio.play(); // Play the sound
}


let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){
        var buttonInnerHTML = this.innerHTML;

        playSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 2000);

}

document.addEventListener("keypress", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});