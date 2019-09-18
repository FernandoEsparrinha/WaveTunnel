class Rectangle {
    constructor(initialSpeed) {
        this.initialWidth = 0;
        this.initialHeight = 0;
        
        this.height = 0;
        this.width = 0;
        this.iteration = 0;
    
        this.speed = initialSpeed;
    }
  
    increaseSpeed(){
        this.speed++;
    }
      
    decreaseSpeed(){
        if(this.speed >= 0){
            this.speed--;
        }
    }

    reset() {
        this.height = this.initialHeight;
        this.width = this.initialWidth;
        this.iteration = 0;
    }

    move() {
        if (this.height < -windowHeight && this.width < -windowWidth) {
            this.reset();
       } else if (this.height < windowHeight && this.width < windowWidth) {
            this.iteration += this.speed/10;
            // try using scale
            this.width+= this.iteration * (windowWidth/windowHeight);
            this.height+= this.iteration;
        } else {
            //waveAudioSample.play();
            this.reset();
        }
    }

    display() {
        stroke(color(random(255), random(255), random(255)));
        noFill();
        rect(   
            windowWidth/2 - (this.width/2), 
            windowHeight/2 - (this.height/2), 
            this.width, 
            this.height
        );
    }
}