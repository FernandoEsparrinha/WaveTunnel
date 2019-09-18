function keyPressed() {
   
      if(keyCode == UP_ARROW) {
        rectangleWave.increaseWaves();
      }
      if(keyCode == DOWN_ARROW){
        rectangleWave.decreaseWaves(); 
      }
      if(keyCode === LEFT_ARROW){
        rectangleWave.decreaseSpeed();
      }
      if(keyCode === RIGHT_ARROW){
        rectangleWave.increaseSpeed();
      }
    
  }
  