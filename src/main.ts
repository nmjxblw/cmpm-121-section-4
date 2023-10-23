const urls = [
  "/public/assets/tile1.png",
  "/public/assets/tile2.png",
  "/public/assets/tile3.png",
  "/public/assets/tile4.png",
  "/public/assets/tile5.png",
  "/public/assets/tile6.png",
  "/public/assets/tile7.png",
];

let currentTile = 0; // index referring to Tile
let design: number[][] = [[]];

const svg: HTMLElement = create("svg");
const svgContainer: HTMLElement | null =
  document.getElementById("svgContainer");

const saveButton: HTMLButtonElement = document.createElement("button");
saveButton.className = "saveButton";
saveButton.type = "button";
saveButton.innerHTML = "save";
saveButton.addEventListener("click", save);

if (svgContainer != null) {
  svg.setAttribute("width", "320");
  svg.setAttribute("height", "400");
  svgContainer.appendChild(svg);
  svgContainer.append(saveButton);
}

createGrid(32, 32);
createPalette();

function create(elementNone: any) {
  return document.createElementNS("http://www.w3.org/2000/svg", elementNone);
}

function createGrid(width: number, height: number) {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const tile = create("image");
      design[i] = [];

      // updating grid
      tile.addEventListener("click", function (this: any) {
        tile.setAttributeNS(null, "x", this.getAttribute("x"));
        tile.setAttributeNS(null, "y", this.getAttribute("y"));
        tile.setAttributeNS(null, "width", this.getAttribute("width"));
        tile.setAttributeNS(null, "height", this.getAttribute("height"));
        tile.setAttributeNS(null, "visibility", "visible");
        tile.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          urls[currentTile],
        );
        design[i][j] = currentTile;
      });

      // initializing grid
      tile.setAttributeNS(null, "x", i * 10);
      tile.setAttributeNS(null, "y", j * 10);
      tile.setAttributeNS(null, "width", 10);
      tile.setAttributeNS(null, "height", 10);
      tile.setAttributeNS(null, "visibility", "visible");
      tile.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "href",
        urls[currentTile],
      );

      design[i][j] = currentTile;

      svg.append(tile);
    }
  }
}

function createPalette() {
  for (let k = 0; k < urls.length; k++) {
    const color = create("image");

    // selector
    color.addEventListener("click", function () {
      currentTile = k;
    });

    // initializing selectable tiles
    color.setAttributeNS(null, "x", k * 37);
    color.setAttributeNS(null, "y", 320 + 20);
    color.setAttributeNS(null, "width", 35);
    color.setAttributeNS(null, "height", 35);
    color.setAttributeNS(null, "visibility", "visible");
    color.setAttributeNS("http://www.w3.org/1999/xlink", "href", urls[k]);

    svg.append(color)
  }
}

function save() {
  console.log(design);
}
