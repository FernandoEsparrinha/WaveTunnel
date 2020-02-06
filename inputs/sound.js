let isSoundActive = false;
function setSound() {
    isSoundActive = true;

    if (isMobileDevice()) {
        mic = new p5.AudioIn()
        mic.start();
        // fft = new p5.FFT(mic);
    } else {
        song.play();
        fft = new p5.FFT();
    }
}

let spectrum;
let waveform;

function drawSound() {
    if (isMobileDevice()) {
        dx = map(mic.getLevel(), 0, 1, -2, 1) - globalSettings.rotation.rotationSpeed;
        globalSettings.rotation.rotationSpeed += dx * easing;

        dx = map(mic.getLevel(), 0, 1, -4, 4) - globalSettings.wave.speed;
        globalSettings.wave.speed += dx * easing;
    } else {
        spectrum = fft.analyze();
        waveform = fft.waveform();

        dx = map(spectrum[0], 0, 255, -2, 1) - globalSettings.rotation.rotationSpeed;
        globalSettings.rotation.rotationSpeed += dx * easing;

        dx = waveform[0] * 5 - globalSettings.wave.speed;
        globalSettings.wave.speed += dx * easing;
    }
}
