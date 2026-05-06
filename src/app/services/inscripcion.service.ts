import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  // Array gestionado por el servicio para almacenar las inscripciones
  private inscripciones: Inscripcion[] = [];

  constructor() { }

  // CREATE: Agregar una nueva inscripción
  agregarInscripcion(inscripcion: Inscripcion) {
    this.inscripciones.push(inscripcion);
  }

  // READ: Obtener todas las inscripciones
  obtenerInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  // DELETE: Eliminar una inscripción por su índice
  eliminarInscripcion(index: number) {
    this.inscripciones.splice(index, 1);
  }

  // UPDATE: Aquí podrías agregar la lógica para modificar una inscripción si lo necesitas
  // actualizarInscripcion(index: number, inscripcion: Inscripcion) { ... }
}