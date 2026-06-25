class Casino {
    constructor(nombre, capacidad, secciones) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.secciones = secciones;
        this.juegos = [];
    }

    agregarJuego(juego) {
        this.juegos.push(juego);
    }

    agregarJuegos(juegos) {
        this.juegos = this.juegos.concat(juegos);
    }

    info() {
        return `Casino: ${this.nombre}, Capacidad: ${this.capacidad}, Secciones: ${this.secciones}, Juegos: ${this.juegos.length}`;
    }
}

module.exports = Casino;
