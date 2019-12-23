p5.disableFriendlyErrors = true;
let fps;

function setup() {
  console.group("Wavetunnel");
  console.log("Welcome to WaveTunnel !!");
  console.log("Feel free to add your own piece of code into the repo ! ");
  console.log("https://github.com/FernandoPinto/WaveTunnel ");
  console.groupEnd();

  console.group("Setup")
  console.log("Setting up wave tunnel..");

  console.group("Canvas");
  createCanvas(windowWidth, windowHeight);
  console.log("Width: " + windowWidth);
  console.log("Height: " + windowHeight);
  console.groupEnd();

  console.groupEnd();

  setGUI();
  rectangleWave = new PolygonWave();
}

function draw() {

  colorMode(HSB);
  background(globalSettings.background.hue, globalSettings.background.saturation, globalSettings.background.value);

  rectangleWave.speed = globalSettings.wave.speed;

  if (globalSettings.settings.debugMode && !isMobileDevice()) {
    globalSettings.settings.fps = frameRate().toFixed(2);
    globalSettings.settings.numberOfWaves = rectangleWave.waves.length;
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