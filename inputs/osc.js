// function sendOsc() {
//     console.log("sending message");
//     this.oscPort.send({
//         address: "/syntien/wavetunnel/1/test",
//         args: ["world"]
//     });
//     console.log("sent")
// }


// Compor as funcoes de maneira a o utilizador poder escolher qual funcao quer adicionar ou remover 
// Ordenares as funcoes, genero ordem de entrada 
function setupOsc() {
    this.oscPort = new osc.WebSocketPort({
        url: "ws://localhost:8081"
    });

    this.oscPort.open();

    this.oscPort.on("message", function (data, timeTag, event) {
        // console.group(data.address);
        // console.log(data.args);
        // console.groupEnd();

        var address = data.address.substring('/syntien/wavetunnel/1/'.length);
        var args = data.args;

        // console.group(address);
        // console.log("Data : " + args);
        // console.groupEnd();

        if (address.startsWith("wave")) {
            var component = address.substring('wave/'.length);
            switch (component) {
                case "auto":
                    if (!args[0])
                        autoMode = args[1];
                    break;
                case "add":
                    if (!args[0])
                        rectangleWave.addWaves(1, { rotate: globalSettings.rotation.rotate });
                    break;
                case "remove":
                    if (!args[0])
                        rectangleWave.removeWaves(1);
                    break;
                case "weight":
                    globalSettings.wave.weigth = map(args[0], 0, 1, 0.001, 0.5);
                    break;
                case "speedScale":
                    globalSettings.wave.speed = map(args[0], 0, 1, -0.5, 0.5);
                    break;
                case "speedRotation":
                    globalSettings.rotation.rotationSpeed = map(args[0], 0, 1, -1, 1);
                    break;
                case "rotation":
                    if (!args[0])
                        globalSettings.rotation.rotate = args[1];
                    break;
                case "sides":
                    if (!args[0])
                        globalSettings.wave.sides = Math.round(map(args[1], 0, 9, 3, 10));
                    break;
                case "color":
                    if (!args[0])
                        globalSettings.colorMode = settingsGUI.colorMode.choices[args[1]];
                    break;
                default:
                    break;
            };
        }
        if (address.startsWith("wave/scale")) {
            if (!args[0]) {
                scaleAnimationFunctions.set(address.substring('wave/scale/'.length), args[1])
            }
        }
        if (address.startsWith("wave/rotate")) {
            if (!args[0]) {
                rotateAnimationFunctions.set(address.substring('wave/rotate/'.length), args[1])
            }
        }

        if (address.startsWith("background")) {
            var component = address.substring('background/'.length);
            switch (component) {
                case "color":
                    console.log(args[0]);
                    switch (args[0]) {
                        case 0:
                            globalSettings.background.hue = map(args[1], 0, 1, 0, 255);
                            break;
                        case 1:
                            globalSettings.background.saturation = map(args[1], 0, 1, 0, 255);
                            break;
                        case 2:
                            globalSettings.background.value = map(args[1], 0, 1, 0, 255);
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        }


    });
}