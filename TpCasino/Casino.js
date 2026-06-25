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
        this.juegos.push(...juegos);
    }

    usarCamara(camara, objetivo) {
        camara.usarCamara();
        camara.observarSeccion(objetivo);
    }

    info() {
        let texto = `Casino: ${this.nombre}
Capacidad: ${this.capacidad}
Secciones: ${this.secciones}

Juegos:
`;

        this.juegos.forEach(juego => {
            texto += juego.info() + "\n\n";
        });

        return texto;
    }
}

module.exports = Casino;