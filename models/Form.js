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
        this.randomColor = color(globalSettings.background.hue + 180, 100, 100);

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

    display() { }
}
