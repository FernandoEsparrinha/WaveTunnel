function keyTyped() {

  if (keyCode === 49) {
    settings.colorMode = 'two-tone';
  }
  if (keyCode === 50) {
    settings.colorMode = 'white';
  }
  if (keyCode === 51) {
    settings.colorMode = 'random';
  }
  if (keyCode === 52) {
    settings.colorMode = 'black-white';
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
    rectangleWave.speed -= 0.01;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rectangleWave.speed += 0.01;
  }
}