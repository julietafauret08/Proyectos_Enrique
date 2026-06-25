class Camaras {
    constructor(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }

    usarCamara(objetivo) {
        return `Usando cámara ${this.marca} (${this.tipo}) para observar ${objetivo}`;
    }

    observarSeccion(objetivo) {
        return `Observando la sección: ${objetivo}`;
    }
}

module.exports = Camaras;
