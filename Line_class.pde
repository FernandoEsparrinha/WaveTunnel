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
  
  void increaseSpeed(){
    this.speed++;
  }
  
  void decreaseSpeed(){
    if(this.speed >= 0){
      this.speed--;
    }
  }
  
  void reset(){
      this.x = initialX;
      this.y = initialY;
      this.iteration = 0;
      location = new PVector(initialX,initialY);
  }
  
  void move() {
    if(this.y < displayHeight && this.x < displayWidth){
      iteration += speed/10;
      // try using scale
      //this.x+= iteration * 2;
      this.y+= iteration;
      location.add(velocity);
    } else {
       lineAudioSample.play();
       this.reset(); 
    }
  }

  void display() {
    // Mover este stroke para o construtor do objecto
    stroke(255, 255, 255);
    
    //strokeWeight(random(5));
    line(location.x, location.y, location.x + velocity.x*10, location.y + velocity.y*10);
  }
  
}
