//FALERO DAIANA
//COMISION 1
//TP2
// https://www.youtube.com/watch?v=RySI5pQl8BA
PImage imagen;
String estado = "inicio";

void setup(){
 size(800,400); 
 imagen = loadImage ("circulos.jpeg");
 background (36,181,114);
}  

void circulo(float y, float d){
 fill(0);
arc(0, y, d, d, 0, 3.14159); // de radianes a grados
fill(255);
arc(0, y, d, d, 3.14159,6.28319);
if(estado=="e1")
  fill(200,random(255),200); 
   else 
     fill( 102,47,148);
    noStroke ();
circle(0,y,d-7); 
}

float tam(int c){ //TAMAÑO DE LOS CIRCULOS
 float r=0; 
   r = map(c,1 , 2, 1,7);  // recibe un valor y lo retorna 
  return r;
}  
float sep(int c){ 
 float r=0; 
   r = map(c,1 ,5,3, c*7);  // separacion de los circulos
  return r;
}  
void circulitos(int x, int y, int cant) {
  
  for (int c=0; c<=12; c++){ 
  for (int i=0; i<=18; i++) {
    
    if(estado =="e1")
     fill(200,random(255),200); 
       else
         fill(250); 
    push();
    translate(x, y);
    rotate(radians(i*(360/cant)/2)); // para darle forma
   circulo(sep(c), tam(c));
    pop();
  }
  }
}
void draw(){ 
circulitos(600,200, 8);  
  image(imagen, 0,0,400,400);
} 
void keyPressed(){
  // PRESIONE LA TECLA "E" PARA VER EL EFECTO
 if(key == 'e')
   estado="e1";   
   //PRESIONE LA TECLA "I" PARA VOLVET AL ESTADO INICIAL
 if(key == 'i')
  estado= "inicio";
}
