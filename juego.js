
class Juego{

   constructor(){
 
     this.pos1=100;
     this.pos2=100;
     this.x=300;
     this.y=200;
     this.dirX = 1;
     this.dirY=-1;
   }   
display(){
   
  fill(250);
  rect(20, this.pos1,10,40);
  rect(570, this.pos2,10,40);
  stroke(255);
  line(300,0,300,400);
  circle(this.x,this.y, 11,11);
  
   this.x = this.x+(2 * this.dirX);
  this.y = this.y+(2 * this.dirY);
 
  if(this.y > height)
    {
     this.dirY = -1;
    }
   if(this.y < 0)
    {
     this.dirY = 1;
    }
  //Rebote bolita contra el jugador 1 Izq Mouse y puntaje
 
  if(this.x < 30)
    {
      if((this.y > this.pos1) &&  (this.y < this.pos1 +40))
      {
       this.dirX = 1;
      }
      if(this.x < 20)
      {
       this.x = width/2;
       this.y = height/2;
      }
    }
 
  //Rebote botita contra el jugador 2 Der Flechas y puntaje
   if(this.x > width-30)
    {
      if((this.y > this.pos2) && (this.y< this.pos2 +40))
      {
       this.dirX = -1;
      }
      if(this.x > width -20)
      {
       this.x = width/2; this.y= height/2;
      }
    }
  //Texto en pantalla de puntaje
  textSize(20);

 
  if (this.cant >= 5) {
   estado = "fin";
  }  
      
  }  
  
 teclado(){
   
    if((keyIsDown(65))&&(this.pos1 > 0))
     {
      this.pos1 = this.pos1 - 4;
     }
  if((keyIsDown(90))&&(this.pos1 < 355))
     {
      this.pos1 = this.pos1 + 4;
     }
 
  if((keyIsDown(UP_ARROW))&&(this.pos2 > 0))
     {
      this.pos2 = this.pos2 - 4;
     }
  if((keyIsDown(DOWN_ARROW))&&(this.pos2 < 355))
     {
      this.pos2 = this.pos2 + 4;
     }
   
 }  
 
 
 posX(){
  return this.x;
 }  
 
 
 posY(){
  return this.y;
 }  
   
 
 
 
}