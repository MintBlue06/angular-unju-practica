import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})
export class Parte2 {

  private inscripcionService = inject(InscripcionService);

  // Modelo del formulario
  inscripcion = {
    dni: '',
    precio: 0,
    categoriaAlumno: 0,
    fechaInscripcion: '',
    email: '',
    curso: '',
    total: 0
  };

  // Cálculo del total con descuentos
  calcularTotal() {
  const precio = Number(this.inscripcion.precio);
  const categoriaAlumno = Number(this.inscripcion.categoriaAlumno);

  if (precio > 0 && categoriaAlumno > 0) {
    if (categoriaAlumno === 1) {
      this.inscripcion.total = precio * 0.65;
    } else if (categoriaAlumno === 2) {
      this.inscripcion.total = precio * 0.5;
    } else {
      this.inscripcion.total = precio;
    }
  } else {
    this.inscripcion.total = 0;
  }
}

// Acción del botón (sin service aún)
  registrar() {
    console.log('Inscripción:', this.inscripcion);

    // Guardamos los datos en el servicio para que la Tabla pueda verlos
    this.inscripcionService.agregarInscripcion({
      dni: this.inscripcion.dni,
      precio: this.inscripcion.total,
      categoriaAlumno: Number(this.inscripcion.categoriaAlumno),
      fechaInscripcion: this.inscripcion.fechaInscripcion ? new Date(this.inscripcion.fechaInscripcion) : new Date(),
      email: this.inscripcion.email,
      curso: this.inscripcion.curso
    });

    // Reset del formulario
    this.inscripcion = {
      dni: '',
      precio: 0,
      categoriaAlumno: 0,
      fechaInscripcion: '',
      email: '',
      curso: '',
      total: 0
    };
  }

}
