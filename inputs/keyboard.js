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
      if(keyCode === 49){
        colorMode = 0;
      }
      if(keyCode === 50){
        colorMode = 1;
      }
      if(keyCode === 51){
        colorMode = 2;
      }
  }
  