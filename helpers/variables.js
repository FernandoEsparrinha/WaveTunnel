let rectangleWave;

let translateX = 0;
let translateY = 0;

let fps;
let capturer;

let song, img, fft;

let globalSettings;

let scaleAnimation = 'linear';
let rotateAnimation = 'linear';

let scaleAnimationFunctions = new Map()
scaleAnimationFunctions.set('linear', true)
scaleAnimationFunctions.set('sin', false)
scaleAnimationFunctions.set('cos', false)
scaleAnimationFunctions.set('abs', false)
scaleAnimationFunctions.set('ease', false)

let rotateAnimationFunctions = new Map()
rotateAnimationFunctions.set('linear', true)
rotateAnimationFunctions.set('sin', false)
rotateAnimationFunctions.set('cos', false)
rotateAnimationFunctions.set('abs', false)
rotateAnimationFunctions.set('ease', false)

// let scaleAnimationFunctions = [
//     {
//         name: 'linear',
//         function: 'this.scaleIteration % 200',
//         state: true
//     },
//     {
//         name: 'sin',
//         function: '(sin(this.scaleIteration / 4) * 100) + 10',
//         state: false
//     },
//     {
//         name: 'easesin',
//         function: 'ease(this.scaleValue, (sin(this.scaleIteration) * 150) + 300)',
//         state: false
//     },
//     {
//         name: 'abssin',
//         function: 'Math.abs(sin(this.scaleIteration / 4) * 10) + 10',
//         state: false
//     }
// ];


let autoMode = 0;

let isSoundActive = 0;
let isGuiActive = 1;
let isWebMidiActive = 0;
let isOscActive = 1;
