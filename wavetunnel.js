p5.disableFriendlyErrors = true;

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
  rectangleWave = new RectangleWave();
}

function draw() {
  colorMode(HSB);
  background(globalSettings.background.hue, globalSettings.background.saturation, globalSettings.background.value);

  rectangleWave.speed = globalSettings.wave.speed;

  if (globalSettings.debugMode && !isMobileDevice()) {
    let fps = frameRate();
    fill(255);
    stroke(0);
    text('Version 1.0.0', 10, height - 70);
    text("1st Wave speed: " + rectangleWave.waves[0].speed, 10, height - 50);
    text("Waves: " + rectangleWave.waves.length, 10, height - 30);
    text("FPS: " + fps.toFixed(2), 10, height - 10);
  }

  if (isMobileDevice()) {
    drawMobile();
  } else {
    textSize(16);
    stroke(255, 255, 255);
    fill(255);
    text('fernandopinto.github.io/WaveTunnel', windowWidth - 270, windowHeight - 10);
  }

  rectangleWave.display();

  keyboardWaveControl();
}

function drawMobile() {
  let chance = random() * 1000;
  if (chance < 300) {
    rectangleWave.addWaves(1);
  } else if (chance < 500) {
    rectangleWave.removeWaves(1);
  }
}