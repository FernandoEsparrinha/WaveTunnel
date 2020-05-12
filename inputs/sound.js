
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

    // globalSettings.rotation.rotationSpeed = map(spectrum[0], 0, 255, -1, 1);
    globalSettings.rotation.rotationSpeed += ease(globalSettings.rotation.rotationSpeed, map(spectrum[0], 0, 255, -3, 2));
    globalSettings.wave.speed += ease(globalSettings.wave.speed, waveform[0] * 50);

}
