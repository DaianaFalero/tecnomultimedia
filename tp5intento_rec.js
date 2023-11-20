//Falero Daiana
// tp5 rec

let p;
let fondo;
let img;


function preload() {
  console.log ("carga img"); 
  fondo = loadImage("data/oceano.jpg");
  img = loadImage("data/monstruo.png");
}

function setup() {
  createCanvas(600, 400);
  p = new Principal();
}

function draw() {
  p.display();
}

function mousePressed() {
  p.mouse();
}  


//let p; 
//let fondo;
//let img;
////let estado = "menu"; 

//function preload() {
//  fondo = loadImage('./data/oceano.jpg');
//  img = loadImage('./data/monstruo.png');
//}

//function setup() {
//  createCanvas(600, 400); 
//  p = new Principal(fondo, img);
//}

//function draw() {
//  p.display();
//}

//function mousePressed() {
//  p.mouse();
//}
