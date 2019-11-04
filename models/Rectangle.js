class Rectangle {
    constructor(initialSpeed) {
        this.color = [0, 0, 0];

        this.initialWidth = 0;
        this.initialHeight = 0;

        this.height = 0;
        this.width = 0;
        this.iteration = 0;

        this.speed = initialSpeed;
    }

    refreshSpeed(speed) {
        this.speed = speed;
    }

    reset() {
        this.height = this.initialHeight;
        this.width = this.initialWidth;
        this.iteration = 0;
    }

    move() {
        if (this.height < -windowHeight && this.width < -windowWidth) {
            this.reset();
        } else if (this.height < windowHeight && this.width < windowWidth) {
            this.iteration += this.speed;
            this.width += this.iteration * (windowWidth / windowHeight);
            this.height += this.iteration;
        } else {
            //waveAudioSample.play();
            this.reset();
        }
    }

    paintStroke() {
        let rectColor = [
            Math.abs(this.width) / 2,
            this.height / 2,
            Math.abs(this.iteration) / 2
        ];
        stroke(rectColor)
    }

    display() {
        switch (settings.colorMode) {
            case "white":
                stroke(color(255, 255, 255));
                break;
            case "random":
                stroke(color(random(this.width), random(this.width), random(this.width)));
                break;
            case "two-tone":
                this.paintStroke();
                break;
            default:
                break;
        }

        strokeWeight(1);
        rectMode(CENTER);
        noFill();

        push();

        translate(windowWidth / 2, windowHeight / 2);
        scale(this.iteration);

        strokeWeight(0.1);
        rect(0, 0, windowWidth / 20, windowHeight / 20);

        pop();
    }
}