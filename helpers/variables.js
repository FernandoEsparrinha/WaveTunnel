let translateX = 0
let translateY = 0

let fps
let capturer

let song, fft

let globalSettings

let rangeValues = {
    maxVariableX: 0,
    minVariableX: 100,
    maxVariableY: 0,
    minVariableY: 100
}

let isSoundActive = FEATURE_FLAGS.SOUND_ACTIVE
let isGuiActive = FEATURE_FLAGS.GUI_ACTIVE
let isWebMidiActive = FEATURE_FLAGS.WEBMIDI_ACTIVE
let isOscActive = FEATURE_FLAGS.OSC_ACTIVE
let isRecording = FEATURE_FLAGS.RECORDING_ACTIVE