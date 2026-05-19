class Rectangle extends Form {
    constructor(initialSpeed) {
        super(initialSpeed);
    }

    display() {
        switch (globalSettings.colorMode) {
            case "two-tone":
                this.paintStroke();
                break;
            case "white":
                stroke(color(255, 255, 255));
                break;
            case "random":
                stroke(this.randomColor);
                break;
            case "black-white":
                stroke(color(this.grayTone, this.grayTone, this.grayTone));
            default:
                break;
        }

        rectMode(CENTER);
        noFill();

        push();
        translate(windowWidth / 2, windowHeight / 2);
        scale(this.iteration);

        if (globalSettings.rotation.rotate) {
            rotate(this.lifespan * this.rotationSpeed);
            // rotate(this.lifespan * (globalSettings.rotation.rotationSpeed / 200));
        }
        strokeWeight(this.weight);
        rect(0, 0, windowWidth / 20, windowHeight / 20);
        pop();
    }
}
