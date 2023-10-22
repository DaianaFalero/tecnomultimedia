////////////////////////////////////////////////////////////////////////



class Mounstro {
  constructor() {
    this.px = width/2;
    this.py = height+40;
    let img;
    this.dir = 'aba';
    this.cant = 0;
    btn = loadImage ("./data/mo.png");
  }

  colision(x_, y_) {
    if(dist(x_, y_, this.px+45, this.py+60) < 30){
      this.py = height+40;
      this.cant = this.cant + 1 ;
      console.log(this.cant);
     
  }
  }

  cant(){
   
   return cant;
  }
 
  display() {
     text(this.cant, 70, 70);
   image(btn,this.px, this.py,90,120);
    if(this.py > height){
      this.dir = 'arr';
    }else
     if(this.py < 0){
        this.dir = 'aba';
     }
    if(this.dir == 'aba'){
      this.py = this.py + 1.5;
    }else{
      this.py = this.py - 1.5;
    }
     
     
  }
}
