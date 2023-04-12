p5.disableFriendlyErrors = true;

function preload() {
  // song = loadSound('assets/SocialConstruct.mp3')
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
    createCanvas(windowWidth, windowHeight)
    // createCanvas(1080, 1080)
    // createCanvas(4096, 2160)
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
    //setupWebMidi()
    webMidiController()
  }
  if (isOscActive) {
    setupOsc()
  }

  // if (getItem('settings') != null) {
  //   globalSettings = getItem('settings')
  // }
  // if (getItem('variables') != null) {
  //   rangeValues = getItem('variables')
  // }

  // rectangleWave = new LineWave()
  rectangleWave = new PolygonWave()
  // rectangleWave = new TextWave()
}

function draw() {
  if (focused) {
    colorMode(HSB)
    background(globalSettings.background.hue, globalSettings.background.saturation, globalSettings.background.value)

    if (isSoundActive) {
      drawSound()
    }

    globalSettings.settings.fps = frameRate().toFixed(2)
    globalSettings.settings.numberOfWaves = rectangleWave.waves.length

    if (globalSettings.settings.autoMode) {
      rectangleWave.addWaves(1, { rotate: globalSettings.rotation.rotate })
    }

    rectangleWave.speed = globalSettings.wave.speed
    rectangleWave.display()

    if (isMobileDevice()) {
      drawMobile()
    } else {
      capturer.capture(document.getElementById('defaultCanvas0'))
    }

    keyboardWaveControl()
    // storeItem('settings', globalSettings)
    // storeItem('variables', rangeValues)
    // storeItem('scaleAnimationFunctions', scaleAnimationFunctions)
    // storeItem('rotateAnimationFunctions', rotateAnimationFunctions)
  }
}

function drawMobile() {
  rectangleWave.addWaves(1, { rotate: true })
}