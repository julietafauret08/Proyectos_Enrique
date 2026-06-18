const Persona = require("./Persona");

class Alumno extends Persona {
  constructor(nombre, apellido, dni, email) {
    super(nombre, apellido, dni, email);

    this.cursos = [];
    this.notas = {};
    this.faltas = {};
  }

  calcularRegularidad(curso) {
    const nota = this.notas[curso.nombre];
    const faltas = this.faltas[curso.nombre];

    if (nota >= 8 && faltas <= 3) {
      return "PROMOCIONADO";
    }

    if (nota >= 4 && faltas <= 10) {
      return "REGULAR";
    }

    return "LIBRE";
  }

  reporte() {
    console.log(`Alumno: ${this.nombre} ${this.apellido}`);

    this.cursos.forEach((curso) => {
      console.log("----------------------");
      console.log("Materia: " + curso.nombre);
      console.log("Nota: " + this.notas[curso.nombre]);
      console.log("Faltas: " + this.faltas[curso.nombre]);
      console.log("Estado: " + this.calcularRegularidad(curso));
    });
  }
}

module.exports = Alumno;