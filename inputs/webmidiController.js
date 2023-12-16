

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

                switch (e.data[1]) {
                    // BACKGROUND COLOR
                    case 70:
                        globalSettings.background.hue = map(e.data[2], 0, 127, 0, 255);
                        break;
                    case 71:
                        globalSettings.background.saturation = map(e.data[2], 0, 127, 0, 255);
                        break;
                    case 72:
                        globalSettings.background.value = map(e.data[2], 0, 127, 0, 255);
                        break;
                    case 73:
                        break;
                    // WAVE CONTROL
                    case 74:
                        globalSettings.wave.speed = map(e.data[2], 0, 127, -1, 1);
                        break;
                    case 75:
                        globalSettings.rotation.rotationSpeed = map(e.data[2], 0, 127, -1, 1);
                        break;
                    case 76:
                        globalSettings.wave.weigth = map(e.data[2], 0, 127, 0.01, 1);
                        break;
                    case 77:
                        globalSettings.wave.sides = Math.round(map(e.data[2], 0, 127, 3, 10));
                        break;
                    default:
                        break;
                }
            }
        );

        input.addListener('noteon', "all",
            function (e) {
                console.log(e)
                /* console.log("Note " + e.note.name)
                console.log("Accidental " + e.note.accidental)
                console.log("Octaßve " + e.note.octave) */

                switch (e.note.name) {
                    case "A":
                        break
                    case "B":
                        break
                    case "C":
                        if (e.note.accidental == "#") {
                            activeWave.removeWaves(100)
                        } else {
                            globalSettings.rotation.rotate = !globalSettings.rotation.rotate
                        }
                        break
                    case "D":
                        if (e.note.accidental == "#") {
                            activeWave.removeWaves(1)
                        } else {
                            activeWave.removeWaves(10)
                        }
                        break
                    case "E":
                        if (e.note.accidental == "#") {
                        } else {
                            globalSettings.settings.autoMode = !globalSettings.settings.autoMode
                        }
                        break
                    case "F":
                        if (e.note.accidental == "#") {
                            activeWave.addWaves(10, { rotate: globalSettings.rotation.rotate })
                        } else {
                            activeWave.addWaves(100, { rotate: globalSettings.rotation.rotate })
                        }
                        break
                    case "G":
                        activeWave.addWaves(1, { rotate: globalSettings.rotation.rotate })
                        break
                    default:
                        break
                }
            }
        )
    }
};