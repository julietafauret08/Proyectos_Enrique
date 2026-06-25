class Camaras {
    constructor(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }

    usarCamara() {
        console.log(`La cámara ${this.marca} está funcionando.`);
    }

    observarSeccion(objetivo) {
        console.log(`Observando la sección ${objetivo}.`);
    }
}

module.exports = Camaras;