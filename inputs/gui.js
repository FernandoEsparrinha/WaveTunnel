
function setupGUI() {
    var optionsGUI = { folded: isMobileDevice() }
    globalSettings = guiGlue(settingsGUI, optionsGUI)
    randomizeSettings()
}

function randomizeSettings() {
    globalSettings.colorMode = random(settingsGUI.colorMode.choices)
    globalSettings.wave.animation = random(settingsGUI.wave.animation.choices)
    globalSettings.rotation.animation = random(settingsGUI.rotation.animation.choices)
    globalSettings.background.hue = random(settingsGUI.background.hue.min, settingsGUI.background.hue.max)
    globalSettings.background.saturation = random(settingsGUI.background.saturation.min, settingsGUI.background.saturation.max)
    globalSettings.background.value = random(settingsGUI.background.value.min, settingsGUI.background.value.max)
    globalSettings.wave.speed = random(settingsGUI.wave.speed.min, globalSettings.wave.speed.max).toFixed(2)
    globalSettings.wave.weigth = random(0,1).toFixed(2)
    globalSettings.wave.sides = random(3, 10).toFixed(0)
    globalSettings.rotation.rotationSpeed = random(globalSettings.rotation.rotationSpeed.min, globalSettings.rotation.rotationSpeed.max)
    globalSettings.settings.autoMode = true
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
            value: false,
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
            choices: ['linear', 'sin', 'cos'],
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
            value: function () { activeWave.addWaves(1, { rotate: globalSettings.rotation.rotate }) }
        },
        remove: {
            value: function () { activeWave.removeWaves(1) }
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
        animation: {
            display: 'selector',
            value: 'sin',
            choices: ['linear', 'sin', 'cos', 'abs', 'ease'],
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