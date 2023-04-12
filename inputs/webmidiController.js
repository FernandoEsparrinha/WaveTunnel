

function WebMidiController() {
    WebMidi
        .enable()
        .then(onEnabled)
        .catch(err => alert(err))
}


function onEnabled() {

    if (WebMidi.inputs.length < 1) {
        console.log("No Midi Devices")
    } else {
        console.log("Midi Devices found")
        console.log(WebMidi.inputs)

        var input = WebMidi.inputs[0]

        input.addListener('programchange', "all",
            function (e) {
                // TO DO - IMPLEMENT NEW FORMS DEPENDING ON THE PROGRAM 
                console.log(e)
            }
        );

        input.addListener('controlchange', "all",
            function (e) {
                console.log(e.data[1])

                // BACKGROUND COLOR
                if (e.data[1] == 70) {
                    globalSettings.background.hue = map(e.data[2], 0, 127, 0, 255);
                }
                if (e.data[1] == 71) {
                    globalSettings.background.saturation = map(e.data[2], 0, 127, 0, 255);
                }
                if (e.data[1] == 72) {
                    globalSettings.background.value = map(e.data[2], 0, 127, 0, 255);
                }

                // WAVE CONTROL
                if (e.data[1] == 74) {
                    globalSettings.wave.speed = map(e.data[2], 0, 127, -1, 1);
                }

                if (e.data[1] == 75) {
                    globalSettings.wave.sides = Math.round(map(e.data[2], 0, 127, 3, 10));
                }

                if (e.data[1] == 76) {
                    globalSettings.wave.weigth = map(e.data[2], 0, 127, 0.01, 1);
                }

                if (e.data[1] == 77) {
                    globalSettings.rotation.rotationSpeed = map(e.data[2], 0, 127, -1, 1);
                }
            }
        );

        input.addListener('noteon', "all",
            function (e) {
                console.log(e)

                if (e.note.name == "G" && e.note.octave == "2") {
                    rectangleWave.addWaves(1);
                }
                if (e.note.name == "D#" && e.note.octave == "2") {
                    rectangleWave.removeWaves(1);
                }
                if (e.note.name == "F#" && e.note.octave == "2") {
                    rectangleWave.addWaves(10);
                }
                if (e.note.name == "D" && e.note.octave == "2") {
                    rectangleWave.removeWaves(10);
                }
                if (e.note.name == "F" && e.note.octave == "2") {
                    rectangleWave.addWaves(100);
                }
                if (e.note.name == "C#" && e.note.octave == "2") {
                    rectangleWave.removeWaves(100);
                }
                if (e.note.name == "C" && e.note.octave == "2") {
                    globalSettings.rotation.rotate = !globalSettings.rotation.rotate;
                }
            }
        )
    }
};