// let lineWave;
let rectangleWave;

function setup() {
  console.log("------------------------");
  console.log("/ Welcome to WaveTunnel \\");
  console.log("↑ adds rectangles");
  console.log("⬇️ removes rectangles");
  console.log("→ increases speed");
  console.log("← reduces speed");
  console.log("1 White mode");
  console.log("2 Rainbow mode");
  console.log("3 RGB mode");
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
    let chance = random()*1000;
    if (chance < 300) {
      rectangleWave.increaseWaves();
    } else if (chance < 500){
      rectangleWave.decreaseWaves();
      if(random(10)<1){
        colorMode = floor(random(3));
        console.log(colorMode)
      }
    } else if (chance < 750){
      rectangleWave.decreaseSpeed();
    } else {
      rectangleWave.increaseSpeed();
    }
  } else {
    textSize(16);
    stroke(255,255,255);
    fill(255);
    text('fernandopinto.github.io/WaveTunnel', windowWidth - 270, windowHeight - 10);

    drawLine(0, windowHeight/2, windowWidth, windowHeight/2);
    circle(mouseX,mouseY,5);
  }

  rectangleWave.display();
  // lineWave.display();
  
}