class RectangleWave {
  constructor() {
    this.initialWaves = 5;
    this.initialSpeed = 0.1;
    this.speed = this.initialSpeed;
    this.waves = [];

    console.log("Creating Rectangle Wave");
    console.log(this);
    for (let i = 0; i < this.initialWaves; i++) {
      this.waves.push(new Rectangle(this.initialSpeed));
    }
  }

  addWaves(amount) {
    for (let i = 0; i < amount; i++) {
      this.waves.push(new Rectangle(this.initialSpeed));
    }
  }

  removeWaves(amount) {
    for (let i = 0; i < amount; i++) {
      if (this.waves.length > 1) {
        this.waves.shift();
      }
    }
  }

  addSpeed(value) {
    for (let i = 0; i < this.waves.length; i++) {
      this.waves[i].addSpeed(value);
    }
  }

  takeSpeed(value) {
    for (let i = 0; i < this.waves.length; i++) {
      this.waves[i].takeSpeed(value);
    }
  }

  reset() {
    this.waves = [new Rectangle(this.initialSpeed)]
  }

  display() {
    for (let i = 0; i < this.waves.length; i++) {
      this.waves[i].refreshSpeed(this.speed);
      this.waves[i].move();
      this.waves[i].display();
    }
  }
}