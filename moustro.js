
class Moustro {
  constructor() {
    this.px = width/2;
    this.py = height+40;
    this.dir = 'aba';  // Dirección inicial del monstruo ('aba': hacia abajo, 'arr': hacia arriba)
    this.cant = 0;
    this.img = img;
  }

  colision(x_, y_) {
    if (dist(x_, y_, this.px + 45, this.py+60) < 30) { // Si hay colisión, reiniciar la posición vertical del monstruo, incrementar el contador y mostrarlo en la consola
      this.py = height+40;
      this.cant++;
      console.log(this.cant);
    }
  }

  cant() {   // Método para obtener la cantidad de colisiones con el monstruo
    return cant;
  }

  display() {
    text(this.cant, 70, 70);
    image(this.img, this.px, this.py, 90, 120);
    if (this.py > height) {
      this.dir = 'arr'; // Si el monstruo llega al borde inferior, cambiar la dirección a 'arr' (arriba)
    } else
      if (this.py < 0) {
        this.dir = 'aba'; //abajo
      }

    // Actualizar la posición vertical del monstruo según su dirección
    if (this.dir == 'aba') {
      this.py = this.py + 1.5;
    } else {
      this.py = this.py - 1.5;
    }
  }
}
