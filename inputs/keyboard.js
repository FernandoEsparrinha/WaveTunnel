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
  if (keyCode === 32) {
    rectangleWave.reset();
  }

  return false;
}

function keyboardWaveControl() {
  if (keyIsDown(UP_ARROW)) {
    rectangleWave.addWaves(1);
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