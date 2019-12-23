class Hourglass extends Form {
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
        // translate(this.x, this.y);
        scale(this.iteration);

        if (globalSettings.rotation.rotate) {
            rotate(this.lifespan * this.rotationSpeed);
            //rotate(this.lifespan * (globalSettings.rotation.rotationSpeed / 200));
        }
        strokeWeight(this.weigth);
        drawHourglass();
        pop();
    }
}

function drawHourglass() {
    translate()
    beginShape();
    line(0, 0, -20, 20);
    line(0, 0, 20, 20);
    line(-20, 20, 20, 20);
    endShape(CLOSE);
}