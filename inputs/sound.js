let isSoundActive = false;
function setSound() {
    isSoundActive = true;

    if (isMobileDevice()) {
        fft = new p5.FFT(mic);
    } else {
        song.play();
        fft = new p5.FFT();
    }
}

let spectrum;
let waveform;

function drawSound() {
    spectrum = fft.analyze();
    waveform = fft.waveform();

    dx = map(spectrum[0], 0, 255, -2, 1) - globalSettings.rotation.rotationSpeed;
    globalSettings.rotation.rotationSpeed += dx * easing;

    dx = waveform[0] * 5 - globalSettings.wave.speed;
    globalSettings.wave.speed += dx * easing;
}
