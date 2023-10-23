class Tile {
  url;
  constructor(url) {
    this.url = url
  }
}

const urls = [
  "assets/tile1.png",
  "assets/tile2.png",
  "assets/tile3.png",
  "assets/tile4.png",
  "assets/tile5.png",
  "assets/tile6.png",
  "assets/tile7.png",
  //"assets/tree.png",
];

let currentUrl = 0; // index of tiles
let click = false;
let design = [[]];

const svg = document.getElementById("svg");
const svgContainer = document.getElementById("svgContainer");

const saveButton: HTMLButtonElement = document.createElement("button");
saveButton.className = "saveButton";
saveButton.type = "button";
saveButton.innerHTML = "save";
saveButton.addEventListener("click", save);

svg.setAttribute("width", 320);
svg.setAttribute("height", 400);

svgContainer.appendChild(svg);
svgContainer.append(saveButton);

createGrid(32, 32);
createPalette();



function create(elementNone) {
  return document.createElementNS("http://www.w3.org/2000/svg", elementNone);
}

function createGrid(width, height) {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      
      const tile = create("image");

      const tileContent = new Tile(currentUrl)
      design[i] = []
      
      tile.addEventListener("mouseover", function () {
        if (click == true) {
          tile.setAttributeNS(null, "x", this.getAttribute("x"));
          tile.setAttributeNS(null, "y", this.getAttribute("y"));
          tile.setAttributeNS(null, "width", this.getAttribute("width"));
          tile.setAttributeNS(null, "height", this.getAttribute("height"));
          tile.setAttributeNS(null, 'visibility', 'visible');
          tile.setAttributeNS('http://www.w3.org/1999/xlink', "href", urls[currentUrl])
          tileContent.url = currentUrl
          design[i][j] = tileContent
        }
      });
      
      tile.addEventListener("mousedown", function () {
        click = true;
        tile.setAttributeNS(null, "x", this.getAttribute("x"));
        tile.setAttributeNS(null, "y", this.getAttribute("y"));
        tile.setAttributeNS(null, "width", this.getAttribute("width"));
        tile.setAttributeNS(null, "height", this.getAttribute("height"));
        tile.setAttributeNS(null, 'visibility', 'visible');
        tile.setAttributeNS('http://www.w3.org/1999/xlink', "href", urls[currentUrl])
        tileContent.url = currentUrl
        design[i][j] = tileContent
      });
      
      tile.addEventListener("mouseup", function () {
        click = false;
      });
      
      tile.setAttributeNS(null, "x", i*10);
      tile.setAttributeNS(null, "y", j*10);
      tile.setAttributeNS(null, "width", 10);
      tile.setAttributeNS(null, "height", 10);
      tile.setAttributeNS(null, 'visibility', 'visible');
      tile.setAttributeNS('http://www.w3.org/1999/xlink', "href", urls[currentUrl])
      
      design[i][j] = tileContent

      svg?.append(tile)
    }
  }
}

function createPalette() {
  for (let k = 0; k < urls.length; k++) {
    const color = create("image");
    
    color.addEventListener("click", function () {
      currentUrl = k;
    });

    color.setAttributeNS(null, "x", k * 37);
    color.setAttributeNS(null, "y", 320 + 20);
    color.setAttributeNS(null, "width", 35);
    color.setAttributeNS(null, "height", 35);
    color.setAttributeNS(null, 'visibility', 'visible');
    color.setAttributeNS('http://www.w3.org/1999/xlink', "href", urls[k])

    svg.append(color)
  }
}

function save() {
  console.log(design)
}


