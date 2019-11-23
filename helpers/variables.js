let settingsGUI = {
    colorMode: {
        display: 'selector',
        value: 'two-tone',
        choices: ['two-tone', 'white', 'random', 'black-white'],
        listen: true
    },
    backgroundColor: {
        display: 'color',
        value: [0, 0, 0],
        listen: true
    },
    debugMode: {
        value: location.hostname === "",
        listen: true
    },
    wave: {
        speed: {
            display: 'range',
            value: 0.3,
            min: -1,
            max: 1,
            step: 0.01,
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
        }
    },
    rotation: {
        rotate: {
            value: false,
            listen: true
        },
        rotationSpeed: {
            display: 'range',
            value: 1,
            min: -1,
            max: 1,
            step: 0.01,
            listen: true
        }
    }
}

let rectangleWave;

let translateX = 0;
let translateY = 0;

let globalSettings;
