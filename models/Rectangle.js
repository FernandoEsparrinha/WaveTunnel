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
        this.randomColor = color(random(255), 25, 25);

        this.weigth = globalSettings.wave.weigth

        this.x = mouseX;
        this.y = mouseY;

        this.numberOfSides = globalSettings.wave.sides;

        this.rotationSpeed = (globalSettings.rotation.rotationSpeed / 200);
    }

    refreshSpeed(speed) {
        this.speed = speed;
    }

    reset() {
        this.iteration = 0;
    }

    move() {
        this.lifespan++;
        // console.log(this.lifespan % 100);
        //if (this.lifespan % 100 == 99) {
        //    this.reset();
        if (this.iteration > 80 || this.iteration < -80) {
            this.reset();
        } else {
            this.iteration += this.speed;
        }
    }

    paintStroke() {
        let rectColor = [
            Math.abs(this.iteration) * 10,
            100,
            100,
        ];
        stroke(rectColor)
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
        // rect(0, 0, windowWidth / 20, windowHeight / 20);
        drawPolygon(this.numberOfSides);
        // drawHalfTriangle();
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