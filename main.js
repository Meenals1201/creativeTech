// Map keys to audio
const keyMap = {
  87: document.getElementById('soundW'), // W
  65: document.getElementById('soundA'), // A
  83: document.getElementById('soundS'), // S
  68: document.getElementById('soundD'), // D
  70: document.getElementById('soundF'), // F
  71: document.getElementById('soundG')  // G
};

// Colors for each key
const colorMap = {
  87: "#FF4D4D", // red
  65: "#FFB84D", // orange
  83: "#FFF94D", // yellow
  68: "#4DFF4D", // green
  70: "#4DB8FF", // blue
  71: "#C04DFF"  // purple
};



const output = document.getElementById('output');
const flash = document.getElementById('flash');

// Key press event
document.onkeydown = function (e) {
  const sound = keyMap[e.which];
  const color = colorMap[e.which];

  if (sound) {
    // Play sound
    sound.currentTime = 0;
    sound.volume = 1.0;
    sound.play();

    // Flash color
    flashColor(color);

console.log(`Key ${e.key} pressed — playing sound.`)
  }
};

// Flash function
function flashColor(color) {
  flash.style.backgroundColor = color;
  flash.classList.add("active");
  
  setTimeout(() => {
    flash.classList.remove("active");
  }, 200);
}
