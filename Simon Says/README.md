# Simon Says

A simple browser-based memory game (Simon) implemented with HTML, CSS, and JavaScript.

Watch a growing sequence of colored flashes and repeat the sequence by clicking the colored buttons. The sequence gets longer each round; one mistake ends the game.

## How to play

1. Open `simon.html` in your browser (double-click the file or serve the folder with a static server).
2. Press any keyboard key to start the game.
3. Watch the sequence of flashing colors.
4. Repeat the sequence by clicking the colored buttons in the same order.
5. If you repeat the entire sequence correctly, the level increases and a new color is added. One mistake ends the game and shows your final score.

## Files

- `simon.html` — Main HTML file. Provides the game layout and references the stylesheet and script. Includes a prompt to "Press any key to start" and four color buttons (red, yellow, green, purple).
- `simon.css` — Styling for the page and the four colored buttons, plus classes used for flashing effects (`.flash` and `.userflash`). Uses the Poppins Google Font and a dark background theme.
- `simon.js` — Game logic:
  - `gameSeq` — array storing the generated game sequence.
  - `userSeq` — array storing the player's inputs for the current level.
  - `levelUp()` — advances the level, displays the level in the UI, picks a random color, appends it to `gameSeq` and flashes the new button.
  - `gameflash()` / `userflash()` — add/remove flash classes for visual feedback.
  - `checkAns(idx)` — compares the user's input with the game sequence; if a mismatch occurs the game ends and the UI shows "game over" with the final score.
  - Click handlers are attached to all `.btn` elements; pressing any key starts the game.

## Running locally

- Quick: Open `Simon Says/simon.html` in a modern browser.
- Recommended (development): run a simple static server in the project root and open `http://localhost:8000/Simon%20Says/simon.html`.
  - Python 3: `python -m http.server 8000`

## Notes / Tips

- The game starts on any keypress; clicking buttons before starting will not begin the game — press a key first.
- Visual feedback uses `.flash` for game-generated flashes and `.userflash` for user clicks.
- When the player makes a mistake, the game resets and shows the level reached as the score.
- The code is intentionally simple and easy to extend (add sounds, animations, or difficulty settings).

## Technologies

- HTML, CSS, JavaScript
- Google Fonts: Poppins

## Author

MdAamerSk
