import processing.sound.*;
AudioSample sample;

Linelength l;
Wave w;
Wavelength wavelength;

void setup() {
  size(displayWidth, displayHeight);
  wavelength = new Wavelength();
  l = new Linelength();
  
  // Create an array and manually write a single sine wave oscillation into it.
  int resolution = 1000;
  float[] sinewave = new float[resolution];
  for (int i = 0; i < resolution; i++) {
    sinewave[i] = sin(TWO_PI*i/resolution);
  }

  // Create the audiosample based on the data, set framerate to play 200 oscillations/second
  sample = new AudioSample(this, sinewave, 2000 * resolution);

  // Play the sample in a loop (but don't make it too loud)
  sample.amp(0.5);
  
}

void draw() {
  background(0);
  wavelength.display();
  l.display();
  
  //pointLight(200, 200, 200, width/2, height/2, -200);
  
  PFont f = createFont("Arial",16,true);
  textFont(f,36);
  fill(255);
  text("Number of waves: "+ wavelength.waves.size() ,100,80);
  text("Speed of first wave: "+ (wavelength.waves.size() == 0 ? "0" : wavelength.waves.get(0).speed) ,100,160);
  
}
