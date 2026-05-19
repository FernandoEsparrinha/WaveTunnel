/**
 * WaveTunnel Application Configuration
 * Centralized constants for all magic numbers and configuration values
 */

const WAVE_CONFIG = {
  MAX_FORMS: 500,
  MAX_WAVES_ACTIVE: 300,
  CLEANUP_THRESHOLD: 250,
  INITIAL_WAVES: 1,
  LIFESPAN_LIMIT: 600,
  INITIAL_SPEED: 0.1
}

const RECORDING_CONFIG = {
  FORMAT: 'jpg',
  FRAMERATE: 30,
  PRECISION_DECIMALS: 2,
  NAME_PREFIX: 'Wavetunnel-'
}

const WAVE_DEFAULTS = {
  SPEED: 0.02,
  WEIGHT: 0.01,
  SIDES: 4,
  ANIMATION: 'sin'
}

const ROTATION_DEFAULTS = {
  SPEED: 0.3,
  ANIMATION: 'sin',
  ENABLED: true
}

const BACKGROUND_DEFAULTS = {
  HUE: 0,
  SATURATION: 0,
  VALUE: 0
}

const COLOR_CONFIG = {
  HSB_MAX: 255,
  COLOR_MODES: ['two-tone', 'white', 'black', 'random', 'black-white', 'rainbow'],
  DEFAULT_MODE: 'white'
}

const ANIMATION_FUNCTIONS = {
  LINEAR: 'linear',
  SIN: 'sin',
  COS: 'cos',
  ABS: 'abs',
  EASE: 'ease'
}

const WAVE_FORMS = {
  RECTANGLE: 'rectangle',
  LINE: 'line',
  POLYGON: 'polygon',
  HOURGLASS: 'hourglass',
  TEXT: 'text'
}

const CANVAS_CONFIG = {
  DEFAULT: {
    WIDTH: null,
    HEIGHT: null
  },
  PRESET_SIZES: {
    SQUARE: { width: 1080, height: 1080 },
    LANDSCAPE: { width: 1920, height: 1080 },
    PORTRAIT: { width: 1080, height: 1920 }
  }
}

const FEATURE_FLAGS = {
  SOUND_ACTIVE: false,
  GUI_ACTIVE: true,
  WEBMIDI_ACTIVE: false,
  OSC_ACTIVE: false,
  RECORDING_ACTIVE: false,
  DEBUG_MODE: false
}

const VERSION = '1.4.0'
