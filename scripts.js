const newSize = 16;
const grid = document.getElementById("container");

function setupGrid(size) {
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
        for (let i = 0; i < size * size; i++) {
          const gridElement = document.createElement('div')
          gridElement.classList.add('cells')
          grid.appendChild(gridElement)
        }
}

window.onload = () => {
    setupGrid(newSize)
  }