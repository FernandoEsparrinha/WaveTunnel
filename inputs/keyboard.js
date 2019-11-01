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

  return false;
}

function controlWave() {
  if (keyIsDown(UP_ARROW)) {
    rectangleWave.increaseWaves();
  }
  if (keyIsDown(DOWN_ARROW)) {
    rectangleWave.decreaseWaves();
  }
  if (keyIsDown(LEFT_ARROW)) {
    rectangleWave.decreaseSpeed();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rectangleWave.increaseSpeed();
  }
}