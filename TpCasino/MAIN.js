const Casino = require("./Casino");
const BlackJack = require("./BlackJack");
const Ruleta = require("./Ruleta");
const Tragamonedas = require("./Tragamonedas");
const Camaras = require("./Camaras");

// Crear casino
const casino = new Casino("Casino Central", 500, 5);

// Crear juegos
const blackjack = new BlackJack("BlackJack", "VIP", 10, 5, 100);
const ruleta = new Ruleta("Ruleta", "Clásica", 8, 1000);
const tragamonedas = new Tragamonedas("Tragamonedas", "Electrónica", 20, "Sony", "Digital", 5000);

// Agregar juegos al casino
casino.agregarJuego(blackjack);
casino.agregarJuego(ruleta);
casino.agregarJuego(tragamonedas);

// Crear cámara
const camara = new Camaras("Canon", "HD");

// Mostrar info
console.log(casino.info());
console.log(blackjack.info());
console.log(ruleta.info());
console.log(tragamonedas.info());
console.log(camara.usarCamara("Mesa VIP"));
console.log(camara.observarSeccion("Sección Clásica"));
