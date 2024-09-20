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

// Add event listeners for all drum buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playSound(this.innerHTML); // Pass the innerHTML of the clicked button
    });
}

// Add event listener for keydown to play sound when 'w' is pressed
document.addEventListener("keydown", function(event) {
    playSound(event.key); // Pass the pressed key
});
