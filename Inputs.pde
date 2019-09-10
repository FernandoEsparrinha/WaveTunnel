void keyPressed() {
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
