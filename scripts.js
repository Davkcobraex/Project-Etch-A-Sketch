const defaultSize = 16;
const container = document.getElementById("container");


function setupGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
        for (let i = 0; i < size * size; i++) {
          const cells = document.createElement('div')
          cells.classList.add('cells')
          cells.setAttribute("id", "cell")
          container.appendChild(cells)
        }
}

function draw() {
    let cell = document.querySelectorAll("#cell");
    cell.forEach(cell => { 
    cell.addEventListener("mouseenter", function() {
        cell.style.backgroundColor = "red";
    });
      
    cell.addEventListener("mouseleave", function() {
        cell.style.backgroundColor = "black";
    });
    });
}

setupGrid(defaultSize);
draw();

function changeSize() {
    const input = prompt("Enter a number of grids cells on the sides: ");
    const elements = document.querySelectorAll(".cells");
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
        }
    setupGrid(input);
    draw();
  }