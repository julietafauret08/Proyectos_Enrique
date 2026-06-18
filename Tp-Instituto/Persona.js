class Persona {
  constructor(nombre, apellido, dni, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.email = email;
  }

  presentarse() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
}

module.exports = Persona;