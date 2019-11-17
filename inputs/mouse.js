function mouseWheel(event) {
  if (event.delta < 0) {
    rectangleWave.speed += 0.001;
  } else {
    rectangleWave.speed -= 0.001;
  }
}