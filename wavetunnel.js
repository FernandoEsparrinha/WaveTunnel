p5.disableFriendlyErrors = true

function preload() {
  // song = loadSound('assets/SocialConstruct.mp3')
  // song = loadSound('assets/TameImpala.mp3')
}

function setup() {
  console.group("Wavetunnel")
  print("Welcome to WaveTunnel !!")
  print("Feel free to add your own piece of code into the repo ! ")
  print("https://github.com/FernandoPinto/WaveTunnel ")
  console.groupEnd()

  createCanvas(windowWidth, windowHeight)
  
  if (!isMobileDevice()) {
    // createCanvas(1080, 1080)
    // createCanvas(1920, 1080)

    // Command to unzip the frames from the .tar archive
    // tar -xvf Wavetunnelxyz.tar

    // Command to transform every frame captured by CCapture into an mp4 video
    // ffmpeg -r 30 -f image2 -s 1080x1920 -i "%07d.jpg" -vcodec libx264 -crf 17 -pix_fmt yuv420p output.mp4
    
    capturer = new CCapture({
      format: RECORDING_CONFIG.FORMAT,
      framerate: RECORDING_CONFIG.FRAMERATE,
      name: RECORDING_CONFIG.NAME_PREFIX + Date.now(),
      verbose: false
    })
  }

  if (isSoundActive) {
    setupSound()
  }
  
  if (isGuiActive) {
    setupGUI()
  }
  
  if (isWebMidiActive) {
    //setupWebMidi()
    WebMidiController()
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

  // Initialize active wave
  activeWave = WaveController.createWave()
}

function draw() {
  if (focused) {
    colorMode(HSB)
    background(globalSettings.background.hue, globalSettings.background.saturation, globalSettings.background.value)

    if (isSoundActive) {
      drawSound()
    }

    globalSettings.settings.fps = frameRate().toFixed(2)
    globalSettings.settings.numberOfWaves = activeWave.waves.length

    if (globalSettings.settings.autoMode) {
      activeWave.addWaves(1, { rotate: globalSettings.rotation.rotate })
    }

    activeWave.speed = globalSettings.wave.speed / 4
    activeWave.display()

    if (isMobileDevice()) {
      drawMobile()
    } else {
      capturer.capture(document.getElementById('defaultCanvas0'))
    }

    keyboardWaveControl()
    // storeItem('settings', globalSettings)
    // storeItem('variables', rangeValues)
  }
}

function drawMobile() {
  activeWave.addWaves(1, { rotate: globalSettings.rotation.rotate })
}