//Falero Daiana
//Comision 1
// tp3 

String[] historia = new String[18];

PImage f1;
PImage f2;
PImage f3;
PImage f4;
PImage f5;
PImage f6;
PImage f7;
PImage f8;
PImage f9;


String estado="pant11";

void setup(){
 
  size(600,600);

  historia[12] = "Novela opcion B escrita por Ray Bradbury y trabajo realizado por Falero Daiana";
  historia[11] = "La Sirena";
  historia[1] = "En un remoto faro, dos hombres esperan la llegada de la niebla  \n todas las noches";
  historia[2] = "Aceitan la maquinaria y encienden el faro de niebla para guiar \n a los barcos solitarios en la oscuridad. ¿Que deberian hacer?  \n  A:Esperar a que los barcos lleguen \n B:Juntos, lanzar la luz exploradora en busca de los barcos mientras \n la sirena del faro resuena en el aire. "; 
  historia[3] = /*A*/ "Mientras esperan los barcos, notan que algo anda mal en el faro,\n  está titilando tanto que podría apagarse";
  historia[4] = "HISTORIA REAL B";
  historia[5] = "McDunn: Es una vida solitaria aquí, pero te has acostumbrado, \n ¿verdad? Protagonista: Sí, gracias a Dios tienes una buena \n conversación";
  historia[6] = "opc A historia NO real";
  historia[7] = "7";
  historia[8] = "8";
  historia[9] = "9";
  historia[10] = "10";  
  historia[13] = "111";
  historia[14] = "12";  
  
   f1 = loadImage("faro1.png");
   f2 = loadImage("faro2.jpg");
   f3 = loadImage("faro3.jpg"); 
}  

   void pantalla(int num, PImage img){  
     
      textSize(20);
      fill(0);
      image(img, 0, 0,600,600);
       
      text(historia[num], 20,50);
       
   }  
      
   void pantalla2B(int num, PImage img, String tx1, String tx2){ // Lo utilicé para los botones, ubicacion de imagen y texto
     
      textSize(20);
      fill(0);
      image(img, 0, 0,600,600);
       
      text(historia[num], 20,50);
     
       for(int i=0; i<2; i++){    
         rect(70+(i*270),400,100,30);
       }
       
      fill(220);
      textSize(18);
     
      text(tx1, 73, 415);
      text(tx2, 353, 415);
   }  





void draw(){
 
     background(0);  
 
 
    if(estado == "pant11")
       pantalla2B(11,f1,"CREDITOS","COMENZAR");
           
     if(estado == "pant1")    
        pantalla(1,f2);
       
      if(estado == "creditos")      
         pantalla(12,f2);

///////////////////////////////
     
     if(estado == "pant2")
       pantalla2B(2,f2,"opc A","op B");
       
       if(estado == "pant3")      
          pantalla2B(3,f1,"A1","B1");     //A OPCIONES 
        
   if(estado == "pant4")      
        // pantalla2B(4,f1,"A2","B2");      //B HISTORIA REAL
        pantalla(4,f3);  
        
////////////////////////////////////////////////////////////////
        
      if(estado == "pant5")      
        pantalla(5,f3);
        
   if(estado == "pant6")      
        pantalla(6,f2) ;     
             
}
 //////////////////////////////////////////////////        
         
 
void mousePressed(){
 
    if(estado == "pant11"){
     
      if(mouseX < 300)
        estado = "creditos";
         else
            estado = "pant1";
     
  }else
   
    if(estado == "pant1")
       estado = "pant2";
       else
     if(estado == "creditos")
       estado = "pant11";
       else
       if(estado == "pant2"){
     
 ////////////////////////////////////////////////  A  Y  B        
     if(mouseX > 300)
        estado = "pant2";
         else
            estado = "pant4";   
        
          if(mouseX < 300)         
        estado = "pant3";
         else
            estado = "pant5";
/////////////////////////////////////////////////////


    }
}  
