function mouseWheel(event) {
  if (event.delta < 0) {
    globalSettings.wave.speed += 0.001;
  } else {
    globalSettings.wave.speed -= 0.001;
  }
}