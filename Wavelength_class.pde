class Wavelength {
   int numberOfInitialWaves = 1;
   ArrayList<Wave> waves;
   
   Wavelength(){
     waves = new ArrayList<Wave>();
     
     for(int i=0; i < numberOfInitialWaves; i++){
         waves.add(new Wave(i+1));
     }
   }
   
   void increaseWaves(){
      waves.add(new Wave(1));
   }
   
   void decreaseWaves(){
     if(waves.size() > 0) {
       waves.remove(0);  
     }
   }
   
   void increaseSpeed(){
      for(int i=0; i < waves.size(); i++){
         this.waves.get(i).increaseSpeed();
     }
   }
   
   void decreaseSpeed(){
      for(int i=0; i < waves.size(); i++){
         this.waves.get(i).decreaseSpeed();
     }
   }
   
   void display() {
      for(int i=0; i < waves.size(); i++){
        this.waves.get(i).move();
        this.waves.get(i).display(); 
      }
   }
}
