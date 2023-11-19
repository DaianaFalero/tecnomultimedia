//Falero Daiana
//tp5 

let estado="inicio",t;
let mouns,jue,tim;

function preload(){
    this.fondo = loadImage('./data/oceano.jpg');
}

function setup() {
createCanvas(600, 400);
mouns = new Moustro();
jue = new Juego();
tim = new Tiempo();
}


function draw(){
 
 
 
  if(estado=="inicio"){
image(fondo,0,0,600,400);
jue.display();
  jue.teclado();
  mouns.display();
  mouns.colision(jue.posX(), jue.posY());
  tim.display();
  t=tim.time1();
  if(t > 260 ){
    estado="perdieron";
  }
  }
   if(estado=="perdieron"){
      background(0,0,100);
   }  
}  
