const defaultSize = 16;
const container = document.getElementById("container");

function setupGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
        for (let i = 0; i < size * size; i++) {
          const cells = document.createElement('div')
          cells.classList.add('cells')
          container.appendChild(cells)
        }
}

setupGrid(defaultSize);