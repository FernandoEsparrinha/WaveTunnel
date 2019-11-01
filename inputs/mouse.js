function mouseWheel(event) {
  if (event.delta < 0) {
    rectangleWave.decreaseSpeed();
  } else {
    rectangleWave.increaseSpeed();
  }
}