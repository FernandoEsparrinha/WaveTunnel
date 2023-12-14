class TextForm extends Form {
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
        textAlign(CENTER, CENTER);
        text("Hello world !", 0, 0);
        pop();
    }
}
