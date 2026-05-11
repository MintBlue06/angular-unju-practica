import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  eventos = [
    {
      id: 1,
      title: 'Clase de Yoga al Aire Libre',
      desc: 'Sesión de yoga en un parque, con participantes realizando posturas de relajación y respiración, ideal para transmitir bienestar y conexión con la naturaleza.',
      img: 'assets/yoga.jpg',
    },
    {
      id: 2,
      title: 'Taller de Teatro Comunitario',
      desc: 'Una actividad cultural donde vecinos se reúnen para practicar expresión corporal y actuación, fomentando la creatividad y la integración social.',
      img: 'assets/teatro.jpg',
    },
    {
      id: 3,
      title: 'Concierto Local de Música',
      desc: 'Presentación de una banda emergente en un espacio público, con público disfrutando de la música en un ambiente relajado y festivo.',
      img: 'assets/concierto.jpg',
    },
    {
      id: 4,
      title: 'Feria del Libro',
      desc: 'Evento cultural con stands de editoriales y escritores firmando ejemplares, pensado para promover la lectura y el intercambio de ideas.',
      img: 'assets/feria.jpg',
    },
    {
      id: 5,
      title: 'Torneo Barrial de Fútbol',
      desc: 'Partido amistoso entre equipos locales, con jugadores y público compartiendo la pasión por el deporte en un entorno comunitario.',
      img: 'assets/torneo.jpg',
    },
  ];
}
