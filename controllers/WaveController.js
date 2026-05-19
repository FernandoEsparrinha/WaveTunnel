/**
 * Wave controller - manages wave form creation and switching
 */
class WaveController {
  static waveTypes = {
    [WAVE_FORMS.RECTANGLE]: RectangleWave,
    [WAVE_FORMS.LINE]: LineWave,
    [WAVE_FORMS.POLYGON]: PolygonWave,
    [WAVE_FORMS.HOURGLASS]: HourglassWave,
    [WAVE_FORMS.TEXT]: TextWave
  }

  /**
   * Create a new wave instance of the specified type
   * @param {string} waveForm - Type of wave form
   * @returns {Wave} New wave instance
   */
  static createWave(waveForm = WAVE_FORMS.POLYGON) {
    if (!this.waveTypes[waveForm]) {
      console.error(`Invalid wave form: ${waveForm}. Available: ${Object.keys(this.waveTypes).join(', ')}`)
      waveForm = WAVE_FORMS.POLYGON // Fallback to default
    }
    return new this.waveTypes[waveForm]()
  }

  /**
   * Change to a different wave form
   * @param {string} waveForm - Type of wave form
   */
  static changeWave(waveForm) {
    if (!this.waveTypes.hasOwnProperty(waveForm)) {
      console.error(`WaveController - Invalid wave form: ${waveForm}. Available: ${Object.keys(this.waveTypes).join(', ')}`)
      return false
    }
    return true
  }
}
