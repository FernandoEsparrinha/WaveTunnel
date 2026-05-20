const ampliationFunctions = {
    [ANIMATION_FUNCTIONS.LINEAR]: (form) => { form.scaleValue = (form.scaleValue + form.scaleIteration) % form.scaleMax },
    [ANIMATION_FUNCTIONS.SIN]: (form) => { form.scaleValue += sin(form.scaleIteration) },
    [ANIMATION_FUNCTIONS.COS]: (form) => { form.scaleValue += cos(form.scaleIteration) },
    [ANIMATION_FUNCTIONS.ABS]: (form) => { form.scaleValue += Math.abs(form.scaleIteration) },
    [ANIMATION_FUNCTIONS.EASE]: (form) => { form.scaleValue = (form.scaleValue + ease(form.scaleValue, form.scaleIteration)) % (form.scaleMax/2) }
}

let activeAmpliation = ampliationFunctions[ANIMATION_FUNCTIONS.LINEAR]

function changeAmpliation(functionName) {
    if (ampliationFunctions.hasOwnProperty(functionName)) {
        activeAmpliation = ampliationFunctions[functionName]
    } else {
        console.error(`AmpliationController - Invalid function name: ${functionName}. Available: ${Object.keys(ampliationFunctions).join(', ')}`)
    }
}