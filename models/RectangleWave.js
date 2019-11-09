class RectangleWave {
  constructor() {
    this.initialWaves = 5;
    this.initialSpeed = 0.01;
    this.speed = this.initialSpeed;
    this.waves = [];

    console.log("Creating Rectangle Wave");
    console.log(this);
    for (let i = 0; i < this.initialWaves; i++) {
      this.waves.push(new Rectangle(this.initialSpeed));
    }
  }

  increaseWaves() {
    this.waves.push(new Rectangle(this.initialSpeed));
    console.log("Increased size of rectangle wave to " + this.waves.length);
  }

  decreaseWaves() {
    if (this.waves.length > 1) {
      this.waves.shift();
      console.log("Decreased size of rectangle wave to " + this.waves.length);
    }
  }

  reset() {
    this.waves = [new Rectangle(this.initialSpeed)]
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
      this.waves[i].refreshSpeed(this.speed);
      this.waves[i].move();
      this.waves[i].display();
    }
  }
}