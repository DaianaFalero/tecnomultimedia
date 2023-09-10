//Falero Daiana
//Tp4
//comision 1

let estado="inicio";
let fondo,btn,pos1=100,pos2=100,x=300,y=200,dirX = 1, dirY=-1,p1=0, p2=0;
let bx1=50;
let bx2=200;
let bx3=460;//INICIAR
let by1=280
let by2=280//INICIAR




function preload(){
fondo = loadImage ("./data/fondo.png");
btn = loadImage ("./data/boton.png");

}

function setup() {
createCanvas(600, 400)

}
function clic(x, y){
 
  let ok=false;
 
   if(dist(x,y,mouseX,mouseY) < 40){
     //(mouseX>0 && mouseX<100 && mouseY>380 && mouseY<480) 
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
      pos1 = pos1 - 4;
     }
  if(keyIsDown(90))//ascii Z
     {
      pos1 = pos1 + 4;
     }
 
 
 
  if(keyIsDown(UP_ARROW))//flecha arriba
     {
      pos2 = pos2 - 4;
     }
  if(keyIsDown(DOWN_ARROW))//flecha abajo
     {
      pos2 = pos2 + 4;
     }
 
 
   x = x+(2.5 * dirX); // velocidad de la pelota en x
  y = y+(2.5 * dirY);// velocidad en y
 
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
  text(p2, 480,30);
 
  if((p1 == 5)||(p2 == 5)){ /// cantidad de puntos para ganar
   
   estado = "fin";
  }  
 
}  
function draw() {

  if(estado == "inicio"){
    image(fondo,0,0);
    image(btn,bx3,by2,120,100);
    textSize(25);
    fill(255,255,255);
    text ("INICIAR",480,340);
    
    image(btn,50,300,120,70);
     textSize(20);
    fill(255,255,255);
    text ("Creditos",80,340);
    
    image(btn,200,300,120,70);
     textSize(20);
    fill(255,255,255);
    text ("Reglas",230,340);
    
   // ellipse(515,330,120,100);
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
      text('Juego originalmente creado por Allan Alcorn, este videojuego\n  fue programado por Falero Daiana',20,height/6);
     
    }else 
    if(estado == "reglas" ){
      background(254,150,247);
      textSize(20);
      fill(255.255,255);
      text("las reglas del juego son:",50,50);
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
    if (clic(bx3, by2)) {
      estado = "juego";
    } else if (clic(bx1, by1)) {
      estado = "creditos";
    }else if (clic(bx2,by1)){
      estado = "reglas";
    } else if (estado == "fin") {
      estado = "inicio";
      p1 = 0;
      p2 = 0;
    }
  }
}
  
