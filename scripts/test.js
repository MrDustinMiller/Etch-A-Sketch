const container = document.querySelector(".container");
const smallBtn = document.querySelector(".smallGridBtn");
const mediumBtn = document.querySelector(".mediumGridBtn");
const largeBtn = document.querySelector(".largeGridBtn");
const grid = { rows: 16, cols: 16 };
const total = grid.rows * grid.cols;

window.addEventListener("pageshow", createGrid(total));

function createGrid(total) {
  for (let i = 0; i < total; i++) {
    const gameBoard = document.createElement("div");
    container.appendChild(gameBoard);
    gameBoard.setAttribute("class", "gameBoard");
    changeDivColor(gameBoard);
  }
}

function changeDivColor(gameBoard) {
  gameBoard.addEventListener("mouseover", () => {
    gameBoard.style.backgroundColor = "red";
  });
}

let mediumSize = mediumBtn.addEventListener("click", () => {
  deleteGrid();
  createGrid(390);
  container.removeAttribute("class");
  container.setAttribute("class", "mediumGrid");
});

let smallSize = smallBtn.addEventListener("click", () => {
  deleteGrid();
  createGrid(total);
  container.removeAttribute("class");
  container.setAttribute("class", "smallGrid");
});

let largeSize = largeBtn.addEventListener("click", () => {
  deleteGrid();
  createGrid(4);
  container.removeAttribute("class");
  container.setAttribute("class", "largeGrid");
});

let deleteGrid = () => {
  let gridItems = document.querySelectorAll(".gameBoard");
  gridItems.forEach((gridItems) => {
    container.removeChild(gridItems);
  });
};
