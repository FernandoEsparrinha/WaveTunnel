/**
 * Base class for all wave visualizations
 * Manages collection of forms and their animation
 * @class Wave
 */
class Wave {
  constructor() {
    this.individualMode = false
    this.maxForms = WAVE_CONFIG.MAX_FORMS
    this.initialWaves = WAVE_CONFIG.INITIAL_WAVES
    this.waves = []

    this.initialSpeed = WAVE_CONFIG.INITIAL_SPEED
    this.speed = this.initialSpeed

    console.log("Creating Wave")
    console.log(this)
  }

  /**
   * Add waves to the visualization
   * @param {number} amount - Number of waves to add
   * @param {Object} options - Optional configuration
   */
  addWaves(amount, option = {}) { }

  /**
   * Remove waves from the visualization
   * @param {number} amount - Number of waves to remove
   */
  removeWaves(amount) { }

  /**
   * Reset all waves
   */
  reset() {
    this.waves = []
  }

  /**
   * Enforce maximum wave limit
   */
  enforceMaxWaves() {
    if (this.waves.length > WAVE_CONFIG.MAX_WAVES_ACTIVE) {
      this.removeWaves(1)
      globalSettings.settings.autoMode = false
    }
  }

  display() {
    // Subclasses implement wave display logic
  }
}