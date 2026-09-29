function createGrid(n) {
  const body = document.querySelector("body");
  const grid = document.createElement("div");

  grid.classList.add("grid");

  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < n; j++) {
      const box = document.createElement("div");
      box.textContent= "*";
      row.appendChild(box);
    }
    grid.appendChild(row);
  }
  
  body.appendChild(grid);
}

function destroyGrid() {
  const body = document.querySelector("body");
  const grid = document.querySelector(".grid");

  body.removeChild(grid);
}

const slider = document.querySelector(".setSize");
const displaySize = document.querySelector(".displaySize");

displaySize.textContent = `Grid size: ${slider.value}`;
createGrid(slider.value);

slider.addEventListener('input', event => {
  displaySize.textContent = `Grid size: ${event.target.value}`;
  destroyGrid();
  createGrid(event.target.value);
});


