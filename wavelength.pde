import processing.sound.*;

Line l;
Line l2;
Line l3;
Line l4;
Wave w;
Wavelength wavelength;

void setup() {
  size(displayWidth, displayHeight);
  wavelength = new Wavelength();
  l = new Line(1, 17, 9);
  l2 = new Line(1, -17, 9);
  l3 = new Line(1, -17, -9);
  l4 = new Line(1, 17, -9);
}

void draw() {
  background(0);
  wavelength.display();
  
  l.move();
  l.display();
   l2.move();
  l2.display();
   l3.move();
  l3.display();
   l4.move();
  l4.display();
  //pointLight(200, 200, 200, width/2, height/2, -200);
  
  PFont f = createFont("Arial",16,true);
  textFont(f,36);
  fill(255);
  text("Number of waves: "+ wavelength.waves.size() ,100,80);
  text("Speed of first wave: "+ (wavelength.waves.size() == 0 ? "0" : wavelength.waves.get(0).speed) ,100,160);
}
