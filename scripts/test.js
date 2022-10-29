const container = document.querySelector(".container");
const resizeBtn = document.querySelector(".changeGridSize");
const eraseBtn = document.querySelector(".eraseColor");

window.addEventListener("pageshow", createGrid(16, 16));

function createGrid(col, rows) {
  for (let i = 0; i < col * rows; i++) {
    const gameBoard = document.createElement("div");
    // gameBoard.style.border = "1px solid black";
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(gameBoard).classList.add("gameBoard");
    changeDivColor(gameBoard);
  }
}

function changeDivColor(gameBoard) {
  gameBoard.addEventListener("mouseover", () => {
    gameBoard.style.backgroundColor = "red";
  });
}

let deleteGrid = () => {
  let gridItems = document.querySelectorAll(".gameBoard");
  gridItems.forEach((gridItems) => {
    container.removeChild(gridItems);
  });
};

resizeBtn.addEventListener("click", () => {
  let size = prompt("How many squares per side would you like?");
  console.log(size);
  if (size == "") {
    createGrid(16, 16);
  } else if (size > 100) {
    size = prompt("Sorry but thats too high, choose a number lower than 100!");
  } else if (size < 0) {
    size = prompt("Sorry but thats too low, choose a number higher than 0!");
  } else {
    deleteGrid();
    createGrid(size, size);
  }
});

eraseBtn.addEventListener("click", () => {
  let gridItems = document.querySelectorAll(".gameBoard"); //dont think this will work
  //if bg color not equal to white then click on sqaure and erase that color. set it back to white. grab the event target?
});
