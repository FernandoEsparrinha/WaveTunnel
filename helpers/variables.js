let settingsGUI = {
    colorMode: {
        display: 'selector',
        value: 'two-tone',
        choices: ['two-tone', 'white', 'black', 'random', 'black-white', 'rainbow'],
        listen: true
    },
    settings: {
        version: {
            value: "1.2.0"
        },
        fps: {
            value: 0,
            listen: true
        },
        numberOfWaves: {
            value: 0,
            listen: true
        },
        debugMode: {
            value: location.hostname === "",
            listen: true
        },
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
        speed: {
            display: 'range',
            value: 0.3,
            min: -1,
            max: 1,
            step: 0.1,
            listen: true
        },
        weigth: {
            display: 'range',
            value: 0.1,
            min: 0.1,
            max: 1,
            step: 0.01,
            listen: true
        },
        add: {
            value: function () { rectangleWave.addWaves(1); }
        },
        remove: {
            value: function () { rectangleWave.removeWaves(1); }
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
            value: false,
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

let rectangleWave;

let translateX = 0;
let translateY = 0;

let globalSettings;
