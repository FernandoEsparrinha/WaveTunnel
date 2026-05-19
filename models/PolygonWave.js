class PolygonWave extends Wave {
  constructor(initialWaves = 1) {
    super();
    this.lifespan = 0;
    this.initialWaves = initialWaves;
    for (let i = 0; i < this.initialWaves; i++) {
      this.waves.push(new Polygon(this.speed));
    }
  }

  addWaves(amount, option = {}) {
    if (this.waves.length < this.maxForms) {
      for (let i = 0; i < amount; i++) {
        this.waves.push(new Polygon(this.speed, option));
      }
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
    super.display();
    for (let i = 0; i < this.waves.length; i++) {
      if (!this.individualMode) {
        this.waves[i].refreshSpeed(this.speed);
      }

      this.enforceMaxWaves();

      this.waves[i].move();
      this.waves[i].display();
    }
  }
}