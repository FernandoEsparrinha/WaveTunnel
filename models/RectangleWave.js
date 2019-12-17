class RectangleWave {
  constructor() {

    this.individualMode = true;

    this.initialWaves = 1;
    this.waves = [];

    this.initialSpeed = 0.1;
    this.speed = this.initialSpeed;

    console.log("Creating Rectangle Wave");
    console.log(this);
    for (let i = 0; i < this.initialWaves; i++) {
      this.waves.push(new Rectangle(this.speed));
    }
  }

  addWaves(amount) {
    for (let i = 0; i < amount; i++) {
      this.waves.push(new Rectangle(this.speed));
    }
  }

  removeWaves(amount) {
    for (let i = 0; i < amount; i++) {
      if (this.waves.length > 1) {
        this.waves.shift();
      }
    }
  }

  reset() {
    this.waves = []
  }

  display() {
    for (let i = 0; i < this.waves.length; i++) {
      if (!this.individualMode) {
        this.waves[i].refreshSpeed(this.speed);
      }

      if (this.waves.length > 300) {
        this.removeWaves(1);
      }

      this.waves[i].move();
      this.waves[i].display();
    }
  }
}