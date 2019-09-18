// let lineWave;
let rectangleWave;

function setup() {
  console.log("Setting up wave tunnel..");
  console.log("Creating canvas");
  createCanvas(windowWidth, windowHeight);
  console.log("Width: "+ windowWidth);
  console.log("Height: "+ windowHeight);
  
  rectangleWave = new RectangleWave();
  // lineWave = new LineWave();
}

function draw() {
  background(backgroundColor);
  rectangleWave.display();
  // lineWave.display();
  
}