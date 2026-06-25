const JuegosDeCasino = require("./JuegosDeCasino");

class BlackJack extends JuegosDeCasino {
    constructor(nombre, seccion, mesas, jugadoresPorMesa, apuestaMinima) {
        super(nombre, seccion, mesas);
        this.jugadoresPorMesa = jugadoresPorMesa;
        this.apuestaMinima = apuestaMinima;
    }

    info() {
        return `${super.info()}, Jugadores por mesa: ${this.jugadoresPorMesa}, Apuesta mínima: ${this.apuestaMinima}`;
    }
}

module.exports = BlackJack;
