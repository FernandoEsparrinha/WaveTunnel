WebMidi.enable(function (err) {
    if (err) {
        console.log("WebMidi could not be enabled.", err);
    } else {
        console.log("WebMidi enabled!");
    }

    console.log(WebMidi.inputs);
    console.log(WebMidi.outputs);
    var input = WebMidi.inputs[0];

    input.addListener('controlchange', "all",
        function (e) {
            if (e.data[1] == 1) {
                settings.backgroundColor[0] = e.data[2]
            }
            if (e.data[1] == 2) {
                settings.backgroundColor[1] = e.data[2]
            }
            if (e.data[1] == 3) {
                settings.backgroundColor[2] = e.data[2]
            }

            if (e.data[1] == 4) {
                rectangleWave.speed = (e.data[2] - 63) / 100;
            }
            if (e.data[1] == 8) {
                rotationSpeed = (e.data[2] - 63) / 10;
            }

            if (settings.debugMode) {
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
            console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
        }
    );

});