# Changelog

All notable changes to the WaveTunnel project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 

### Changed
- 

### Deprecated
- 

### Removed
- 

### Fixed
- 

### Security
- 

## [1.5.0] - 2026-05-20
- Speed is now smoother, it ranges from -100 to 100 instead of -1 to 1, giving more precise control of the wave
- All settings are now wrapped up into a wavetunnel tab
- linear and ease ampliation functions now have a max value where they loop

## [1.4.0] - 2026-05-17

### Added
- Initial release of WaveTunnel
- Visual wave tunnel generator using p5.js
- Keyboard controls for shape creation and wave speed adjustment
- MIDI controller support for real-time interaction
- Web-based GUI with dat.gui controls
- Multiple shape models: Rectangle, Polygon, Line, Hourglass, and Text forms
- Wave animation support with various animation functions (sin, cos, linear)
- Multiple color modes: two-tone, white, black, random, black-white, rainbow
- Screen recording functionality with CCapture library
- OSC (Open Sound Control) input support
- Web MIDI API integration for hardware controllers
- Sound reactivity integration
- Configuration system for wave behavior and animation parameters
- Shape rotation controls
- Wave amplitude and frequency controls

### Features
- **Interactive Canvas**: Real-time visual generation controlled through multiple input methods
- **Shape Library**: Pre-built geometric forms that can be animated with wave effects
- **Multiple Input Methods**: Keyboard, GUI, MIDI controller, OSC, and sound input
- **Recording**: Export animations as video or image sequences
- **Customizable**: Configuration system for fine-tuning wave behavior and appearance

---

For more information and to try WaveTunnel, visit: [https://fernandoesparrinha.github.io/WaveTunnel/](https://fernandoesparrinha.github.io/WaveTunnel/)
