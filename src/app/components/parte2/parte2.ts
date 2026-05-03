import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})
export class Parte2 {

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
      const { precio, categoriaAlumno } = this.inscripcion;

      if (precio > 0 && categoriaAlumno > 0) {
        if (categoriaAlumno === 1) {
          this.inscripcion.total = precio * 0.65; // 35% descuento
        } else if (categoriaAlumno === 2) {
          this.inscripcion.total = precio * 0.5; // 50% descuento
        } else {
          this.inscripcion.total = precio; // sin descuento
        }
      } else {
        this.inscripcion.total = 0;
      }
    }

// Acción del botón (sin service aún)
  registrar() {
    console.log('Inscripción:', this.inscripcion);

    // Cuando tu compañero termine el service:
    // this.servicio.agregar({ ...this.inscripcion });

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
