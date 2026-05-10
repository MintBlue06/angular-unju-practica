export interface Inscripcion {
  dni: string;
  precio: number;
  categoriaAlumno: number; // 1 = Estudiante, 2 = egresado, 3 = particular
  fechaInscripcion: Date;
  email: string;
  curso: string;
}