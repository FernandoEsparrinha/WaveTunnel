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

    paintStroke(){
        if(this.width < windowWidth/4){
            stroke(color(this.width, 0, 0))
        } else if (this.width < windowWidth/3){
            stroke(color(0, this.width, 0))
        } else if (this.width < windowWidth/2){
            stroke(color(0, 0, this.width))
        } else {
            stroke(color(this.width, this.width, this.width))
        }
    }

    display() {
        if(colorMode == 0){
            stroke(color(this.width,this.width,this.width));
        } else if(colorMode == 1){
            stroke(color(random(this.width),random(this.width),random(this.width)));
        } else if(colorMode == 2){
            this.paintStroke();
        }

        noFill();
        rect(   
            windowWidth/2 - (this.width/2), 
            windowHeight/2 - (this.height/2), 
            this.width, 
            this.height
        );
    }
}