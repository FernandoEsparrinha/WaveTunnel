function keyTyped() {

  if (keyCode === 49) {
    settings.colorMode = 'white';
  }
  if (keyCode === 50) {
    settings.colorMode = 'random';
  }
  if (keyCode === 51) {
    settings.colorMode = 'colorful';
  }
  if (keyCode === 32) {
    rectangleWave.reset();
  }

  return false;
}

function keyboardWaveControl() {
  if (keyIsDown(UP_ARROW)) {
    rectangleWave.increaseWaves();
  }
  if (keyIsDown(DOWN_ARROW)) {
    rectangleWave.decreaseWaves();
  }
  if (keyIsDown(LEFT_ARROW)) {
    rectangleWave.speed -= 0.1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rectangleWave.speed += 0.1;
  }
}