//Falero Daiana
//Tp4
//comision 1
//https://youtu.be/RCNRkq2rWd8

let estado="inicio";
let fondo,pos1=100,pos2=100,x=300,y=200,direcX = 1, direcY=-1,p1=0, p2=0;
let bx1=100;
let bx2=250;
let bx3=525;//INICIAR
let by=330




function preload(){
fondo = loadImage ("./data/fondo.png");

}

function setup() {
createCanvas(600, 400)

}
function clic(x, y){
 
  let ok=false;
 
   if(dist(x,y,mouseX,mouseY) < 55){
         ok = true;
         }
 return ok;
}  


function jugar(){
  background(254,150,247);
  fill(250);
  rect(20, pos1,10,40);
  rect(570, pos2,10,40);
  stroke(255);
  line(300,0,300,400);
  circle(x,y, 11,11);
 
    if(keyIsDown(65))// ascii A
     {
      pos1 = pos1 - 4; // velocidad de las barras
     }
  if(keyIsDown(90))//ascii Z
     {
      pos1 = pos1 + 4; // vel de slas barras
     }
   
  if(keyIsDown(UP_ARROW))//flecha arriba
     {
      pos2 = pos2 - 4;
     }
  if(keyIsDown(DOWN_ARROW))//flecha abajo
     {
      pos2 = pos2 + 4;
     }
 
 
   x = x+(2.5 * direcX); // velocidad de la pelota en x
  y = y+(2.5 * direcY);// velocidad en y
 
 // si la pelota supero el limite de altura, tiene que cambiar de direccion 
  if(y > height)
    {
     direcY = -1; //
    }
   if(y < 0)
    {
     direcY = 1; 
    }
    
    
  //si la pelota toca el lado izq, es punto para p2
  if(x < 30) // x menor q 30
    {
      if(y > pos1 &&  y < pos1 +40)
      {
       direcX = 1;
      }
      if(x < 20)
      {
       x = width/2; y= height/2;
        p2++
      }
    }
 
 // si la pelota rebota dentro de la pantalla -30 esta dentro del rango, si es asi cambia la direccion, si x es mayor al ancho de la pantalla -20 se reestablece la posicion de la pelota y se le suma un punto a jugador 1 
   if(x > width-30)
    {
      if(y > pos2 && y < pos2 +40)
      {
       direcX = -1;
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
  text(p2, 480,30);
 
  if((p1 == 7)||(p2 == 7)){ /// cantidad de puntos para ganar
   
   estado = "fin";
  }  
 
}  
function draw() {

  if(estado == "inicio"){
      p1=0;
      p2=0;
    image(fondo,0,0);
     noStroke();
    ellipse(bx3,by,120,100);
    textSize(25);
    fill(255,255,255);
    text ("INICIAR",480,340);
    
   fill(254,150,247);
    ellipse(bx1,by,120,100);
     textSize(20);
    fill(255,255,255);
    text ("Creditos",65,340);

     fill(254,150,247);
     ellipse(bx2,by,120,100);
     textSize(20);
    fill(255,255,255);
    text ("Reglas",220,340);
    
    fill(254,150,247);
    textSize(150);
    text("PONG",80,height/2);

  }else
    if(estado == "juego"){
     
      jugar();
     
    } else
    if(estado == "creditos" ){
      background(254,150,247);
      textSize(20);
      fill(255,255,255);
      text('Juego originalmente creado por Allan Alcorn, este videojuego fue programado por Falero Daiana',10,20,600);
      textSize (15);
      text ("clic para volver al menú", 210,350);
          
    }else 
    if(estado == "reglas" ){
      background(254,150,247);
      textSize(20);
      fill(255.255,255);
      text("Las reglas del juego son:",10,20);
      text("En el modo clásico, tu único objetivo es tratar de pasar la pelota por la paleta de tu oponente. El primer jugador en anotar siete puntos gana el juego. En cada ronda, la pelota se servirá al jugador que no anotó el punto. Si sos el jugador 2, usarás las teclas de flecha para controlar la barra en el lado derecho, si sos el jugador 1, el lado izquierdo se controla con las teclas A y Z ",10,30,600);
      textSize (15);
       text ("clic para volver al menú", 210,350);
          
  } else
      if(estado == "fin"){
         background(254,150,247);
       textSize(50)
         if(p1 > p2){
         text("¡GANA JUGADOR UNO!",20,height/2);
          textSize(15);
         text ("clic para volver al menú", 210,350);
       
         }else{
            text("¡GANA JUGADOR DOS!",20,height/2);
             textSize(15);
           text ("clic para volver al menú", 210,350);         
      }         
  }  
}

  
function mousePressed() {
  if (estado == "inicio") {
    if (clic(bx3, by)) {
      estado = "juego";
    } else if (clic(bx1, by)) {
      estado = "creditos";
    } else if (clic(bx2, by)) {
      estado = "reglas";
    }
  } else if (estado == "juego") {
    // Lógica del juego
  } else if (estado == "fin") {
   estado = "inicio"; 
   
  } else if (estado == "creditos") {
    estado = "inicio"; 
  } else if  (estado == "reglas"){
  estado= "inicio";
}
}
