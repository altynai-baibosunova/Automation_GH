const board = document.getElementById("game-board");

const candies = ["red.png", "green.png", "orange.png"];

for (let i = 0; i < 64; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  // Pick a random candy
  const randomCandy = candies[Math.floor(Math.random() * candies.length)];

  // Create image element
  const candyImg = document.createElement("img");
  candyImg.src = `images/${randomCandy}`;
  candyImg.alt = "Candy";
  candyImg.classList.add("candy");

  square.appendChild(candyImg);
  board.appendChild(square);
}
