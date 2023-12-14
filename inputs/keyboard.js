function keyTyped() {

  if (keyCode === 49) {
    globalSettings.colorMode = 'two-tone';
  }
  if (keyCode === 50) {
    globalSettings.colorMode = 'white';
  }
  if (keyCode === 51) {
    globalSettings.colorMode = 'random';
  }
  if (keyCode === 52) {
    globalSettings.colorMode = 'black-white';
  }
  if (keyCode === 53) {
    globalSettings.colorMode = 'rainbow';
  }
  if (keyCode === 192) {
    song.play();
  }
  if (keyCode === 32) {
    rectangleWave.reset();
  }

  if (keyCode === 13) {
    if (isRecording) {
      console.log("⏹ Stopped recording !")
      capturer.stop()
      isRecording = 0
      capturer.save()
    } else {
      console.log("⏺ Recording !")
      capturer.start()
      isRecording = 1
    }

  }

  return false;
}

function keyboardWaveControl() {
  if (keyIsDown(UP_ARROW)) {
    rectangleWave.addWaves(1, { rotate: globalSettings.rotation.rotate });
  }
  if (keyIsDown(DOWN_ARROW)) {
    rectangleWave.removeWaves(1);
  }
  if (keyIsDown(LEFT_ARROW)) {
    globalSettings.wave.speed -= 0.01;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    globalSettings.wave.speed += 0.01;
  }
}