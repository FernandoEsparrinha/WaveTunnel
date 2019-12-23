class Polygon extends Form {
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
                stroke(color(globalSettings.background.hue + 60, globalSettings.background.saturation, globalSettings.background.value));
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

        if (globalSettings.rotation.rotate) {
            rotate(this.lifespan * this.rotationSpeed);
        }

        scale(this.iteration);
        strokeWeight(this.weigth);
        drawPolygon(this.numberOfSides);
        pop();
    }
}


function drawPolygon(n) {
    ang = ((180 * (n - 2)) / n) * (Math.PI / 180);
    alt = Math.tan(ang / 2) * 10;

    translate(-10, alt);

    v0 = [0, 0];
    v1 = [20, 0];

    beginShape();
    vertex(v0[0], v0[1]);
    vertex(v1[0], v1[1]);
    for (i = 0; i < n - 2; i++) {
        x = v1[0] + (v0[0] - v1[0]) * Math.cos(ang) - (v0[1] - v1[1]) * Math.sin(ang);
        y = v1[1] + (v0[0] - v1[0]) * Math.sin(ang) + (v0[1] - v1[1]) * Math.cos(ang);

        vertex(x, y);
        v0 = v1;
        v1 = [x, y];
    }
    endShape(CLOSE);
}
