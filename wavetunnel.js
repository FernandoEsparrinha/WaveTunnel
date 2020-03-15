p5.disableFriendlyErrors = true;

function preload() {
  // song = loadSound('assets/SocialConstruct.mp3');
  song = loadSound('assets/TameImpala.mp3');
}

function setup() {
  console.group("Wavetunnel");
  console.log("Welcome to WaveTunnel !!");
  console.log("Feel free to add your own piece of code into the repo ! ");
  console.log("https://github.com/FernandoPinto/WaveTunnel ");
  console.groupEnd();

  if (isMobileDevice()) {
    createCanvas(windowWidth, windowHeight);
  } else {
    createCanvas(windowWidth, windowHeight);
    // createCanvas(1080, 1080);
    // The following command will transform every frame captured by CCapture into an mp4 video
    // ffmpeg -r 30 -f image2 -s 1080x1080 -i "%07d.jpg" -vcodec libx264 -crf 17 -pix_fmt yuv420p output.mp4
    capturer = new CCapture({ format: 'jpg', framerate: 30, name: 'Wavetunnel-' + Date.now(), verbose: false });
  }

  setupSound();
  setGUI();

  // rectangleWave = new LineWave();
  rectangleWave = new PolygonWave();
  // rectangleWave = new TextWave();
}

function draw() {
  colorMode(HSB);
  background(globalSettings.background.hue, globalSettings.background.saturation, globalSettings.background.value);

  if (isSoundActive) {
    drawSound();
  }

  globalSettings.settings.fps = frameRate().toFixed(2);
  globalSettings.settings.numberOfWaves = rectangleWave.waves.length;

  rectangleWave.addWaves(1);
  rectangleWave.speed = globalSettings.wave.speed;
  rectangleWave.display();

  if (isMobileDevice()) {
    drawMobile();
  } else {
    capturer.capture(document.getElementById('defaultCanvas0'));
  }

  keyboardWaveControl();
}

function drawMobile() {
  rectangleWave.addWaves(1);
}