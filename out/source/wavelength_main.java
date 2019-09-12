import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import processing.sound.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class wavelength_main extends PApplet {



Linelength l;
Wave w;
Wavelength wavelength;

public void setup() {
  
  setupSounds();
  
  wavelength = new Wavelength();
  l = new Linelength();
}

public void draw() {
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
public void keyPressed() {
  if (key == CODED) {
    if(keyCode == UP) {
      wavelength.increaseWaves();
    }
    if(keyCode == DOWN){
      wavelength.decreaseWaves(); 
    }
    if(keyCode == LEFT){
      wavelength.decreaseSpeed();
    }
    if(keyCode == RIGHT){
      wavelength.increaseSpeed();
    }
  }
}


class Line {
  
 PVector location;
 PVector velocity;
  
 float initialX = displayWidth / 2;
 float initialY = displayHeight / 2;
 float x;
 float y;
 
 float size;
 float direction;
 
 float iteration;
 float speed;
 
  Line(int speed, int vx, int vy) {
    this.x = initialX;
    this.y = initialY;
    this.iteration = 0;
   
   location = new PVector(initialX,initialY);
   velocity = new PVector(vx,vy);
   
    this.speed = speed;
  }
  
  public void increaseSpeed(){
    this.speed++;
  }
  
  public void decreaseSpeed(){
    if(this.speed >= 0){
      this.speed--;
    }
  }
  
  public void reset(){
      // Play Sound  
    
      this.x = initialX;
      this.y = initialY;
      this.iteration = 0;
      location = new PVector(initialX,initialY);
  }
  
  public void move() {
    if(this.y < displayHeight && this.x < displayWidth){
      iteration += speed/10;
      // try using scale
      //this.x+= iteration * 2;
      this.y+= iteration;
      location.add(velocity);
    } else {
       this.reset(); 
    }
    // else destroy
  }

  public void display() {
    // Mover este stroke para o construtor do objecto
    stroke(255, 255, 255);
    
    //strokeWeight(random(5));
    line(location.x, location.y, location.x + velocity.x*10, location.y + velocity.y*10);
  }
  
}
class Linelength {
   int numberOfInitialWaves = 1;
   ArrayList<Line> lines;
   
   Linelength(){
     lines = new ArrayList<Line>();
     
     for(int i=0; i < numberOfInitialWaves; i++){
         lines.add(new Line(1, 17, 9));
         lines.add(new Line(1, -17, 9));
         lines.add(new Line(1, -17, -9));
         lines.add(new Line(1, 17, -9));
     }
   }
   
   public void increaseWaves(){
      lines.add(new Line(1, 17, 9));
         lines.add(new Line(1, -17, 9));
         lines.add(new Line(1, -17, -9));
         lines.add(new Line(1, 17, -9));
   }
   
   public void decreaseWaves(){
     if(lines.size() > 0) {
       lines.remove(0);  
     }
   }
   
   public void increaseSpeed(){
      for(int i=0; i < lines.size(); i++){
         this.lines.get(i).increaseSpeed();
     }
   }
   
   public void decreaseSpeed(){
      for(int i=0; i < lines.size(); i++){
         this.lines.get(i).decreaseSpeed();
     }
   }
   
   public void display() {
      for(int i=0; i < lines.size(); i++){     
        this.lines.get(i).move();
        this.lines.get(i).display(); 
      }
   }
}
AudioSample sample;

public void setupSounds(){
  // Create an array and manually write a single sine wave oscillation into it.
  int resolution = 1000;
  float[] sinewave = new float[resolution];
  for (int i = 0; i < resolution; i++) {
    sinewave[i] = sin(TWO_PI*i/resolution);
  }

  // Create the audiosample based on the data, set framerate to play 200 oscillations/second
  sample = new AudioSample(this, sinewave, 2000 * resolution);

  // Play the sample in a loop (but don't make it too loud)
  sample.amp(0.5f);
}


class Wave {
  
 float initialHeight = 0;
 float initialWidth = 0;
  
 float height;
 float width;
 
 float iteration;
 float speed;
 
  Wave(int speed) {
    this.height = 0;
    this.width = 0;
    this.iteration = 0;
    
    this.speed = speed;
  }
  
  public void increaseSpeed(){
    this.speed++;
  }
  
  public void decreaseSpeed(){
    if(this.speed >= 0){
      this.speed--;
    }
  }
  
  public void reset(){
      // Play Sound  
    
      this.height = initialHeight;
      this.width = initialWidth;
      this.iteration = 0;
  }
  
  public void move() {
    if(this.height < displayHeight && this.width < displayWidth){
      iteration += speed/100;
      // try using scale
      this.width+= iteration * 2;
      this.height+= iteration;
    } else {
      sample.play();
      this.reset();
    }
  }

  public void display() {
    stroke(color(random(255), random(255), random(255)));
    //strokeWeight(random(5));
    noFill();
    rect(displayWidth/2 - (this.width/2), displayHeight/2 - (this.height/2), this.width, this.height);
  }
  
}
class Wavelength {
   int numberOfInitialWaves = 5;
   ArrayList<Wave> waves;
   
   Wavelength(){
     waves = new ArrayList<Wave>();
     
     for(int i=0; i < numberOfInitialWaves; i++){
         waves.add(new Wave(i+40));
     }
   }
   
   public void increaseWaves(){
      waves.add(new Wave(40));
   }
   
   public void decreaseWaves(){
     if(waves.size() > 0) {
       waves.remove(0);  
     }
   }
   
   public void increaseSpeed(){
      for(int i=0; i < waves.size(); i++){
         this.waves.get(i).increaseSpeed();
     }
   }
   
   public void decreaseSpeed(){
      for(int i=0; i < waves.size(); i++){
         this.waves.get(i).decreaseSpeed();
     }
   }
   
   public void display() {
      for(int i=0; i < waves.size(); i++){
        this.waves.get(i).move();
        this.waves.get(i).display(); 
      }
   }
}
  public void settings() {  size(displayWidth, displayHeight); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "wavelength_main" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
