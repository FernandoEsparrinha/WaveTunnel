const rotateFunctions = {
    [ANIMATION_FUNCTIONS.LINEAR]: (form) => { form.rotationValue += form.rotationIteration },
    [ANIMATION_FUNCTIONS.SIN]: (form) => { form.rotationValue += sin(form.rotationIteration) },
    [ANIMATION_FUNCTIONS.COS]: (form) => { form.rotationValue += cos(form.rotationIteration) },
    [ANIMATION_FUNCTIONS.ABS]: (form) => { form.rotationValue += Math.abs(form.rotationValue) },
    [ANIMATION_FUNCTIONS.EASE]: (form) => { form.rotationValue = ease(form.rotationValue, form.rotationIteration + 2) }
}

let activeRotation = rotateFunctions[ANIMATION_FUNCTIONS.LINEAR]

function changeRotation(functionName) {
    if (rotateFunctions.hasOwnProperty(functionName)) {
        activeRotation = rotateFunctions[functionName]
    } else {
        console.error(`RotationController - Invalid function name: ${functionName}. Available: ${Object.keys(rotateFunctions).join(', ')}`)
    }
}