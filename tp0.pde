//Falero Daiana
// tp0 comision 1
PImage paisaje; 
size(800,400);
background(214,240,255); //fondo de color
paisaje=loadImage("paisaje.jpg");
image(paisaje,0,0,400,400);
fill(87,142,175);
noStroke();
rect(400,250,800,150); //agua
fill(67,148,155);
triangle(400,250,400,0,600,250); // montaña inferior
triangle(550,250,600,200,650,250);// montaña chiquita 
fill(34,100,30);
triangle(400,250,400,0,550,250); //montaña izquiera superior
fill(0);
ellipse(590,295,20,20); //persona
ellipse(590,280,15,35); //persona
ellipse(590,260,5,10); //persona
ellipse(590,252,10,15);//persona
fill(111,91,65); 
quad(520,400,560,300,620,300,660,400); //muelle 
fill(25,77,48);
quad(400,350,400,280,510,280,480,350); //arbusto
fill(50,155,96);
triangle(600,250,800,0,800,250); //montaña derecha
fill(218,219,192);
triangle(650,200,800,0,800,160); //"parte clara" de la montaña derecha
fill(62,39,6);
stroke(62,39,6);
strokeWeight(2);
line(540,350,640,350); //lineas del mini muelle
line(530,380,650,380);
line(551,320,628,320);
