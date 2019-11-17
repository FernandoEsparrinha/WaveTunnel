class Rectangle {
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

        this.x = translateX;
        this.y = translateY;

        this.rotationSpeed = (rotationSpeed / 200);
    }

    refreshSpeed(speed) {
        this.speed = speed;
    }

    reset() {
        this.iteration = 0;
    }

    move() {
        this.lifespan++;
        if (this.iteration > 80 || this.iteration < -80) {
            this.reset();
        } else {
            this.iteration += this.speed;
        }
    }

    paintStroke() {
        let rectColor = [
            Math.abs(this.iteration) * 10,
            0,
            0
        ];
        stroke(rectColor)
    }

    display() {
        switch (settings.colorMode) {
            case "two-tone":
                this.paintStroke();
                break;
            case "white":
                stroke(color(255, 255, 255));
                break;
            case "random":
                stroke(color(random(255), random(255), random(255)));
                break;
            case "black-white":
                stroke(color(this.grayTone, this.grayTone, this.grayTone));
            default:
                break;
        }

        strokeWeight(1);
        rectMode(CENTER);
        noFill();

        push();
        translate(windowWidth / 2, windowHeight / 2);
        scale(this.iteration);

        if (settings.rotate) {
            // rotate(this.lifespan * this.rotationSpeed);
            rotate(this.lifespan * (rotationSpeed / 200));
        }
        strokeWeight(strokeWeigth);
        rect(0, 0, windowWidth / 20, windowHeight / 20);
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

function drawHalfTriangle() {
    translate()
    beginShape();
    line(0, 0, -20, 20);
    line(0, 0, 20, 20);
    line(-20, 20, 20, 20);
    endShape(CLOSE);
}