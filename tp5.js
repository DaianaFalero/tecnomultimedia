//FALERO DAIANA
//TP5
//COMISION 1
//No está terminado, me faltan ajustar algunas cosas

let estado="inicio";
let mouns,fondo,btn,pos1=100,pos2=100,x=300,y=200,dirX = 1, dirY=-1,p1=0, p2=0;
let bx3=525;//INICIAR
let by=330


function preload(){
fondo = loadImage ("./data/fondo.jpg");
//btn = loadImage ("./data/boton.png");
}

function setup() {
createCanvas(600, 400);
mouns = new Mounstro();
}
function clic(x, y){
 
  let ok=false;
 
   if(dist(x,y,mouseX,mouseY) < 55){
         ok = true;
         }
 return ok;
}  

function jugar(){
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
      
      }
    }
  //Texto en pantalla de puntaje
  textSize(20);
  fill(255);
 
 
  if((p1 == 5)||(p2 == 5)){
   
   estado = "fin";
  }  
 
}  
function draw (){
  
 if(estado == "inicio"){
      p1=0;
      p2=0;
    image(fondo,0,0,600,400);
    fill(0);
    ellipse(bx3,by,120,100);
    textSize(25);
    fill(255,255,255);
    text ("INICIAR",480,340);
    
    textSize(12);
    text("Instrucciones:En equipo eliminar al monstruo 5 veces en menos de un minuto,los controles del lado derecho son las flechas y el de la izquierda la A y Z",50,300,400);
    fill(255);
    textSize(150);
    text("PONG",80,height/2);

  }else
    if(estado == "juego"){
     
      jugar();
    }else
      if(estado == "fin"){
         background(0,0,200);
       textSize(50)
         if(5 > 0){
         text("¡GANARON!",20,height/2);
          textSize(15);
         text ("clic para volver al menú", 210,350);
         }
      }}
      
 function mousePressed() {
  if (estado == "inicio") {
    if (clic(bx3, by)) {
      estado = "juego";
    }
  } else if (estado == "juego") {
    // Lógica del juego
  } else if (estado == "fin") {
   estado = "inicio"; 
   
  }    
 } 
