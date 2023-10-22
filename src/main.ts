const colors = [
  "red",
  "black",
  "yellow",
  "green",
  "brown",
  "blue",
  "orange",
  "pink",
  "purple",
  "white",
];
let currentColor = 0; // index of colors

const background = "#EAE9E9";

let click = false;

const svg = document.getElementById("svg");
const svgContainer = document.getElementById("svgContainer");

svgContainer.appendChild(svg);
svg.setAttribute("width", 500);
svg.setAttribute("height", 500);

function create(elementNone) {
  return document.createElementNS("http://www.w3.org/2000/svg", elementNone);
}

function createGrid(width, height) {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const square = create("rect");
      square.addEventListener("mouseover", function () {
        if (click == true) {
          if (colors[currentColor] == "white") {
            this.setAttribute("fill", background);
          } else {
            this.setAttribute("fill", colors[currentColor]);
          }
        }
      });
      square.addEventListener("mousedown", function () {
        click = true;
      });
      square.addEventListener("mouseup", function () {
        click = false;
      });
      square.setAttribute("x", i * 10);
      square.setAttribute("y", j * 10);
      square.setAttribute("width", 10);
      square.setAttribute("height", 10);
      square.setAttribute("fill", background);

      svg.appendChild(square);
    }
  }
}

function createPalette() {
  for (let k = 0; k < colors.length; k++) {
    const selector = create("rect");
    selector.addEventListener("click", function () {
      currentColor = k;
      console.log(`SELECT${currentColor}`);
    });
    selector.setAttribute("x", k * 30);
    selector.setAttribute("y", 320 + 20);
    selector.setAttribute("width", 30);
    selector.setAttribute("height", 30);
    selector.setAttribute("fill", colors[k]);
    if (colors[k] == "white") {
      selector.setAttribute("stroke", "black");
    }

    svg.appendChild(selector);
  }
}

let svgText = svgContainer.innerHTML;
var jsonString = JSON.stringify(svgText);

console.log(jsonString);

//Get the svgString from JSON
// svgText = JSON.parse(jsonString);

//Creates a SVG Node from the string
//svgContainer.innerHTML = svgText

createGrid(32, 32);
createPalette();
//Puts the SVG into the element with the id "playgroundID"
