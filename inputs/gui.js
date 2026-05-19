
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
    globalSettings.wave.weight = random(0, 1).toFixed(2)
    globalSettings.wave.sides = random(3, 10).toFixed(0)
    globalSettings.rotation.rotationSpeed = random(globalSettings.rotation.rotationSpeed.min, globalSettings.rotation.rotationSpeed.max)
    globalSettings.settings.autoMode = true
}

let settingsGUI = {
    colorMode: {
        display: 'selector',
        value: COLOR_CONFIG.DEFAULT_MODE,
        choices: COLOR_CONFIG.COLOR_MODES,
        listen: true
    },
    settings: {
        version: {
            value: VERSION
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
            value: BACKGROUND_DEFAULTS.HUE,
            min: 0,
            max: 255,
            step: 1,
            listen: true
        },
        saturation: {
            display: 'range',
            value: BACKGROUND_DEFAULTS.SATURATION,
            min: 0,
            max: 255,
            step: 1,
            listen: true
        },
        value: {
            display: 'range',
            value: BACKGROUND_DEFAULTS.VALUE,
            min: 0,
            max: 255,
            step: 1,
            listen: true
        }
    },
    wave: {
        animation: {
            display: 'selector',
            value: ANIMATION_FUNCTIONS.SIN,
            choices: [ANIMATION_FUNCTIONS.LINEAR, ANIMATION_FUNCTIONS.SIN, ANIMATION_FUNCTIONS.COS, ANIMATION_FUNCTIONS.ABS, ANIMATION_FUNCTIONS.EASE],
            listen: true
        },
        speed: {
            display: 'range',
            value: WAVE_DEFAULTS.SPEED,
            min: -1,
            max: 1,
            step: 0.1,
            listen: true
        },
        weight: {
            display: 'range',
            value: WAVE_DEFAULTS.WEIGHT,
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
            value: WAVE_DEFAULTS.SIDES,
            min: 3,
            max: 10,
            step: 1,
            listen: true
        }
    },
    rotation: {
        rotate: {
            value: ROTATION_DEFAULTS.ENABLED,
            listen: true
        },
        animation: {
            display: 'selector',
            value: ROTATION_DEFAULTS.ANIMATION,
            choices: [ANIMATION_FUNCTIONS.LINEAR, ANIMATION_FUNCTIONS.SIN, ANIMATION_FUNCTIONS.COS, ANIMATION_FUNCTIONS.ABS, ANIMATION_FUNCTIONS.EASE],
            listen: true
        },
        rotationSpeed: {
            display: 'range',
            value: ROTATION_DEFAULTS.SPEED,
            min: -1,
            max: 1,
            step: 0.1,
            listen: true
        }
    }

}