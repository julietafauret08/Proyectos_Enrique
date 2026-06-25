// Clase base
class Heroe {
    constructor(nombre, vida, mascota, vestimenta, herramienta, resistencia) {
        this.nombre = nombre;
        this.vida = vida;
        this.mascota = mascota;
        this.vestimenta = vestimenta;
        this.herramienta = herramienta;
        this.resistencia = resistencia;
    }

    comer() {
        this.vida += 10;
        console.log(`${this.nombre} comió y recuperó vida. Vida actual: ${this.vida}`);
    }

    descansar() {
        this.resistencia += 5;
        console.log(`${this.nombre} descansó. Resistencia actual: ${this.resistencia}`);
    }
}

// Clase Mago
class Mago extends Heroe {
    constructor(nombre, vida, mascota, vestimenta, herramienta, resistencia, mana, poderMagico) {
        super(nombre, vida, mascota, vestimenta, herramienta, resistencia);
        this.mana = mana;
        this.poderMagico = poderMagico;
    }

    lanzarHechizo(enemigo) {
        if (this.mana >= 10) {
            enemigo.vida -= this.poderMagico;
            this.mana -= 10;
            console.log(`${this.nombre} lanzó un hechizo a ${enemigo.nombre}.`);
            console.log(`Vida de ${enemigo.nombre}: ${enemigo.vida}`);
        } else {
            console.log(`${this.nombre} no tiene suficiente maná.`);
        }
    }

    recuperarMana() {
        this.mana += 20;
        console.log(`${this.nombre} recuperó maná. Maná actual: ${this.mana}`);
    }
}

// Clase Caballero
class Caballero extends Heroe {
    constructor(nombre, vida, mascota, vestimenta, herramienta, resistencia, fuerza) {
        super(nombre, vida, mascota, vestimenta, herramienta, resistencia);
        this.fuerza = fuerza;
    }

    atacar(enemigo) {
        enemigo.vida -= this.fuerza;
        console.log(`${this.nombre} atacó a ${enemigo.nombre}.`);
        console.log(`Vida de ${enemigo.nombre}: ${enemigo.vida}`);
    }

    defender() {
        this.resistencia += 10;
        console.log(`${this.nombre} se defendió. Resistencia: ${this.resistencia}`);
    }
}

// Crear personajes
const mago = new Mago(
    "Merlín",
    100,
    "Búho",
    "Túnica Azul",
    "Bastón",
    30,
    50,
    25
);

const caballero = new Caballero(
    "Arturo",
    120,
    "Caballo",
    "Armadura",
    "Espada",
    40,
    20
);

// Simulación del juego
console.log("=== COMBATE ===");

caballero.atacar(mago);
mago.lanzarHechizo(caballero);
caballero.defender();
mago.recuperarMana();
mago.comer();

console.log("\n=== ESTADO FINAL ===");
console.log(mago);
console.log(caballero);