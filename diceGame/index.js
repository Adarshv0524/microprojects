document.getElementById('roll-button').addEventListener('click', rollDice);

function rollDice() {
    const diceFaces = document.querySelectorAll('.face');
    const dice1Face = document.querySelector('#dice1 .face');
    const dice2Face = document.querySelector('#dice2 .face');

    // Hide all faces
    diceFaces.forEach(face => {
        face.style.visibility = 'hidden';
    });

    // Get random numbers for each die
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Show the face corresponding to the dice roll
    document.querySelector(`#dice1 .f${dice1}`).style.visibility = 'visible';
    document.querySelector(`#dice2 .f${dice2}`).style.visibility = 'visible';

    // Update the winner
    if (dice1 > dice2) {
        document.getElementById('dec').textContent = 'Player 1 wins';
    } else if (dice2 > dice1) {
        document.getElementById('dec').textContent = 'Player 2 Wins!';
    } else {
        document.getElementById('dec').textContent = 'No one win';
    }
}
