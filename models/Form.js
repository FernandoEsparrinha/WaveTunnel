class Form {
    constructor(initialSpeed, option = {}) {
        this.color = [0, 0, 0]
        this.hueValue = 0
        this.hueIteration = 0
        this.rotate = false

        if (option.rotate) {
            this.rotate = true
        }

        this.scaleValue = 0
        this.scaleIteration = 0.0
        this.scaleAnimation = scaleAnimationFunctions

        this.rotationValue = 0
        this.rotateIteration = 0.0
        this.rotateAnimation = rotateAnimationFunctions


        this.speed = initialSpeed
        this.rotationSpeed = globalSettings.rotation.rotationSpeed
        this.lifespan = 0

        this.colorMode = globalSettings.colorMode
        this.grayTone = random(255)
        this.randomColor = color(random(255), 100, 100)

        this.weigth = globalSettings.wave.weigth

        this.minVariableX = rangeValues.minVariableX
        this.maxVariableX = rangeValues.maxVariableX

        changeAnimation(globalSettings.wave.animation)
    }

    refreshSpeed(speed) {
        this.speed = speed
    }

    move() {
        this.lifespan++

        activeAnimation(this);

        let newRotateValue = 0
        for (let [key, value] of this.rotateAnimation) {
            if (value) {
                switch (key) {
                    case 'linear':
                        newRotateValue += (this.rotateIteration % 100)
                        break
                    case 'sin':
                        newRotateValue += (sin(this.rotateIteration) * 10)
                        break
                    case 'cos':
                        newRotateValue += (cos(this.rotateIteration) * 10) + 10
                        break
                    case 'abs':
                        newRotateValue = Math.abs(newRotateValue)
                        break
                    case 'ease':
                        newRotateValue = ease(this.scaleValue, newRotateValue * 2)
                        break
                    default:
                        break
                }
            }
        }
        this.rotateValue = newRotateValue

        this.scaleIteration += this.speed / 4
        this.rotateIteration += this.rotationSpeed
    }

    display() {
        switch (this.colorMode) {
            case "two-tone":
                if (isSoundActive) {
                    stroke(color(spectrum[0], 255, 255))
                } else {
                    stroke(color(283 - map(this.lifespan % 255, 0, 255, -30, 30), 255, 255))
                }
                break;
            case "white":
                stroke(color(255, 0, 255))
                break;
            case "black":
                stroke(color(255, 0, 0))
                break;
            case "random":
                stroke(color((sin(this.scaleIteration / 4) * 255) + 10, 255, 255))
                break;
            case "rainbow":
                this.hueValue = sin(this.hueIteration) * 20 + 10
                this.hueIteration += 0.1
                stroke(color(this.hueValue, 255, 255))
                break;
            case "black-white":
                stroke(color(0, 0, this.grayTone))
            default:
                break
        }
        rectMode(CENTER)
        noFill()
        push()
        translate(width / 2, height / 2)

        if (this.rotate) {
            rotate(this.rotateValue)
        }

        scale(this.scaleValue)
        strokeWeight(this.weigth)
    }
}
