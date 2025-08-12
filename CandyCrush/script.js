const board = document.getElementById("game-board");

const candyColors = [
  "red",
  "yellow",
  "green",
  "blue",
  "orange",
  "purple"
];

for (let i = 0; i < 64; i++) { 
  const square = document.createElement("div");
  square.classList.add("square");

  let randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
  square.style.backgroundColor = randomColor;

  board.appendChild(square);
}
