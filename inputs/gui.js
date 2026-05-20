
function setupGUI() {
    var optionsGUI = { folded: isMobileDevice() }
    globalSettings = guiGlue(settingsGUI, optionsGUI)
    randomizeSettings()
}

function randomizeSettings() {
    globalSettings.wavetunnel.colorMode = random(settingsGUI.wavetunnel.colorMode.choices)
    globalSettings.wavetunnel.wave.animation = random(settingsGUI.wavetunnel.wave.animation.choices)
    globalSettings.wavetunnel.rotation.animation = random(settingsGUI.wavetunnel.rotation.animation.choices)
    globalSettings.wavetunnel.background.hue = random(settingsGUI.wavetunnel.background.hue.min, settingsGUI.wavetunnel.background.hue.max)
    globalSettings.wavetunnel.background.saturation = random(settingsGUI.wavetunnel.background.saturation.min, settingsGUI.wavetunnel.background.saturation.max)
    globalSettings.wavetunnel.background.value = random(settingsGUI.wavetunnel.background.value.min, settingsGUI.wavetunnel.background.value.max)
    globalSettings.wavetunnel.wave.speed = random(settingsGUI.wavetunnel.wave.speed.min, globalSettings.wavetunnel.wave.speed.max).toFixed(2)
    globalSettings.wavetunnel.wave.weight = random(0, 1).toFixed(2)
    globalSettings.wavetunnel.wave.sides = random(3, 10).toFixed(0)
    globalSettings.wavetunnel.rotation.rotationSpeed = random(globalSettings.wavetunnel.rotation.rotationSpeed.min, globalSettings.wavetunnel.rotation.rotationSpeed.max)
    globalSettings.wavetunnel.settings.autoMode = true
}

let settingsGUI = {
    wavetunnel: {
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
                min: -100,
                max: 100,
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
                min: -100,
                max: 100,
                step: 0.1,
                listen: true
            }
        }
    }
}