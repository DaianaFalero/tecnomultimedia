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

int cbx1=120;
int cbx2=440;
int cby=430;

String estado="pant11";

void setup(){
 
  size(600,600);

  historia[12] = "Novela escrita por Ray Bradbury \n trabajo realizado por Falero Daiana";
  historia[11] = "La Sirena";
  historia[1] = "En un remoto faro, dos hombres esperan la llegada de la niebla todas las noches";
  historia[2] = "El narrador y un hombre llamado McDunn trabajan en una torre de piedra, lejos de tierra\n firme, para alertar a los barcos que pasan a través de la niebla sobre su proximidad a la \n costa. La torre emite luces rojas y blancas, y también una Voz, el grito profundo que la\n sirena envía al mundo. Es un trabajo solitario. La noche anterior a que sea el turno del\n narrador de regresar a tierra, McDunn le dice que tiene algo especial que contarle.\n ELIJA UNA OPCION \n A: Le cuenta que no quiere volver al faro \n B: Le cuenta sobre una sirena";
  historia[3] = /*A*/ "McDunn le cuenta que lleva mucho años trabajando y que lo mejor sería no seguir ya que \n esta cansado, por lo que el narrador le cuestiona si es porque ya no quiere seguir \n trabajando con el, ya que siempre trabajaron juntos, y McDunn le responde\n A:Ya cumplí mis años en este lugar y ultimamente no nos hemos estado llevando bien, \n asi que apurar mi jubilacion es la mejor opcion \n B:Querido amigo, son tantos años los que llevo aquí que llegó el momento de jubilarme ";
  historia[4] = /*REAL B*/ "Hablan de cómo la sirena suena como un gigantesco y solitario animal que grita en la \n noche, y luego McDunn procede a decirle al narrador que en esta época del año, algo viene\n a visitar el faro. El narrador no entiende lo que está tratando de decir, pero McDunn\n le responde que solo espere y observe. Se sientan juntos mientras el tiempo pasa.\n McDunn le cuenta al narrador la historia que inventó sobre por qué esta criatura regresa\n todos los años. Él cree que el hombre que construyó la sirena quería crear un sonido que\n fuera tan solitario que quienes lo oigan conocerán la tristeza de la eternidad y la brevedad \nde la vida";
  historia[5] = /*REAL B*/ " El narrador ve a una criatura de 30 metros de largo aproximadamente, parecida a un\n dinosaurio, emerger del mar. Cuando el monstruo grita, hace un ruido inquietantemente\n similar al ruido de la sirena. Mientras escuchan sus gritos, McDunn le pregunta al narrador\n si ahora entiende por qué viene el monstruo cada año: el monstruo cree que se está\n comunicando con la sirena. Es como si pensara que esta es una amiga, compañera o\n amante perdida hace mucho tiempo. Plantean la hipótesis de que la criatura se encuentra\n en las profundidades del océano, tratando de olvidar que es la última (o una de las últimas)\n de su especie, pero la sirena lo reclama sin cesar.";
  historia[6] = /*REAL B*/ "Deciden experimentar y apagar la sirena. La criatura se enfurece y comienza a cargar\n  contra  la torre. Sus esfuerzos por volver a encender la sirena llegan demasiado tarde,\n  y la criatura no disminuye su embestida. McDunn y el narrador corren  hacia el sótano \n de la  torre, tratando de evitar el ataque del monstruo. La torre se derrumba a su\n  alrededor y el ruido  de la sirena se detiene de forma permanente. Sintieron el lamento,\n  el asombro, la soledad del enorme monstruo doblado sobre nosotros, de modo que el\n  nauseabundo hedor de su cuerpo llenaba el sótano. Lo que había llamado al monstruo y\n  había sido llamado por él ya se había ido. El monstruo emitió por su boca grandes\n  sonidos, como los de la sirena.";
  historia[7] = /*REAL B FINAL Y  VOLVER A EMPEZAR*/ "Al día siguiente, los dos hombres son rescatados y afirman que las olas fueron responsables\n del daño. Un año más tarde se construye un nuevo faro, pero el narrador ya tiene un\n nuevo trabajo en tierra. Una noche, baja y estaciona cerca del faro para escuchar.\n El monstruo nunca regresó, según McDunn. Mientras el narrador escucha la sirena, cree\n que suena como el monstruo y desea que hubiera algo que pudiera contestarle.";
  historia[8] = /*INVENTADA A */ "Tras la noticia que le dió McDunn al narrador, el narrador decide confersarle que \n todos estos años que estuvieron trabajando juntos, se eneamoró de el, y que quizá \n sea esa la razon por la que McDunn discrepa tanto con el narrador ";
  historia[9] = /*INVENTADA A */ "Minutos despues notan la presencia de un barco, a este lo habia llamo McDunn para \n que lo llevara a casa, pero el narrador se negó a que el se fuera "; 
  historia[10] =/*INVENTADA A FINAL Y  VOLVER A EMPEZAR*/  "McDunn le confesó que sentía lo mismo pero que no podía corresponderle \n ya que el tiene una familia, y que no la abandonaría por el, asi que con \n lagrimas en los ojos, se despidieron";  
  historia[13] = /*INVENTADA B */ "El narrador se sorprende y le dice que quizá podría reducir las horas \n de trabajo, que no es necesario que trabaje tanto pero que porfavor no se fuera \n ";
  historia[14] = /*INVENTADA B */ "McDunn decide que lo sobrepensaría pero que no es algo que crea que puede reepensar. \n Dias despues, McDunn le cuenta a narrador que al final si se quedaría pero que trabajaría \n muchas horas menos";  
 
 
   f1 = loadImage("faro1.jpg");
   f2 = loadImage("faro2.jpg");
   f3 = loadImage("faro3.jpg");
   f4 = loadImage("faro4.jpg");
}  

   
     
void pantalla2B(int num, PImage img, String tx1, String tx2){ // Lo utilicé para los botones, ubicacion de imagen y texto
     
      textSize(15);
      fill(255,255,255);
      image(img, 0, 0,600,600);
       
      text(historia[num], 20,50);
     
     
     
      textSize(15);
      for(int i=0; i<2; i++){
       
      if(tx1 != ""){
        fill(50);
        ellipse(cbx1,cby,90,80);
        fill(200);
        text(tx1, 85, 435);
      }
      if(tx2 != ""){
         fill(50);
        ellipse(cbx2,cby,90,80);
         fill(200);
        text(tx2, 405, 435);
      }    
      }
   }  



boolean clic(int x, int y){
 
  boolean ok=false;
 
   if(dist(x,y,mouseX,mouseY) < 40)
         ok = true;
   
 return ok;
}  





void draw(){
 
     background(0);  
 
 
    if(estado == "pant11")
       pantalla2B(11,f1,"CREDITOS","COMENZAR");
           
     if(estado == "pant1")    
        pantalla2B(1,f2,"","Siguiente");
       
      if(estado == "creditos")      
         pantalla2B(12,f2,"","Regresar");
     
     if(estado == "pant2")
       pantalla2B(2,f2,"opc A","op B");
       
       if(estado == "pant3")                     // OPCIONES     
          pantalla2B(3,f3,"op A2","op B2");     
          
            if(estado == "pant4")              // HISTORIA REAL B
        pantalla2B(4,f2,"","Siguiente");
       
         if(estado == "pant5")                // HISTORIA REAL B
        pantalla2B(5,f2,"","Siguiente");
        
        if(estado == "pant6")                 // HISTORIA REAL B
        pantalla2B(6,f2,"","Siguiente"); 
        
   if(estado == "pant7")                      // FINAL N 1B 
         pantalla2B(7,f4,"","Menú");    
         
        if(estado == "pant8")               // HISTORIA INVENTADA A
        pantalla2B(8,f2,"","Siguiente");  
        
           if(estado == "pant9")              // HISTORIA INVENTADA A
        pantalla2B(9,f2,"","Siguiente");     
                      
        if(estado == "pant10")    
        pantalla2B(10,f2,"","Menú ");      // FINAL 2A
        
          if(estado == "pant13")                 // HISTORIA INVENTADA B2
        pantalla2B(13,f2,"","Siguiente ");    
        
          if(estado == "pant14")                 // Final 2B
        pantalla2B(14,f2,"","Menú ");      
}

void mousePressed(){
      if(estado == "creditos"){
     
            if(clic(cbx2,cby))
               estado = "pant11";
     
     }else
 
    if(estado == "pant11"){
     
      if(clic(cbx1,cby))
        estado = "creditos";
         else
            if(clic(cbx2,cby))
               estado = "pant1";
     
     }else
   
    if(estado == "pant1"){
       if(clic(cbx2,cby))
             estado = "pant2";
     
   
     } else
     
     if(estado == "pant2"){
       if(clic(cbx1,cby))
        estado = "pant3"; // op A1
         else
            if(clic(cbx2,cby))
               estado = "pant4"; //oP b1
     
   
     }else
     
      if(estado == "pant3"){    //OP2 A Y OP B2 
       if(clic(cbx1,cby))
        estado = "pant8";   // OP A2 HISTORIA INVENTADA 
         else
            if(clic(cbx2,cby))
               estado = "pant13"; // OP B2 DE HISTORIA INVENTADA 
     
     }else
     
       if(estado == "pant4"){ // HISTORIA REAL B
            if(clic(cbx2,cby))
               estado = "pant5";
     
     }else
     
       if(estado == "pant5"){ // HISTORIA REAL B
            if(clic(cbx2,cby))
               estado = "pant6";
   
        }else
     
       if(estado == "pant6"){ // HISTORIA REAL B
            if(clic(cbx2,cby))
               estado = "pant7";
     
     
        }else
     
       if(estado == "pant7"){ //final y volver a empezar B
            if(clic(cbx2,cby))
               estado = "pant11";
     
           }else
     
       if(estado == "pant8"){  // HISTORIA INVENTADA A
            if(clic(cbx2,cby))
               estado = "pant9";
               
            }else
     
       if(estado == "pant9"){  // HISTORIA INVENTADA A
            if(clic(cbx2,cby))
               estado = "pant10";         
                        
            }else
     
       if(estado == "pant10"){  // FINAL DE HISTORIA INVENTADA A2
            if(clic(cbx2,cby))
               estado = "pant11";      
           
            }else   
            
               if(estado == "pant13"){   // HISTORIA INVENTADA B2
            if(clic(cbx2,cby))
               estado = "pant14";    
                             
            }else
     
       if(estado == "pant14"){  // HISTORIA INVENTADA B2
            if(clic(cbx2,cby))
               estado = "pant11";  
         
     
  
     }

}
