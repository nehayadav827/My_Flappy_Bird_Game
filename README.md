# Flappy Bird Game

A simple web-based implementation of the classic Flappy Bird game built with HTML5, CSS3, and JavaScript.

# Demo Video
https://drive.google.com/file/d/1x_yy5vcSK0oaAXmIUtE09PJK2fFYF8sn/view?usp=drivesdk

## 📖 Description

This is a browser-based clone of the popular Flappy Bird game where players control a bird that must navigate through a series of green pipes by jumping at the right moments. The objective is to fly the bird as far as possible without hitting the pipes or the ground/ceiling.

### Game Features:
- Simple one-key controls (any key to jump)
- Smooth gravity physics
- Collision detection with pipes and boundaries
- Automatic game restart after collision
- Responsive design that works in modern browsers

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Running the Game


1. **Open the game folder :**
   - Simply double-click on `index.html`, or
   - Right-click `index.html` → "Open with" → your web browser, or
   - Serve the files using a local web server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Start playing:**
   - The game will load automatically
   - Press any key to make the bird jump
   - Avoid the green pipes and try to fly as far as possible!

## 🎯 How to Play

1. **Controls:** Press any key (spacebar, arrow keys, etc.) to make the bird jump
2. **Objective:** Navigate the green bird through the gaps between pipes
3. **Scoring:** Try to pass through as many pipe pairs as possible
4. **Game Over:** The game ends when the bird hits a pipe or the ground/ceiling
5. **Restart:** Click "OK" and press a key

## 📁 Project Structure

```
The Green Flappy Bird /
├── index.html          # Main HTML file with game structure
├── style.css           # Styling and visual design
├── script.js           # Game logic and mechanics
├──  Game Demo Video.mov      # Gameplay demonstration video
│__ README.md           # This file
─ images/
│   ├── greenbird.png
│   ├── Flappy Bird background.jpg
```

## 🛠️ Dependencies

This project uses only vanilla web technologies with no external dependencies:

- **HTML5** - Game structure and layout
- **CSS3** - Styling and animations  
- **JavaScript (ES6)** - Game logic and interactivity

## 🔧 Technical Details

### Key Components:
- **Bird Physics:** Gravity-based movement with jump mechanics
- **Pipe System:** Continuously moving obstacles with collision detection
- **Game Loop:** Uses `requestAnimationFrame` for smooth  gameplay
- **Event Handling:** Keyboard input for player controls

### Browser Compatibility:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## What I Learned

-Implementing a continuous game loop using requestAnimationFrame()
-Detecting collisions and handling events in JavaScript
-Organizing code into reusable functions
-Hosting web projects using GitHub Pages

## Future Improvements

-Add sound effects and background music
-Add difficulty levels and power-ups
-Implement high-score saving using localStorage

# Made by NEHA YADAV


**Happy Flying! 🐦** 
