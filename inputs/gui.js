
function setupGUI() {
    var optionsGUI = { folded: isMobileDevice() }
    globalSettings = guiGlue(settingsGUI, optionsGUI)
}

let settingsGUI = {
    colorMode: {
        display: 'selector',
        value: 'white',
        choices: ['two-tone', 'white', 'black', 'random', 'black-white', 'rainbow'],
        listen: true
    },
    settings: {
        version: {
            value: "1.3.3"
        },
        fps: {
            value: 0,
            listen: true
        },
        numberOfWaves: {
            value: 0,
            listen: true
        },
        autoMode: {
            value: true,
            listen: true,
        }
    },
    background: {
        hue: {
            display: 'range',
            value: 0,
            min: 0,
            max: 255,
            step: 1,
            listen: true
        },
        saturation: {
            display: 'range',
            value: 0,
            min: 0,
            max: 255,
            step: 1,
            listen: true
        },
        value: {
            display: 'range',
            value: 0,
            min: 0,
            max: 255,
            step: 1,
            listen: true
        }
    },
    wave: {
        animation: {
            display: 'selector',
            value: 'sin',
            choices: ['linear', 'sin', 'cos', 'abs', 'ease'],
            listen: true
        },
        speed: {
            display: 'range',
            value: 0.02,
            min: -1,
            max: 1,
            step: 0.1,
            listen: true
        },
        weigth: {
            display: 'range',
            value: 0.01,
            min: 0.1,
            max: 1,
            step: 0.01,
            listen: true
        },
        add: {
            value: function () { rectangleWave.addWaves(1, { rotate: globalSettings.rotation.rotate }) }
        },
        remove: {
            value: function () { rectangleWave.removeWaves(1) }
        },
        sides: {
            display: 'range',
            value: 4,
            min: 3,
            max: 10,
            step: 1,
            listen: true
        }
    },
    rotation: {
        rotate: {
            value: true,
            listen: true
        },
        rotationSpeed: {
            display: 'range',
            value: 0.3,
            min: -1,
            max: 1,
            step: 0.1,
            listen: true
        }
    }

}