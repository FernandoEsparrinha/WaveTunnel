class RectangleWave extends Wave {
  constructor() {
    super();

    for (let i = 0; i < this.initialWaves; i++) {
      this.waves.push(new Rectangle(this.speed));
    }
  }

  addWaves(amount, option = {}) {
    for (let i = 0; i < amount; i++) {
      this.waves.push(new Rectangle(this.speed, option));
    }
  }

  removeWaves(amount) {
    for (let i = 0; i < amount; i++) {
      if (this.waves.length > 1) {
        this.waves.shift();
      }
    }
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