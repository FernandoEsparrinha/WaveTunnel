/**
 * WaveTunnel - Module Initialization
 * This file serves as the entry point for all ES6 modules
 * p5.js and legacy libraries must be loaded as global scripts before this module
 * Input handlers and helper functions are also loaded as global scripts
 */

// Import configuration
import config, { FEATURE_FLAGS } from './config.js'

// Import helpers
import './helpers/variables.js'

// Import models (base classes first)
import Wave from './models/Wave.js'
import Form from './models/Form.js'

// Import concrete model classes
import Rectangle from './models/Rectangle.js'
import Line from './models/Line.js'
import Polygon from './models/Polygon.js'
import Hourglass from './models/Hourglass.js'
import TextForm from './models/TextForm.js'

// Import wave visualizations
import RectangleWave from './models/RectangleWave.js'
import LineWave from './models/LineWave.js'
import PolygonWave from './models/PolygonWave.js'
import HourglassWave from './models/HourglassWave.js'
import TextWave from './models/TextWave.js'

// Import controllers
import WaveController from './controllers/WaveController.js'
import './controllers/AmpliationController.js'
import './controllers/RotationController.js'

// Import input handlers (GUI setup function)
import { setupGUI } from './inputs/gui.js'

// Import main sketch - this sets up setup() and draw() functions
import './wavetunnel.js'

// Export public API
export {
  config,
  FEATURE_FLAGS,
  WaveController,
  setupGUI
}

// Make models and utilities available globally for DOM access and p5.js sketch
window.WaveTunnel = {
  config,
  models: {
    Wave,
    Form,
    Rectangle,
    Line,
    Polygon,
    Hourglass,
    TextForm,
    RectangleWave,
    LineWave,
    PolygonWave,
    HourglassWave,
    TextWave
  },
  controllers: {
    WaveController
  },
  setupGUI
}

console.log('WaveTunnel modules loaded successfully')

