let estado="inicio";
let mouns,fondo,btn,pos1=100,pos2=100,x=300,y=200,dirX = 1, dirY=-1,p1=0, p2=0;

function preload(){
fondo = loadImage ("./data/fondo.jpg");
btn = loadImage ("./data/boton.png");
}

function setup() {
createCanvas(600, 400);
mouns = new Mounstro();
}


function draw(){
  background(0);
  fill(250);
  rect(20, pos1,10,40);
  rect(570, pos2,10,40);
  stroke(255);
  line(300,0,300,400);
  circle(x,y, 11,11);
 
  mouns.display();
  mouns.colision(x,y);

 
    if(keyIsDown(65))
     {
      pos1 = pos1 - 4;
     }
  if(keyIsDown(90))
     {
      pos1 = pos1 + 4;
     }
 
 
 
  if(keyIsDown(UP_ARROW))
     {
      pos2 = pos2 - 4;
     }
  if(keyIsDown(DOWN_ARROW))
     {
      pos2 = pos2 + 4;
     }
 
 
   x = x+(2 * dirX);
  y = y+(2 * dirY);
 
  if(y > height)
    {
     dirY = -1;
    }
   if(y < 0)
    {
     dirY = 1;
    }
  //Rebote bolita contra el jugador 1 Izq Mouse y puntaje
 
  if(x < 30)
    {
      if(y > pos1 &&  y < pos1 +40)
      {
       dirX = 1;
      }
      if(x < 20)
      {
       x = width/2; y= height/2;
        p2++
      }
    }
 
  //Rebote botita contra el jugador 2 Der Flechas y puntaje
   if(x > width-30)
    {
      if(y > pos2 && y < pos2 +40)
      {
       dirX = -1;
      }
      if(x > width -20)
      {
       x = width/2; y= height/2;
        p1++
      }
    }
  //Texto en pantalla de puntaje
  textSize(20);
  fill(255);
  text("jugador 1:",20,30);
  text(p1,170,30);  
  text("Jugador 2:", 320,30);
  text(p2, 450,30);
 
  if((p1 == 5)||(p2 == 5)){
   
   estado = "fin";
  }  
 
}  
