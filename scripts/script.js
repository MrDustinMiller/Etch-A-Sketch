const container = document.querySelector(".container");
const resizeBtn = document.querySelector(".changeGridSize");
const eraseBtn = document.querySelector(".eraseColor");
const changeColorBtn = document.querySelector(".changeColor");
const rndmColorBtn = document.querySelector(".randomColor");

createGrid(16, 16);

function createGrid(col, rows) {
  for (let i = 0; i < col * rows; i++) {
    const gameBoard = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(gameBoard).classList.add("gameBoard");
    gameBoard.addEventListener("mouseover", startingColor);
  }
}

function startingColor(e) {
  e.target.style.backgroundColor = "red";
}

function changeDivColor(colorString) {
  const gameBoard = document.querySelectorAll(".gameBoard");

  gameBoard.forEach((gameBoard) => {
    gameBoard.addEventListener("mouseover", () => {
      gameBoard.style.backgroundColor = `${colorString}`;
    });
  });
}

let deleteGrid = () => {
  let gridItems = document.querySelectorAll(".gameBoard");
  gridItems.forEach((gridItems) => {
    container.removeChild(gridItems);
  });
};

let eraseSqaure = () => {
  let gridItem = document.querySelectorAll(".gameBoard");
  let body = document.querySelector("body");

  gridItem.forEach((gridItems) => {
    gridItems.style.backgroundColor = "rgb(240,255,240)";
    body.classList.add("shake");
  });

  setTimeout(() => {
    location.reload();
  }, "1030");
};

let changeColor = () => {
  const color = document.querySelector(".color");

  color.addEventListener("input", (e) => {
    color.style.backgroundColor = color.value;
    let colorString = color.style.backgroundColor;
    changeDivColor(colorString);
  });
};

let rndmColor = () => {
  const gameBoard = document.querySelectorAll(".gameBoard");

  gameBoard.forEach((gameBoard) => {
    gameBoard.addEventListener("mouseover", () => {
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      gameBoard.style.backgroundColor = `${randomColor}`;
    });
  });
};

resizeBtn.addEventListener("click", () => {
  let size = prompt("How many squares per side would you like?");

  if (size == "") {
    createGrid(16, 16);
  } else if (size > 100) {
    size = prompt("Sorry but thats too high, choose a number lower than 100!");
  } else if (size < 0) {
    size = prompt("Sorry but thats too low, choose a number higher than 0!");
  } else {
    //IF NAN ALSO
    deleteGrid();
    createGrid(size, size);
  }
});

eraseBtn.addEventListener("click", eraseSqaure);
changeColorBtn.addEventListener("click", changeColor);
rndmColorBtn.addEventListener("click", rndmColor);

//WHEN CHAINGING GRID SIZE WITH HAVING THE  PPAGE REFRESH IT RESETS THE GRID TO 16X16 FIX THISD
