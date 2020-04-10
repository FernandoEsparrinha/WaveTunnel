p5.disableFriendlyErrors = true;

function preload() {
  // song = loadSound('assets/SocialConstruct.mp3');
  song = loadSound('assets/TameImpala.mp3')
}

function setup() {
  console.group("Wavetunnel")
  print("Welcome to WaveTunnel !!")
  print("Feel free to add your own piece of code into the repo ! ")
  print("https://github.com/FernandoPinto/WaveTunnel ")
  console.groupEnd()

  if (isMobileDevice()) {
    createCanvas(windowWidth, windowHeight)
  } else {
    createCanvas(windowWidth, windowHeight);
    // createCanvas(1080, 1080);
    // The following command will transform every frame captured by CCapture into an mp4 video
    // ffmpeg -r 30 -f image2 -s 1080x1080 -i "%07d.jpg" -vcodec libx264 -crf 17 -pix_fmt yuv420p output.mp4
    capturer = new CCapture({ format: 'jpg', framerate: 30, name: 'Wavetunnel-' + Date.now(), verbose: false })
  }

  if (isSoundActive) {
    setupSound()
  }
  if (isGuiActive) {
    setupGUI()
  }
  if (isWebMidiActive) {
    setupWebMidi()
  }
  if (isOscActive) {
    setupOsc()
  }


  // rectangleWave = new LineWave()
  rectangleWave = new PolygonWave()
  // rectangleWave = new TextWave()
}

function draw() {
  colorMode(HSB);
  background(globalSettings.background.hue, globalSettings.background.saturation, globalSettings.background.value);

    if (isSoundActive) {
      drawSound()
    }

    globalSettings.settings.fps = frameRate().toFixed(2)
    globalSettings.settings.numberOfWaves = rectangleWave.waves.length

    if (globalSettings.settings.autoMode) {
      rectangleWave.addWaves(1, { rotate: globalSettings.rotation.rotate })
    }

  // let count = map(frameCount % 300, 0, 300, -1, 1);
  // let variation = (sin(count / 4) * 4);
  // let variation = 0.5 - (1 / Math.PI) * acos(cos(count * Math.PI));
  // globalSettings.rotation.rotationSpeed += ease(globalSettings.rotation.rotationSpeed, variation * 2);
  // globalSettings.wave.speed += ease(globalSettings.wave.speed, Math.abs(variation / 10));

  rectangleWave.speed = globalSettings.wave.speed;
  rectangleWave.display();
    if (isMobileDevice()) {
      drawMobile()
    } else {
      capturer.capture(document.getElementById('defaultCanvas0'))
    }

    keyboardWaveControl()
  }
}

function drawMobile() {
  rectangleWave.addWaves(1, { rotate: true });
}