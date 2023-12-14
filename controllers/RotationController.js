const rotateFunctions = {
    linear: (form) => { form.rotationValue += form.rotationIteration },
    sin: (form) => { form.rotationValue += sin(form.rotationIteration) },
    cos: (form) => { form.rotationValue += cos(form.rotationIteration) },
    abs: (form) => { form.rotationValue += Math.abs(form.rotationValue) },
    ease: (form) => { form.rotationValue = ease(form.rotationValue, form.rotationIteration + 2) }
}

let activeRotation = rotateFunctions.linear;

function changeRotation(functionName) {
    if (rotateFunctions.hasOwnProperty(functionName)) {
        activeRotation = rotateFunctions[functionName];
    } else {
        console.error(`RotationController - Invalid function name: ${functionName}`);
    }
}