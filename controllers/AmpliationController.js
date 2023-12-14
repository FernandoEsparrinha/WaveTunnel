const ampliationFunctions = {
    linear: (form) => { form.scaleValue += form.scaleIteration },
    sin: (form) => { form.scaleValue += sin(form.scaleIteration) },
    cos: (form) => { form.scaleValue += cos(form.scaleIteration) },
    abs: (form) => { form.scaleValue += Math.abs(form.scaleValue) },
    ease: (form) => { form.scaleValue = ease(form.scaleValue, form.scaleValue * 2) }
}

let activeAmpliation = ampliationFunctions.linear;

function changeAmpliation(FunctionName) {
    if (ampliationFunctions.hasOwnProperty(FunctionName)) {
        activeAmpliation = ampliationFunctions[FunctionName];
    } else {
        console.error(`AmpliationController - Invalid function name: ${FunctionName}`);
    }
}