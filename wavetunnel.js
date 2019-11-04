p5.disableFriendlyErrors = true;
// let lineWave;
let rectangleWave;
let gui;
let rotationSpeed = 0;

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
  console.log("Width: " + windowWidth);
  console.log("Height: " + windowHeight);

  setGUI();
  cursor = new Cursor();
  rectangleWave = new RectangleWave();
  // lineWave = new LineWave();
}

function draw() {
  background(settings.backgroundColor);

  if (settings.debugMode) {
    let fps = frameRate();
    fill(255);
    stroke(0);
    text('Version 0.1.0', 10, height - 70);
    text("1st Wave speed: " + rectangleWave.waves[0].speed, 10, height - 50);
    text("Waves: " + rectangleWave.waves.length, 10, height - 30);
    text("FPS: " + fps.toFixed(2), 10, height - 10);
  }

  if (isMobileDevice()) {
    let chance = random() * 1000;
    if (chance < 300) {
      rectangleWave.increaseWaves();
    } else if (chance < 500) {
      rectangleWave.decreaseWaves();
      if (random(10) < 1) {
        settings.colorMode = ["white", "random", "two-tone"][floor(random(3))];
      }
    } else if (chance < 750) {
      rectangleWave.decreaseSpeed();
    } else {
      rectangleWave.increaseSpeed();
    }
  } else {
    textSize(16);
    stroke(255, 255, 255);
    fill(255);
    text('fernandopinto.github.io/WaveTunnel', windowWidth - 270, windowHeight - 10);
  }

  push();
  if (settings.rotate) {
    translate(windowWidth / 2, windowHeight / 2);
    rotate(radians(frameCount * rotationSpeed));
    translate(-(windowWidth / 2), -(windowHeight / 2));
  }
  rectangleWave.display();
  pop();

  // WAVES
  cursor.display();
  keyboardWaveControl();
}
