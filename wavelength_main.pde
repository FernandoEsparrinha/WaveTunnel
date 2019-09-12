import processing.sound.*;

Linelength l;
Wave w;
Wavelength wavelength;

void setup() {
  size(displayWidth, displayHeight);
  setupSounds();
  
  wavelength = new Wavelength();
  l = new Linelength();
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
