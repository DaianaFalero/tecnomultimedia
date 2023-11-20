//Falero Daiana
// tp5 rec
//https://www.youtube.com/watch?v=0Tli4AROfGU
let cp;
let fondo;
let img;



function preload() {
  console.log ("carga img"); 
  fondo = loadImage("data/oceano.jpg");
  img = loadImage("data/monstruo.png");
}

function setup() {
  createCanvas(600, 400);
 
 cp = new Claseprincipal(); 
}

function draw() {

  cp.display();
}

function mousePressed() {

 cp.mouse();
}  


