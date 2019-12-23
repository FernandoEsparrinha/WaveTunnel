class Wave {
  constructor() {

    this.individualMode = true;

    this.initialWaves = 1;
    this.waves = [];

    this.initialSpeed = 0.1;
    this.speed = this.initialSpeed;

    console.log("Creating Rectangle Wave");
    console.log(this);
  }

  addWaves(amount) { }

  removeWaves(amount) { }

  reset() {
    this.waves = []
  }

  display() { }
}