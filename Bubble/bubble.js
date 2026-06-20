
let hitrn = Math.floor(Math.random() * 10);
let Score = 0;
let Timer = 60;
let gameStarted = false;
let timeint;

function makebubble() {
    var pbtm = document.querySelector("#pbtm");
    var styles = window.getComputedStyle(pbtm);
    
    // 1. Calculate effective width and height by subtracting the container's padding
    var paddingLeft = parseFloat(styles.paddingLeft) || 0;
    var paddingRight = parseFloat(styles.paddingRight) || 0;
    var paddingTop = parseFloat(styles.paddingTop) || 0;
    var paddingBottom = parseFloat(styles.paddingBottom) || 0;
    
    var width = pbtm.clientWidth - paddingLeft - paddingRight;
    var height = pbtm.clientHeight - paddingTop - paddingBottom;
    
    // 2. Define Bubble dimensions and flex gap (matches your CSS)
    var bubbleWidth = 60; 
    var bubbleHeight = 60;
    var gap = parseFloat(styles.gap) || 10;
    
    // 3. Calculate how many columns and rows can fully fit inside the container
    // We add 'gap' to the total width/height to account for the trailing edge having no gap
    var cols = Math.floor((width + gap) / (bubbleWidth + gap));
    var rows = Math.floor((height + gap) / (bubbleHeight + gap));
    var totalBubbles = cols * rows;
    
    // Fallback just in case the container gets absurdly small
    if (totalBubbles <= 0) totalBubbles = 1;

    var clutter = "";
    for (var i = 1; i <= totalBubbles; i++) {
        // We update the global `hitrn` in the loop so that the target number 
        // will always exist on the board (at least as the very last bubble).
        hitrn = Math.floor(Math.random() * 10);
        clutter += `  <div class="bubble">${hitrn}</div>`
    }
    pbtm.innerHTML = clutter;
}

function hit() {
    document.querySelector("#hitval").textContent = hitrn;
}

function timer() {
    var timeint = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector("#timerval").textContent = Timer;
        } else {
            clearInterval(timeint);
            showGameOver();
        }
    }, 1000)
}

function score() {
    Score += 10;
    document.querySelector("#scoreval").textContent = Score;
}

function wronghit() {
    // Soft transparent red error flash matching the premium theme
    document.querySelector("#pbtm").style.backgroundColor = "rgba(239, 68, 68, 0.2)";
    setTimeout(function () {
        // Return to transparent instead of black for glassmorphism
        document.querySelector("#pbtm").style.backgroundColor = "transparent";
    }, 150);
}

function resetGame() {
    Timer = 60;
    Score = 0;
    gameStarted = false;
    document.querySelector("#timerval").textContent = Timer;
    document.querySelector("#scoreval").textContent = Score;
    if (timeint !== null && timeint !== undefined) {
        clearInterval(timeint);
    }
}

function showGameOver() {
    document.querySelector("#pbtm").innerHTML = `
        <div id="game-over-screen">
            <h1 class="game-title">Game Over!</h1>
            <div class="final-score">Final Score: ${Score}</div>
            <div>
                <button class="game-btn" id="play-again-btn">Play Again</button>
                <button class="game-btn" id="exit-btn">Exit to Menu</button>
            </div>
        </div>
    `;

    document.querySelector("#play-again-btn").addEventListener("click", startGame);
    document.querySelector("#exit-btn").addEventListener("click", showStartScreen);
}

function showStartScreen() {
    resetGame();
    document.querySelector("#pbtm").innerHTML = `
        <div id="start-screen">
            <h1 class="game-title">Bubble Pop Challenge!</h1>
            <div id="rules">
                <h2>How to Play:</h2>
                <p>1. You have 60 seconds to play.</p>
                <p>2. Look at the "hit" number at the top.</p>
                <p>3. Find and click bubbles with matching numbers.</p>
                <p>4. Each correct hit earns you 10 points.</p>
                <p>5. Wrong clicks will flash red.</p>
                <p>6. Score maximum points possible before time runs out!</p>
            </div>
            <button class="game-btn" id="start-btn">Start Game</button>
        </div>
    `;

    document.querySelector("#start-btn").addEventListener("click", startGame);
}

function startGame() {
    resetGame();
    gameStarted = true;
    makebubble();
    hit();
    timer();
}

document.querySelector("#pbtm").addEventListener("click", (dets) => {
    if (gameStarted && dets.target.classList.contains('bubble')) {
        var clickednum = Number(dets.target.textContent);
        if (hitrn === clickednum) {
            score();
            // 1. Add pop animation class
            dets.target.classList.add('pop');
            // 2. Wait for animation to complete before regenerating board
            setTimeout(() => {
                makebubble();
                hit();
            }, 180);
        } else if (Timer > 0) {
            wronghit();
        }
    }
});

showStartScreen();
//timer();
//makebubble();
//hit();
// Regenerate bubbles if the window is resized during active gameplay
window.addEventListener("resize", () => {
    if (gameStarted && Timer > 0) {
        makebubble();
    }
});
