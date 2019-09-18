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
  if(isMobileDevice()){
    background(255);
  } else {
    background(backgroundColor);
  }

  // circle(windowWidth/2, windowHeight/2, 5);

  rectangleWave.display();
  // lineWave.display();
  
}