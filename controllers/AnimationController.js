const animations = {
    linear: (form) => { form.scaleValue += form.scaleIteration },
    sin: (form) => { form.scaleValue += sin(this.scaleIteration) * 10 },
    cos: (form) => { form.scaleValue += cos(this.scaleIteration) * 10 + 10 },
    abs: (form) => { form.scaleValue += Math.abs(this.scaleValue) },
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