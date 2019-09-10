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
   
   void increaseWaves(){
      lines.add(new Line(1, 17, 9));
         lines.add(new Line(1, -17, 9));
         lines.add(new Line(1, -17, -9));
         lines.add(new Line(1, 17, -9));
   }
   
   void decreaseWaves(){
     if(lines.size() > 0) {
       lines.remove(0);  
     }
   }
   
   void increaseSpeed(){
      for(int i=0; i < lines.size(); i++){
         this.lines.get(i).increaseSpeed();
     }
   }
   
   void decreaseSpeed(){
      for(int i=0; i < lines.size(); i++){
         this.lines.get(i).decreaseSpeed();
     }
   }
   
   void display() {
      for(int i=0; i < lines.size(); i++){     
        this.lines.get(i).move();
        this.lines.get(i).display(); 
      }
   }
}
