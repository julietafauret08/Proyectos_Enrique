const JuegosDeCasino = require("./JuegosDeCasino");

class Ruleta extends JuegosDeCasino {
    constructor(nombre, seccion, mesas, apuestaMaxima) {
        super(nombre, seccion, mesas);
        this.apuestaMaxima = apuestaMaxima;
    }

    info() {
        return `${super.info()}, Apuesta máxima: ${this.apuestaMaxima}`;
    }
}

module.exports = Ruleta;
