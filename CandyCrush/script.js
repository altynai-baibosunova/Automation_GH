
const board = document.getElementById("game-board");

for (let i = 0; i < 64; i++) { // 8x8 grid
  const square = document.createElement("div");
  square.classList.add("square");
  board.appendChild(square);
}
