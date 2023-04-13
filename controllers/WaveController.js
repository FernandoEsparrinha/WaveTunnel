const waveForms = {
    rectangle: () => { return new RectangleWave() },
    line: () => { return new LineWave() },
    polygon: () => { return new PolygonWave() },
    hourglass: () => { return new HourglassWave() },
    text: () => { return new TextWave() }
}

let activeWave = waveForms.polygon;

function changeWave(waveForm) {
    if (waveForms.hasOwnProperty(waveForm)) {
        activeWave = waveForms[waveForm];
    } else {
        console.error(`WaveController - Invalid wave form: ${waveForm}`);
    }
}