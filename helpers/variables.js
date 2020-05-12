let rectangleWave

let translateX = 0
let translateY = 0

let fps
let capturer

let song, fft

let globalSettings


let rangeValues = {
    maxVariableX: 0,
    minVariableX: 100,
    maxVariableY: 0,
    minVariableY: 100
}

let scaleAnimation = 'linear'
let rotateAnimation = 'linear'
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

let isSoundActive = 0
let isGuiActive = 1
let isWebMidiActive = 0
let isOscActive = 1
let isRecording = 0