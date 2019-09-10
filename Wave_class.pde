

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
  
  void increaseSpeed(){
    this.speed++;
  }
  
  void decreaseSpeed(){
    if(this.speed >= 0){
      this.speed--;
    }
  }
  
  void reset(){
      // Play Sound  
    
      this.height = initialHeight;
      this.width = initialWidth;
      this.iteration = 0;
  }
  
  void move() {
    if(this.height < displayHeight && this.width < displayWidth){
      iteration += speed/100;
      // try using scale
      this.width+= iteration * 2;
      this.height+= iteration;
    }
    // else destroy
  }

  void display() {
    stroke(color(random(255), random(255), random(255)));
    //strokeWeight(random(5));
    noFill();
    rect(displayWidth/2 - (this.width/2), displayHeight/2 - (this.height/2), this.width, this.height);
  }
  
}
