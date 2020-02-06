class Form {
    constructor(initialSpeed) {
        this.color = [0, 0, 0];

        this.initialWidth = 0;
        this.initialHeight = 0;

        this.height = 0;
        this.width = 0;

        this.scaleValue = 0;
        this.scaleIteration = 0.0;

        this.rotationValue = 0;
        this.rotationIteration = 0;

        this.speed = initialSpeed;
        this.lifespan = 0;

        this.grayTone = random(255);
        this.randomColor = color(random(255), 100, 100);

        this.weigth = globalSettings.wave.weigth

        this.x = mouseX;
        this.y = mouseY;

        this.rotationSpeed = (globalSettings.rotation.rotationSpeed / 200);
    }

    refreshSpeed(speed) {
        this.speed = speed;
    }

    move() {
        this.lifespan++;

        this.scaleValue = this.scaleIteration % 3000;
        // this.scaleValue = (sin(this.scaleIteration / 4) * 100) + 10;
        // this.scaleValue = Math.abs(sin(this.scaleIteration / 4) * 10) + 10;

        this.rotationValue = this.rotationIteration % 360;
        // this.rotationValue = (sin(this.rotationIteration / 4) * 10) + 10;
        // this.rotationValue = Math.abs(sin(this.rotationIteration / 4) * 10) + 10;

        this.scaleIteration += globalSettings.wave.speed;
        this.rotationIteration += globalSettings.rotation.rotationSpeed / 4;
    }

    display() {
        switch (globalSettings.colorMode) {
            case "two-tone":
                if (isSoundActive) {
                    if (isMobileDevice()) {
                        stroke(color(100, 255, map(mic.getLevel(), 0, 1, 0, 255)))
                    } else {
                        stroke(color(100, 255, spectrum[0]))
                    }
                } else {
                    stroke(color(100, 255, 255 - Math.abs(this.lifespan) % 255))
                }
                break;
            case "white":
                stroke(color(255, 0, 255));
                break;
            case "black":
                stroke(color(255, 0, 0));
                break;
            case "random":
                stroke(color((sin(this.scaleIteration / 4) * 255) + 10, 255, 255));
                break;
            case "rainbow":
                stroke(color(this.lifespan % 255, 255, 255));
                break;
            case "black-white":
                stroke(color(0, 0, this.grayTone));
            default:
                break;
        }
    }
}
