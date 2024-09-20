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
        

        // Change the text colour of the clicked button
        var button = this;
        button.style.color = 'white';

        // reset the text colour to default after 100 milliseconds

        setTimeout(function(){
            button.style.color = ''; // reset to default
        } , 100 );
    });
}

document.addEventListener("keydown", function(event) {
    playSound(event.key); // Play the sound

    // Select the button that corresponds to the pressed key
    var button = document.querySelector("." + event.key);

    // If the key corresponds to a drum button, change the text color
    if (button) {
        button.style.color = 'white'; // Change the text color

        // Reset the text color to default after 100 milliseconds
        setTimeout(function() {
            button.style.color = ''; // Reset to default color
        }, 100);
    }
});
