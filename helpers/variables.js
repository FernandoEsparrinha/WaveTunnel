let rectangleWave;

let translateX = 0;
let translateY = 0;

let easing = 0.05;

let fps;
let capturer;

let song, fft;
let dx;

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

