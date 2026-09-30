function colorBox(event) {
  let target = event.target;
  let color = "black";
  target.style.backgroundColor = color;
}

function createGrid(n) {
  const body = document.querySelector("body");
  const grid = document.createElement("div");

  grid.classList.add("grid");

  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < n; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      row.appendChild(box);
    }

    row.addEventListener("mouseover", colorBox);
    grid.appendChild(row);
  }
  
  body.appendChild(grid);
  gridSize = n;
}

function destroyGrid() {
  const body = document.querySelector("body");
  const grid = document.querySelector(".grid");

  body.removeChild(grid);
}

function addBoxes(n) {
  const rows = document.querySelectorAll(".row");

  rows.forEach((row) => {
    for (let i = 0; i < n; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      row.appendChild(box);
    }
  });
  const grid = document.querySelector(".grid");
  
  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < n + gridSize; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      row.appendChild(box);
    }
    row.addEventListener("mouseover", colorBox);
    grid.appendChild(row);
  }
}

function removeBoxes(n) {
  const grid = document.querySelector(".grid");
  
  for (let i = 0; i < n; i++) {
    grid.removeChild(grid.lastElementChild);
  }

  const rows = document.querySelectorAll(".row");

  rows.forEach((row) => {
    for (let i = 0; i < n; i++) {
      row.removeChild(row.lastElementChild);
    }
  });
}

function clearColorOnGrid() {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.style.backgroundColor = "";
  });

}

function updateGrid(n) {
  if (n < gridSize) removeBoxes(gridSize - n);
  else addBoxes(n - gridSize);
  gridSize = n;

  clearColorOnGrid();
}

const slider = document.querySelector(".setSize");
const displaySize = document.querySelector(".displaySize");
let gridSize = null;

displaySize.textContent = `Grid size: ${slider.value}`;
createGrid(slider.valueAsNumber);


slider.addEventListener('input', event => {
  displaySize.textContent = `Grid size: ${event.target.value}`;
  updateGrid(event.target.valueAsNumber);
});


