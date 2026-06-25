const Profesor = require("./Profesor");
const Alumno = require("./Alumno");
const Curso = require("./Curso");
const Institucion = require("./Institucion");

// Crear institución
const instituto = new Institucion("Instituto ABC");

// Crear cursos
const poo = new Curso("POO", 101);
const bd = new Curso("Bases de Datos", 102);

instituto.agregarCurso(poo);
instituto.agregarCurso(bd);

// Crear profesor
const profesor = new Profesor(
  "Carlos",
  "Perez",
  12345678,
  "carlos@gmail.com"
);

instituto.agregarProfesor(profesor);

// Crear alumnos
const alumno1 = new Alumno(
  "Juan",
  "Lopez",
  11111111,
  "juan@gmail.com"
);

const alumno2 = new Alumno(
  "Maria",
  "Gomez",
  22222222,
  "maria@gmail.com"
);

const alumno3 = new Alumno(
  "Pedro",
  "Diaz",
  33333333,
  "pedro@gmail.com"
);

const alumno4 = new Alumno(
  "Lucia",
  "Fernandez",
  44444444,
  "lucia@gmail.com"
);

// Agregar alumnos al instituto
instituto.agregarAlumno(alumno1);
instituto.agregarAlumno(alumno2);
instituto.agregarAlumno(alumno3);
instituto.agregarAlumno(alumno4);

// Profesor dicta ambos cursos
profesor.asignarCurso(poo);
profesor.asignarCurso(bd);

// Inscribir alumnos
instituto.inscribirAlumno(alumno1, poo);
instituto.inscribirAlumno(alumno1, bd);

instituto.inscribirAlumno(alumno2, poo);
instituto.inscribirAlumno(alumno2, bd);

// Cargar notas
poo.cargarNota(alumno1, 10);
bd.cargarNota(alumno1, 2);

poo.cargarNota(alumno2, 8);
bd.cargarNota(alumno2, 7);

// Cargar faltas
poo.cargarFalta(alumno1);

bd.cargarFalta(alumno1);
bd.cargarFalta(alumno1);
bd.cargarFalta(alumno1);

poo.cargarFalta(alumno2);

// Reportes
console.log("========== REPORTE DEL PROFESOR ==========");
profesor.verCursos();

console.log("");

console.log("========== REPORTE DEL ALUMNO ==========");
alumno1.reporte();