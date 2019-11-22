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

            if (e.data[1] == 1 || e.data[1] == 2 || e.data[1] == 3) {
                let percentage = (100 * e.data[2]) / 127
                globalSettings.backgroundColor[e.data[1] - 1] = 255 * percentage / 100
            }

            if (e.data[1] == 4) {
                globalSettings.wave.speed = map(e.data[2], 0, 127, -1, 1);
            }

            if (e.data[1] == 8) {
                globalSettings.rotation.rotationSpeed = map(e.data[2], 0, 127, -2, 2);
            }

            if (e.data[1] == 7) {
                globalSettings.wave.weigth = map(e.data[2], 0, 127, 0.01, 1);
            }

            if (e.data[1] == 5) {
                translateX = map(e.data[2], 0, 127, 0, windowWidth);
            }

            if (e.data[1] == 6) {
                translateY = map(e.data[2], 0, 127, 0, windowHeight);
            }



            if (globalSettings.debugMode) {
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
            if (globalSettings.debugMode) {
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