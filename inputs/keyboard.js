function keyTyped() {

  if (keyCode === 49) {
    globalSettings.wavetunnel.colorMode = 'two-tone';
  }
  if (keyCode === 50) {
    globalSettings.wavetunnel.colorMode = 'white';
  }
  if (keyCode === 51) {
    globalSettings.wavetunnel.colorMode = 'random';
  }
  if (keyCode === 52) {
    globalSettings.wavetunnel.colorMode = 'black-white';
  }
  if (keyCode === 53) {
    globalSettings.wavetunnel.colorMode = 'rainbow';
  }
  if (keyCode === 192) {
    song.play();
  }
  if (keyCode === 32) {
    activeWave.reset();
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
    activeWave.addWaves(1, { rotate: globalSettings.wavetunnel.rotation.rotate });
  }
  if (keyIsDown(DOWN_ARROW)) {
    activeWave.removeWaves(1);
  }
  if (keyIsDown(LEFT_ARROW)) {
    globalSettings.wavetunnel.wave.speed -= 0.1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    globalSettings.wavetunnel.wave.speed += 0.1;
  }
}