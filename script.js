// Get the bird element from the HTML
const bird = document.getElementById('bird');
const gameContainer = document.getElementById('game-container');

// Game state variables
let birdTop = 250;
let birdLeft = 50;
let gravity = 1;
let gameSpeed = 1;
let isGameOver = false;
let gamestarted = false;
let animationId;
let score = 0;
let frameCount = 0;

// NEW: to prevent multiple loops
let animationRunning = false;

// Initialize the game
function initializeGame() {
    birdTop = 250;
    score = 0;
    frameCount = 0;
    isGameOver = false;
    gamestarted = false;
    animationRunning = false;

    document.getElementById("score-display").textContent = "Score : 0";
    bird.style.top = birdTop + "px";

    // prevent stacking listeners
    document.removeEventListener("keydown", jump);
    document.addEventListener("keydown", jump);
}

// Bird jump
function jump() {
    if (!isGameOver) {
        if (!gamestarted && !animationRunning) {
            gamestarted = true;
            gameLoop();
        }
        birdTop -= 50;
        bird.style.top = birdTop + "px";
    }
}

// Gravity
function applyGravity() {
    if (!isGameOver) {
        birdTop += gravity;
        bird.style.top = birdTop + "px";
    }
}

// Move pipes
function movePipes() {
    const pipes = document.querySelectorAll('.pipe');
    pipes.forEach(pipe => {
        let pipeLeft = parseInt(pipe.style.left);
        if (pipeLeft > -60) {
            pipe.style.left = (pipeLeft - gameSpeed) + "px";
        } else {
            pipe.style.left = gameContainer.offsetWidth + "px";
        }
    });
}

// Collision detection
function detectCollision() {
    const pipes = document.querySelectorAll('.pipe');

    pipes.forEach(pipe => {
        let pipeLeft = parseInt(pipe.style.left);
        if (
            birdLeft + 40 > pipeLeft &&
            birdLeft < pipeLeft + 60 &&
            birdTop + 40 > parseInt(pipe.style.top) &&
            birdTop < parseInt(pipe.style.top) + parseInt(pipe.style.height)
        ) {
            gameOver();
        }
    });

    if (birdTop <= 0 || birdTop >= 560) {
        gameOver();
    }
}

// Game Over
function gameOver() {
    if (isGameOver) return;
    isGameOver = true;
    animationRunning = false;
    cancelAnimationFrame(animationId);

    alert("Game over!  Your Score : " + score + "\nPress any key to restart.");
    document.addEventListener("keydown", restartGame, { once: true });
}

// Restart
function restartGame() {
    cancelAnimationFrame(animationId);
    animationRunning = false;
    initializeGame();
    resetPipes();
    gameLoop();
}

// Reset pipes
function resetPipes() {
    const pipes = document.querySelectorAll('.pipe');
    let spacing = 200; // distance between pipes
    pipes.forEach(pipe => {

        // pipe.style.left = gameContainer.offsetWidth + "px";
        
        // place each pipe offscreen to the right with even spacing
        pipe.style.left = (gameContainer.offsetWidth + index * spacing) + "px";
    });
}

// Game loop
function gameLoop() {
    if (isGameOver) {
        animationRunning = false;
        return;
    }

    animationRunning = true;
    applyGravity();
    movePipes();
    detectCollision();

    frameCount++;
    if (frameCount % 20 === 0) {
        score += 1;
        document.getElementById("score-display").textContent = "Score : " + score;
    }

    animationId = requestAnimationFrame(gameLoop);
}

// Start
document.addEventListener("DOMContentLoaded", function () {
    initializeGame();
});
