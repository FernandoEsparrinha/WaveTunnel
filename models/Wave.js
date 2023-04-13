class Wave {
  constructor() {

    this.individualMode = true
    this.maxForms = 500
    this.initialWaves = 1
    this.waves = []

    this.initialSpeed = 0.1
    this.speed = this.initialSpeed

    console.log("Creating Rectangle Wave")
    console.log(this)
  }

  addWaves(amount, option = {}) { }

  removeWaves(amount) { }

  reset() {
    this.waves = []
  }

  display() {
    // if (this.waves.length > 0) {
    //   if (this.waves[0].lifespan > 600) {
    //     this.waves.splice(0, 1);
    //   }
    // }
  }
}