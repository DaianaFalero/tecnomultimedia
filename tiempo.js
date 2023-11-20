
class Tiempo {

  constructor() {
    this.act = millis(); //miliseg
    this.time = 0; // Inicia en cero
  }
  
  display() {
    this.time = (millis()-this.act)/1000; //convierte el tiempo en segundos
    text(this.time, 579, 30);
  }

  time1() {
    return this.time;
  }
}
