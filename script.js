const grid = document.querySelector(".grid");

for (let i = 0; i < 10; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 10; j++) {
    const box = document.createElement("div");
    box.textContent= "*";
    row.appendChild(box);
  }
  grid.appendChild(row);
}

const slider = document.querySelector(".setSize");
const displaySize = document.querySelector(".displaySize");
displaySize.textContent = `Grid size: ${slider.value}`;
slider.addEventListener('input', event => {
  displaySize.textContent = `Grid size: ${event.target.value}`;
});
