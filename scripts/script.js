const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".newGridBtn");

window.addEventListener("pageshow", buildBoard(256));

function buildBoard(size) {
  for (let i = 0; i < size; i++) {
    const gameBoard = document.createElement("div");
    container.appendChild(gameBoard);
    gameBoard.setAttribute("class", "div1");
    gameBoard.classList.add("div1");
    changeDivColor(gameBoard);
  }
}

function changeDivColor(gameBoard) {
  gameBoard.addEventListener("mouseover", () => {
    gameBoard.style.backgroundColor = "red";
  });
}

const gridSize = newGridBtn.addEventListener("click", () => {
  let size = prompt(
    "How many number of squares per side for the new grid would you like?"
  );

  if (size > 100) {
    prompt("Please enter a number less than 100!");
  }

  let newSize = size * size;
  buildBoard(Number(newSize));
  //problem is the size is being added to the column height and not width.
  //need both? needs to stay in same total space regardless of grid size
  //maybe buldboard function is standlaone to build board on page load
  //then second modifyBoard function to modify said board based on user inputs
});
