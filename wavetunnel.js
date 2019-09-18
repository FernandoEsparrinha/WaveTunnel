// let lineWave;
let rectangleWave;

function setup() {
  console.log("------------------------");
  console.log("/ Welcome to WaveTunnel \\");
  console.log("↑ adds rectangles");
  console.log("⬇️ removes rectangles");
  console.log("→ increases speed");
  console.log("← reduces speed");
  console.log("------------------------");

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

  // circle(windowWidth/2, windowHeight/2, 5);

  if(isMobileDevice()){
    let chance = Math.random()*1000;
    if (chance < 400) {
      rectangleWave.increaseWaves();
    } else if (chance < 500){
      rectangleWave.decreaseWaves();
    } else if (chance < 600){
      rectangleWave.decreaseSpeed();
    } else {
      rectangleWave.increaseSpeed();
    }
  }

  rectangleWave.display();
  // lineWave.display();
  
}