function keyTyped() {

  if (keyCode === 49) {
    colorMode = 0;
  }
  if (keyCode === 50) {
    colorMode = 1;
  }
  if (keyCode === 51) {
    colorMode = 2;
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