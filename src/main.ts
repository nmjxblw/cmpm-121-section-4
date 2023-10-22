const tiles = [
  "assets/tile1.png",
  "assets/tile2.png",
  "assets/tile3.png",
  "assets/tile4.png",
  "assets/tile5.png",
  "assets/tile6.png",
  "assets/tile7.png",
  "assets/tree.png",
];
let currentTile = 0; // index of tiles

const background = "assets/tile7.png";

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
      
      const tile = create("image");
      
      tile.addEventListener("mouseover", function () {
        if (click == true) {
          tile.setAttributeNS(null, "x", this.getAttribute("x"));
          tile.setAttributeNS(null, "y", this.getAttribute("y"));
          tile.setAttributeNS(null, "width", this.getAttribute("width"));
          tile.setAttributeNS(null, "height", this.getAttribute("height"));
          tile.setAttributeNS(null, 'visibility', 'visible');
          tile.setAttributeNS('http://www.w3.org/1999/xlink', "href", tiles[currentTile])
        }
      });
      
      tile.addEventListener("mousedown", function () {
        click = true;
        tile.setAttributeNS(null, "x", this.getAttribute("x"));
        tile.setAttributeNS(null, "y", this.getAttribute("y"));
        tile.setAttributeNS(null, "width", this.getAttribute("width"));
        tile.setAttributeNS(null, "height", this.getAttribute("height"));
        tile.setAttributeNS(null, 'visibility', 'visible');
        tile.setAttributeNS('http://www.w3.org/1999/xlink', "href", tiles[currentTile])
      });
      
      tile.addEventListener("mouseup", function () {
        click = false;
      });
      
      tile.setAttributeNS(null, "x", i*10);
      tile.setAttributeNS(null, "y", j*10);
      tile.setAttributeNS(null, "width", 10);
      tile.setAttributeNS(null, "height", 10);
      tile.setAttributeNS(null, 'visibility', 'visible');
      tile.setAttributeNS('http://www.w3.org/1999/xlink', "href", background)

      svg?.append(tile)
    }
  }
}

function createPalette() {
  for (let k = 0; k < tiles.length; k++) {
    //const selector = create("rect");
    const img = create("image");
    //img?.setAttribute("width", 10);
    //img?.setAttribute("height", 10);
    
    img.addEventListener("click", function () {
      currentTile = k;
      console.log(`SELECT ${tiles[currentTile]}`);
    });
    img.setAttributeNS(null, "x", k * 37);
    img.setAttributeNS(null, "y", 320 + 20);
    img.setAttributeNS(null, "width", 35);
    img.setAttributeNS(null, "height", 35);
    img.setAttributeNS(null, 'visibility', 'visible');
    img.setAttributeNS('http://www.w3.org/1999/xlink', "href", tiles[k])

    svg.append(img)
  }
}

createGrid(32, 32);
createPalette();



let svgText = svgContainer.innerHTML;
var jsonString = JSON.stringify(svgText);

//console.log(jsonString);




// Get the svgString from JSON
//svgText = JSON.parse(jsonString);
//console.log(svgText)
