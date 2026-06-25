const Casino = require("./Casino");
const Camaras = require("./Camaras");
const BlackJack = require("./BlackJack");
const Ruleta = require("./Ruleta");
const Tragamonedas = require("./Tragamonedas");

const casino = new Casino("Casino Royal", 500, 3);

const blackjack = new BlackJack(
    "BlackJack",
    "Cartas",
    10,
    6,
    1000
);

const ruleta = new Ruleta(
    "Ruleta Europea",
    "Ruletas",
    5,
    50000
);

const tragamonedas = new Tragamonedas(
    "Slots",
    "Máquinas",
    30,
    1000000
);

casino.agregarJuego(blackjack);

casino.agregarJuegos([
    ruleta,
    tragamonedas
]);

const camara = new Camaras(
    "Hikvision",
    "IP"
);

casino.usarCamara(
    camara,
    "Ruletas"
);

console.log(casino.info());