WebMidi.enable(function (err) {
    if (err) {
        console.log("WebMidi could not be enabled.", err);
    } else {
        console.log("WebMidi enabled!");
    }

    // console.log(WebMidi.inputs);
    // console.log(WebMidi.outputs);
    var input = WebMidi.inputs[0];

    input.addListener('programchange', "all",
        function (e) {
            // TO DO - IMPLEMENT NEW FORMS DEPENDING ON THE PROGRAM 
            console.log(e.data[1])
        }
    );

    input.addListener('controlchange', "all",
        function (e) {
            // BACKGROUND COLOR
            if (e.data[1] == 1) {
                globalSettings.background.hue = map(e.data[2], 0, 127, 0, 255);
            }
            if (e.data[1] == 2) {
                globalSettings.background.saturation = map(e.data[2], 0, 127, 0, 255);
            }
            if (e.data[1] == 3) {
                globalSettings.background.value = map(e.data[2], 0, 127, 0, 255);
            }

            // WAVE CONTROL
            if (e.data[1] == 4) {
                globalSettings.wave.speed = map(e.data[2], 0, 127, -1, 1);
            }

            if (e.data[1] == 6) {
                globalSettings.wave.sides = Math.round(map(e.data[2], 0, 127, 3, 10));
            }

            if (e.data[1] == 7) {
                globalSettings.wave.weigth = map(e.data[2], 0, 127, 0.01, 1);
            }

            if (e.data[1] == 8) {
                globalSettings.rotation.rotationSpeed = map(e.data[2], 0, 127, -1, 1);
            }

            if (globalSettings.settings.debugMode) {
                console.log("--------------------");
                console.log("Controller name -> " + e.controller.name);
                console.log("Controller number -> " + e.controller.number);
                console.log("Data -> " + e.data);
                console.log("Value -> " + e.value);
            }
        }
    );

    input.addListener('noteon', "all",
        function (e) {
            if (globalSettings.settings.debugMode) {
                console.log("Received 'noteon' message (" + e.note.name + " - " + e.note.octave + ").");
            }
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
    );

});