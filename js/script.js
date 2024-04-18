const mario = document.querySelector('.mario'); // Selects the Mario element
const pipe = document.querySelector('.pipe'); // Selects the Pipe element
const restartButton = document.getElementById('restartButton'); // Selects the restart button
let gameLoop; // Variable to hold the game loop interval

// Function to make Mario jump
const jump = () => {
    mario.classList.add('jump'); // Adds the 'jump' class to Mario
    setTimeout(() => {
        mario.classList.remove('jump'); // Removes the 'jump' class from Mario after a delay
    }, 500);
}

// Function to run the game loop
const loop = () => {
    const pipePosition = pipe.offsetLeft; // Gets the horizontal position of the pipe
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // Gets the vertical position of Mario

    // Checks if Mario hits the pipe
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {
        endGame(); // Calls the function to end the game
    }
};

// Function to end the game
const endGame = () => {
    clearInterval(gameLoop); // Stops the game loop interval
    mario.src = '../Images/game-over.png'; // Changes Mario's image to game over
    restartButton.style.display = 'block'; // Displays the restart button
};

// Function to restart the game
const restartGame = () => {
    restartButton.style.display = 'none'; // Hides the restart button
    mario.src = '../Images/mario.gif'; // Changes Mario's image back to the initial state
    gameLoop = setInterval(loop, 10); // Restarts the game loop
};

document.addEventListener('keydown', jump); // Listens for keydown events to make Mario jump
restartButton.addEventListener('click', restartGame); // Listens for click events on the restart button

// Start game loop
gameLoop = setInterval(loop, 10); // Starts the game loop














