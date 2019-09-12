AudioSample waveAudioSample;
AudioSample lineAudioSample;

void setupSounds(){
  
  // Create an array and manually write a single sine wave oscillation into it.
  int resolution = 1000;
  float[] sinewave = new float[resolution];
  for (int i = 0; i < resolution; i++) {
    sinewave[i] = sin(TWO_PI*i/resolution);
  }

  // Create the audiosample based on the data, set framerate to play 200 oscillations/second
  waveAudioSample = new AudioSample(this, sinewave, 2000 * resolution);
  lineAudioSample = new AudioSample(this, sinewave, 100 * resolution);

  // Play the sample in a loop (but don't make it too loud)
  waveAudioSample.amp(0.5);
  lineAudioSample.amp(0.5);
}
