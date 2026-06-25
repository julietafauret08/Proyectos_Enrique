class Curso {
  constructor(nombre, codigo) {
    this.nombre = nombre;
    this.codigo = codigo;

    this.alumnos = [];
    this.profesores = [];
  }

  agregarAlumno(alumno) {
    if (!this.alumnos.includes(alumno)) {
      this.alumnos.push(alumno);
    }

    if (!alumno.cursos.includes(this)) {
      alumno.cursos.push(this);
    }

    alumno.notas[this.nombre] = 0;
    alumno.faltas[this.nombre] = 0;
  }

  cargarNota(alumno, nota) {
    alumno.notas[this.nombre] = nota;
  }

  cargarFalta(alumno) {
    alumno.faltas[this.nombre]++;
  }
}

module.exports = Curso;