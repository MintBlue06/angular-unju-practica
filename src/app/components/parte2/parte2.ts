import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})
export class Parte2 {

inscripcion = {
  dni: '',
  precio: 0,
  categoriaAlumno: 0,
  fechaInscripcion: '',
  email: '',
  curso: '',
  total: 0
};

}
