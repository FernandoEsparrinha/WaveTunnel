
let musicSettings = {
    play: {
        value: function () { song.play(); }
    },
    stop: {
        value: function () { song.stop(); }
    }
}


function setupSound() {

    settingsGUI["music"] = musicSettings;

    song.play();
    fft = new p5.FFT();
}

let spectrum;
let waveform;

function drawSound() {
    spectrum = fft.analyze();
    waveform = fft.waveform();

    dx = map(spectrum[0], 0, 255, -2, 1) - globalSettings.rotation.rotationSpeed;
    globalSettings.rotation.rotationSpeed += dx * easing;
    // globalSettings.rotation.rotationSpeed = map(spectrum[0], 0, 255, -1, 1);

    dx = waveform[0] * 5 - globalSettings.wave.speed;
    globalSettings.wave.speed += dx * 0.02;

}
