# 🎮 Bubble Pop Challenge

A fun and interactive web-based game built with **vanilla JavaScript**, **HTML5**, and **CSS3**. Test your reflexes and clicking speed by finding and popping bubbles with matching numbers before time runs out!

---

## 📋 Table of Contents

- [Features](#features)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Live Demo & Preview](#live-demo--preview)
- [Installation & Setup](#installation--setup)
- [JavaScript Deep Dive](#javascript-deep-dive)
- [Key Learning Points](#key-learning-points)

---

## ✨ Features

- **Dynamic Bubble Generation**: Bubbles are automatically generated based on container size
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes and orientations
- **Real-time Timer**: 60-second countdown timer that drives the gameplay
- **Score Tracking**: Real-time score updates with 10 points per correct click
- **Visual Feedback**: Instant visual feedback (red flash) for incorrect clicks
- **Adaptive Grid System**: Uses CSS Grid and Flexbox to create a scalable bubble grid
- **Mobile Friendly**: Touch-friendly bubble sizes and responsive interface
- **Game States**: Start screen, active gameplay, and game-over screen

---

## 🎯 How to Play

1. **Start the Game**: Click the "Start Game" button on the home screen
2. **Check the Target**: Look at the "hit" number displayed at the top of the screen
3. **Find Matching Bubbles**: Search for bubbles with numbers matching the target number
4. **Click to Pop**: Click on the correct bubble to score points
5. **Earn Points**: Each correct hit earns you 10 points
6. **Watch Out**: Wrong clicks will cause a red flash as a penalty
7. **Beat the Clock**: Score as many points as possible before the 60-second timer runs out

---

## 🛠 Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic structure and game layout |
| **CSS3** | Responsive styling with Grid, Flexbox, and animations |
| **Vanilla JavaScript (ES6)** | Game logic, event handling, and DOM manipulation |
| **CSS Clamp** | Scalable responsive font sizes and padding |
| **Media Queries** | Responsive breakpoints for different devices |

---

## 📁 Project Structure

```
Bubble/
├── bubble.html       # Main HTML structure
├── bubble.css        # Responsive styling and animations
├── bubble.js         # Game logic and event handlers
└── README.md         # Documentation
```

---

## 🌐 Live Demo & Preview

### Live Link
🔗 **[Play Bubble Pop Challenge](https://mdaamersк.github.io/Mini-Projects/Bubble/bubble.html)**
*(Replace with your actual GitHub Pages link if available)*

### Preview Image
<img width="1317" height="910" alt="image" src="https://github.com/user-attachments/assets/000c7b3f-1a69-43d8-9c8e-8bdac709b8f7" />
![Uploading image.png…]()

---

## 🚀 Installation & Setup

### Quick Start
No installation required! Simply open the HTML file in your browser:

```bash
# Option 1: Direct file access
open bubble.html

# Option 2: Using Python local server (Python 3)
python -m http.server 8000
# Then visit: http://localhost:8000/Bubble/bubble.html

# Option 3: Using Node.js http-server
npx http-server
```

### Requirements
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies required

---

## 🧠 JavaScript Deep Dive

### Core Game Variables
```javascript
let hitrn = Math.floor(Math.random() * 10);  // Target number (0-9)
let Score = 0;                                 // Current score
let Timer = 60;                                // Countdown timer
let gameStarted = false;                       // Game state flag
let timeint;                                   // Timer interval reference
```

### Key JavaScript Functions

#### 1. **makebubble()** - Dynamic Bubble Generation
Creates bubbles based on container dimensions:
- Calculates container padding and effective space
- Computes how many columns and rows can fit
- Generates HTML for all bubbles dynamically
- Ensures responsive grid that adapts to resizing

```javascript
// Highlights:
// - Accounts for CSS gap property
// - Prevents negative bubble counts
// - Updates hitrn for each bubble to ensure target exists
```

#### 2. **timer()** - Countdown Logic
Manages the 60-second game timer:
- Uses `setInterval()` for 1-second ticks
- Updates DOM in real-time
- Triggers game-over when time expires
- Properly clears interval to prevent memory leaks

#### 3. **score()** - Points System
Awards 10 points per correct click:
- Increments score by 10
- Updates the score display immediately

#### 4. **wronghit()** - Visual Feedback
Provides instant feedback for incorrect clicks:
- Flashes game area red
- Auto-reverts to black after 100ms
- Creates visual penalty without stopping gameplay

#### 5. **Event Delegation Pattern**
```javascript
document.querySelector("#pbtm").addEventListener("click", (dets) => {
    if (gameStarted && dets.target.classList.contains('bubble')) {
        // Game logic here
    }
});
```
- **Benefits**: Single event listener on parent instead of per-bubble listeners
- Efficient with dynamically generated content
- Better performance and memory management

#### 6. **Responsive Resize Handling**
```javascript
window.addEventListener("resize", () => {
    if (gameStarted && Timer > 0) {
        makebubble();
    }
});
```
- Regenerates bubble grid on window resize
- Maintains gameplay continuity
- Prevents bubble overflow issues

### Game State Management
- **showStartScreen()**: Displays initial menu
- **startGame()**: Initializes and starts gameplay
- **showGameOver()**: Displays final score and options
- **resetGame()**: Clears all game variables safely

---

## 🎓 Key Learning Points

### JavaScript Concepts Practiced

#### 1. **DOM Manipulation**
- Query selectors for efficient element targeting
- InnerHTML for dynamic content generation
- TextContent for safe text updates
- classList for CSS class management

#### 2. **Event Handling**
- Click events with event delegation
- Window resize events
- Event object destructuring (`dets.target`)
- Event listener cleanup

#### 3. **Timing & Async Operations**
- `setInterval()` for recurring timers
- `clearInterval()` for proper cleanup
- `setTimeout()` for delayed actions
- Managing timer references to prevent multiple intervals

#### 4. **Responsive Calculations**
- `getComputedStyle()` for CSS property access
- `clientWidth` and `clientHeight` for element dimensions
- `parseFloat()` for CSS value conversion
- Dynamic capacity calculations based on container size

#### 5. **State Management**
- Game state flags (`gameStarted`)
- Global variables tracking score, timer, target number
- Proper reset logic to prevent state pollution

#### 6. **Performance Optimization**
- Event delegation instead of individual listeners
- Single parent listener for dynamically generated content
- Efficient DOM updates (avoiding unnecessary reflows)

#### 7. **Number Operations**
- `Math.random()` for RNG
- `Math.floor()` for integer conversion
- `Number()` type conversion for string values

---

## 💻 CSS Highlights

### Responsive Design Features
- **CSS Clamp**: `clamp(min, preferred, max)` for scalable sizing
- **CSS Grid**: 3-column top panel with auto-sizing
- **Flexbox**: Flexible bubble layout and wrapping
- **Media Queries**: Desktop vs mobile optimizations
- **Box Model**: Proper padding, margin, and gap calculations

### Visual Effects
- Smooth transitions for hover states
- Scale transforms on bubble interaction
- Color transitions for feedback
- Box shadows for depth

---

## 🐛 Debugging & Testing Tips

1. **Check Console**: Open DevTools (F12) to see any errors
2. **Test Resize**: Resize the browser window during gameplay
3. **Verify Touch**: Test on mobile devices for touch responsiveness
4. **Monitor Performance**: Check FPS using DevTools Performance tab
5. **Test Edge Cases**: Try rapid clicks, window resize mid-game

---

## 📝 Notes & Future Enhancements

### Potential Improvements
- [ ] Add difficulty levels (easy/medium/hard)
- [ ] Implement local storage for high scores
- [ ] Add sound effects for correct/incorrect clicks
- [ ] Create a multiplayer version
- [ ] Add keyboard shortcuts for accessibility
- [ ] Implement bubble animations
- [ ] Add combo system for consecutive correct clicks
- [ ] Create custom difficulty settings (timer duration, points per hit)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

---

**Made with ❤️ to practice JavaScript in depth**

Last Updated: June 2026
