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
        this.scaleIteration = 0.000
        this.scaleMax = 100
        this.rotationValue = 0
        this.rotationIteration = 0.0


        this.speed = initialSpeed
        this.rotationSpeed = globalSettings.wavetunnel.rotation.rotationSpeed / 40
        this.lifespan = 0


        this.colorMode = globalSettings.wavetunnel.colorMode
        this.grayTone = random(255)
        this.randomColor = color(random(255), random(100), random(100))

        this.weight = globalSettings.wavetunnel.wave.weight

        changeAmpliation(globalSettings.wavetunnel.wave.animation)
        changeRotation(globalSettings.wavetunnel.rotation.animation)
    }

    refreshSpeed(speed) {
        this.speed = speed
    }

    move() {
        this.lifespan++

        activeAmpliation(this)
        activeRotation(this)
        this.scaleIteration += this.speed / 100
        this.rotationIteration += this.rotationSpeed / 100
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
            rotate(this.rotationValue)
        }

        scale(this.scaleValue)
        strokeWeight(this.weight)
    }
}
