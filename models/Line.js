class Line {
    constructor(speed, vx, vy) {
        this.initialX = displayWidth / 2;
        this.initialY = displayHeight / 2;

        this.x = this.initialX;
        this.y = this.initialY;
        this.iteration = 0;
      
        this.location = createVector(this.initialX, this.initialY);
        this.velocity = createVector(vx, vy);
      
        this.speed = speed;
    }
     
    increaseSpeed(){
        this.speed++;
    }
     
    decreaseSpeed(){
        if(this.speed >= 0){
            this.speed--;
        }
    }
     
    reset(){
        this.x = this.initialX;
        this.y = this.initialY;
        this.iteration = 0;
        
        this.location = createVector(this.initialX, this.initialY);
    }
     
    move() {
        if(this.y < displayHeight && this.x < displayWidth){
            this.iteration += this.speed/10;
            // try using scale
            //this.x+= iteration * 2;
            this.y+= this.iteration;
            this.location.add(this.velocity);
        } else {
            //lineAudioSample.play();
            this.reset(); 
        }
    }
   
    display() {
        // Mover este stroke para o construtor do objecto
        stroke(255, 255, 255);
       
        //strokeWeight(random(5));
        drawLine(this.location.x, this.location.y, this.location.x + this.velocity.x*10, this.location.y + this.velocity.y*10);
    }     
}
   