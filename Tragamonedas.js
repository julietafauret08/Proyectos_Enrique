const JuegosDeCasino = require("./JuegosDeCasino");

class Tragamonedas extends JuegosDeCasino {
    constructor(nombre, seccion, mesas, marca, tipo, premioMayor) {
        super(nombre, seccion, mesas);
        this.marca = marca;
        this.tipo = tipo;
        this.premioMayor = premioMayor;
    }

    info() {
        return `${super.info()}, Marca: ${this.marca}, Tipo: ${this.tipo}, Premio mayor: ${this.premioMayor}`;
    }
}

module.exports = Tragamonedas;
