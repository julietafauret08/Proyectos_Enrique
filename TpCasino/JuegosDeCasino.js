class JuegosDeCasino {
    constructor(nombre, seccion, mesas) {
        this.nombre = nombre;
        this.seccion = seccion;
        this.mesas = mesas;
    }

    info() {
        return `Juego: ${this.nombre}
Sección: ${this.seccion}
Mesas: ${this.mesas}`;
    }
}

module.exports = JuegosDeCasino;