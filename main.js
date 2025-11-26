const square = document.querySelector(".square");
const playBtn = document.getElementById("playBtn");
const instructions = document.querySelector(".instructions");
const flash = document.getElementById("flash");

const keyMap = {
  87: document.getElementById('soundW'),
  65: document.getElementById('soundA'),
  83: document.getElementById('soundS'),
  68: document.getElementById('soundD'),
  70: document.getElementById('soundF'),
  71: document.getElementById('soundG')
};

const colorMap = {
  87: "#FF4D4D",
  65: "#FFB84D",
  83: "#FFF94D",
  68: "#4DFF4D",
  70: "#4DB8FF",
  71: "#C04DFF"
};

square.addEventListener("animationend", () => {
  playBtn.classList.add("show");
});

playBtn.addEventListener("click", () => {
  square.style.display = "none";
  instructions.style.display = "block";
  playBtn.style.display = "none";
  document.body.style.backgroundColor= "black";
});

document.onkeydown = function (e) {
  const sound = keyMap[e.which];
  const color = colorMap[e.which];

  if (sound) {
    sound.currentTime = 0;
    sound.volume = 1.0;
    sound.play();

    flash.style.backgroundColor = color;
    flash.classList.add("active");
    setTimeout(() => flash.classList.remove("active"), 200);

    console.log(`Key ${e.key.toUpperCase()} pressed — playing sound.`);
  }
};
