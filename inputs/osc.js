// function sendOsc() {
//     console.log("sending message")
//     this.oscPort.send({
//         address: "/syntien/wavetunnel/1/test",
//         args: ["world"]
//     })
//     console.log("sent")
// }


// Compor as funcoes de maneira a o utilizador poder escolher qual funcao quer adicionar ou remover 
// Ordenares as funcoes, genero ordem de entrada 
function setupOsc() {
    this.oscPort = new osc.WebSocketPort({
        url: "ws://localhost:8081"
    })

    console.log("Openning port !")
    this.oscPort.open()

    this.oscPort.on("message", function (data, timeTag, event) {
        var address = data.address.substring('/syntien/wavetunnel/1/'.length)
        var args = data.args

        if (address.startsWith("wave")) {
            var component = address.substring('wave/'.length)
            switch (component) {
                case "auto":
                    if (!args[0])
                        globalSettings.settings.autoMode = args[1]
                    break
                case "add":
                    if (!args[0])
                        activeWave.addWaves(1, { rotate: globalSettings.rotation.rotate })
                    break
                case "remove":
                    if (!args[0])
                        activeWave.removeWaves(1)
                    break
                case "reset":
                    activeWave.reset()
                    break
                case "weight":
                    globalSettings.wave.weigth = map(args[0], 0, 1, 0.001, 0.5)
                    break
                case "speedScale":
                    globalSettings.wave.speed = map(args[0], 0, 1, -0.5, 0.5)
                    break
                case "speedRotation":
                    globalSettings.rotation.rotationSpeed = map(args[0], 0, 1, -1, 1)
                    break
                case "rotation":
                    if (!args[0])
                        globalSettings.rotation.rotate = args[1]
                    break
                case "sides":
                    if (!args[0])
                        globalSettings.wave.sides = Math.round(map(args[1], 0, 9, 3, 10))
                    break
                case "color":
                    if (!args[0])
                        globalSettings.colorMode = settingsGUI.colorMode.choices[args[1]]
                    break
                case "XrangeValues":
                    rangeValues.minVariableX = map(args[0], 0, 1, 0, 50)
                    rangeValues.maxVariableX = map(args[1], 0, 1, 0, 50)
                    break
                case "XrangeValues":
                    rangeValues.minVariableY = map(args[0], 0, 1, -360, 360)
                    rangeValues.maxVariableY = map(args[1], 0, 1, -360, 360)
                    break
                default:
                    break
            }
        }

        if (address.startsWith("background")) {
            var component = address.substring('background/'.length)
            switch (component) {
                case "hue":
                    globalSettings.background.hue = map(args[0], 0, 1, 0, 255)
                    break
                case "saturation":
                    globalSettings.background.saturation = map(args[0], 0, 1, 0, 255)
                    break
                case "value":
                    globalSettings.background.value = map(args[0], 0, 1, 0, 255)
                    break
                default:
                    break
            }
        }
    })
}