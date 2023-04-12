const animations = {
    linear: (form) => { form.scaleValue += form.scaleIteration },
    sin: (form) => { form.scaleValue += sin(form.scaleIteration) },
    cos: (form) => { form.scaleValue += cos(form.scaleIteration) },
    abs: (form) => { form.scaleValue += Math.abs(form.scaleValue) },
    ease: (form) => { form.scaleValue = ease(form.scaleValue, form.scaleValue * 2) }
}

let activeAnimation = animations.linear;

function changeAnimation(animationName) {
    if (animations.hasOwnProperty(animationName)) {
        activeAnimation = animations[animationName];
    } else {
        console.error(`AnimationController - Invalid animation name: ${animationName}`);
    }
}