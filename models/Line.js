class Line extends Form {
    constructor(initialSpeed) {
        super(initialSpeed);
        this.numberOfSides = globalSettings.wave.sides;
    }

    display() {
        super.display();
        rectMode(CENTER);
        noFill();

        push();
        translate(width / 2, height / 2);

        if (globalSettings.rotation.rotate) {
            rotate(this.rotationValue);
        }

        scale(this.scaleValue);
        strokeWeight(this.weigth);
        drawLine();
        pop();
    }
}

function drawLine() {
    // ang = ((180 * (n - 2)) / n) * (Math.PI / 180);
    // alt = Math.tan(ang / 2) * 10;

    // translate(-10, alt);
    push();
    translate(1, 0);
    v0 = [0, 0];
    v1 = [1, 0];
    line(v0[0], v0[1], v1[0], v1[1]);
    pop();

    push();
    translate(-1, 0);
    v0 = [0, 0];
    v1 = [-1, 0];
    line(v0[0], v0[1], v1[0], v1[1]);
    pop();

    push();
    translate(0, 1);
    v0 = [0, 0];
    v1 = [0, 1];
    line(v0[0], v0[1], v1[0], v1[1]);
    pop();

    push();
    translate(0, -1);
    v0 = [0, 0];
    v1 = [0, -1];
    line(v0[0], v0[1], v1[0], v1[1]);
    pop();
}

