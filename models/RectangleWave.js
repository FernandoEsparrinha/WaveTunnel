class RectangleWave {
  constructor() {
    this.initialWaves = 1;
    this.initialSpeed = 0.5;
    this.waves = [];

    console.log("Creating Rectangle Wave");
    console.log(this);
    for (let i = 0; i < this.initialWaves; i++) {
      this.waves.push(new Rectangle((i / 4) + this.initialSpeed));
    }
  }

  increaseWaves() {
    this.waves.push(new Rectangle(this.initialSpeed));
    console.log("Increased size of rectangle wave to " + this.waves.length);
  }

  decreaseWaves() {
    if (this.waves.length > 0) {
      this.waves.pop();
      console.log("Decreased size of rectangle wave to " + this.waves.length);
    }
  }

  increaseSpeed() {
    console.log("Increased speed of rectangle wave");
    for (let i = 0; i < this.waves.length; i++) {
      this.waves[i].increaseSpeed();
    }
  }

  decreaseSpeed() {
    console.log("Decreased speed of rectangle wave");
    for (let i = 0; i < this.waves.length; i++) {
      this.waves[i].decreaseSpeed();
    }
  }

  display() {
    for (let i = 0; i < this.waves.length; i++) {
      this.waves[i].move();
      this.waves[i].display();
    }
  }
}