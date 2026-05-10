import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InscripcionService } from '../../../services/inscripcion.service';
import { Inscripcion } from '../../../models/inscripcion.model';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla.html',
  styleUrls: ['./tabla.css']
})
export class TablaComponent {
  private inscripcionService = inject(InscripcionService);

  dni: string = '';
  precio: number | null = null;
  categoriaAlumno: number | null = null;
  email: string = '';
  curso: string = '';
  precioTotal: number | null = null;

  calcularDescuento() {
    if (this.precio != null && this.categoriaAlumno != null) {
      if (this.categoriaAlumno == 1) {
        this.precioTotal = this.precio - (this.precio * 0.35);
      } else if (this.categoriaAlumno == 2) {
        this.precioTotal = this.precio - (this.precio * 0.50);
      } else {
        this.precioTotal = this.precio;
      }
    } else {
      this.precioTotal = null;
    }
  }

  registrar() {
    if (this.dni && this.precio != null && this.categoriaAlumno != null && this.email && this.curso && this.precioTotal != null) {
      const nuevaInscripcion: Inscripcion = {
        dni: this.dni,
        precio: this.precioTotal,
        categoriaAlumno: Number(this.categoriaAlumno),
        fechaInscripcion: new Date(),
        email: this.email,
        curso: this.curso
      };

      this.inscripcionService.agregarInscripcion(nuevaInscripcion);

      this.dni = '';
      this.precio = null;
      this.categoriaAlumno = null;
      this.email = '';
      this.curso = '';
      this.precioTotal = null;
    }
  }

  get listaInscripciones(): Inscripcion[] {
    return this.inscripcionService.obtenerInscripciones();
  }

  get totalGeneral(): number { return this.listaInscripciones.reduce((sum, curr) => sum + curr.precio, 0); }
  get totalEstudiantes(): number { return this.listaInscripciones.filter(i => i.categoriaAlumno == 1).length; }
  get totalEgresados(): number { return this.listaInscripciones.filter(i => i.categoriaAlumno == 2).length; }
  get totalParticulares(): number { return this.listaInscripciones.filter(i => i.categoriaAlumno == 3).length; }
}