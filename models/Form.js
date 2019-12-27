class Form {
    constructor(initialSpeed) {
        this.color = [0, 0, 0];

        this.initialWidth = 0;
        this.initialHeight = 0;

        this.height = 0;
        this.width = 0;
        this.iteration = 0;

        this.speed = initialSpeed;
        this.lifespan = 0;

        this.grayTone = random(255);
        this.randomColor = color(random(255), 100, 100);

        this.weigth = globalSettings.wave.weigth

        this.x = mouseX;
        this.y = mouseY;
        this.i = 0.0;

        this.rotationSpeed = (globalSettings.rotation.rotationSpeed / 200);
    }

    refreshSpeed(speed) {
        this.speed = speed;
    }

    move() {
        this.lifespan++;

        // this.iteration = this.a % 80;
        // this.iteration = (sin(this.a / 4) * 10) + 10;
        this.iteration = Math.abs(sin(this.i / 4) * 10) + 10;
        this.i += globalSettings.wave.speed;
    }

    display() {
        switch (globalSettings.colorMode) {
            case "two-tone":
                stroke(color(Math.abs(this.iteration) * 10, 255, 255))
                break;
            case "white":
                stroke(color(255, 0, 255));
                break;
            case "black":
                stroke(color(255, 0, 0));
                break;
            case "random":
                stroke(color(this.randomColor, 255, 255));
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
