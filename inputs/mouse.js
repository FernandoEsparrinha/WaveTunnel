function mouseWheel(event) {
  if (event.delta < 0) {
    globalSettings.wavetunnel.wave.speed += 0.01;
  } else {
    globalSettings.wavetunnel.wave.speed -= 0.01;
  }
}