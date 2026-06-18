const Persona = require("./Persona");

class Profesor extends Persona {
  constructor(nombre, apellido, dni, email) {
    super(nombre, apellido, dni, email);
    this.cursos = [];
  }

  asignarCurso(curso) {
    if (!this.cursos.includes(curso)) {
      this.cursos.push(curso);
    }

    if (!curso.profesores.includes(this)) {
      curso.profesores.push(this);
    }
  }

  verCursos() {
    console.log(`Profesor: ${this.nombre} ${this.apellido}`);
    console.log("Cursos que dicta:");

    this.cursos.forEach((curso) => {
      console.log("- " + curso.nombre);
    });
  }
}

module.exports = Profesor;