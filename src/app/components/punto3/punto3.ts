import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Carta {
  id: number;
  valor: number;
  estaVolteada: boolean;
  estaEmparejada: boolean;
}

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrls: ['./punto3.css']
})
export class Punto3 {
  cartas: Carta[] = [];
  cartasVolteadas: Carta[] = [];
  readonly maximoIntentos = 5;
  intentosRestantes = this.maximoIntentos;
  estadoJuego: 'IDLE' | 'PLAYING' | 'WON' | 'LOST' = 'IDLE';
  estaProcesando = false;
  hayIntentoActivo = false;
  
  private readonly valoresCartas = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  private readonly colores: Record<number, string> = { 1: 'dc3545', 2: '0d6efd', 3: '198754', 4: 'ffc107', 5: '6f42c1', 6: 'fd7e14' };

  constructor(private cdr: ChangeDetectorRef) {}

  reiniciar() {
    const valores = [...this.valoresCartas];
    for (let i = valores.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [valores[i], valores[j]] = [valores[j], valores[i]];
    }
    
    this.cartas = valores.map((val, index) => ({ id: index, valor: val, estaVolteada: false, estaEmparejada: false }));
    this.estadoJuego = 'PLAYING';
    this.intentosRestantes = this.maximoIntentos;
    this.cartasVolteadas = [];
    this.estaProcesando = false;
    this.hayIntentoActivo = false;
  }

  intentar() {
    if (!this.hayIntentoActivo) this.hayIntentoActivo = true;
  }

  voltearCarta(carta: Carta) {
    if (this.estadoJuego !== 'PLAYING' || !this.hayIntentoActivo || carta.estaVolteada || carta.estaEmparejada || this.estaProcesando) return;
    
    carta.estaVolteada = true;
    this.cartasVolteadas.push(carta);
    
    if (this.cartasVolteadas.length === 2) {
      this.hayIntentoActivo = false;
      this.verificarCoincidencia();
    }
  }

  verificarCoincidencia() {
    const [carta1, carta2] = this.cartasVolteadas;
    
    if (carta1.valor === carta2.valor) {
      carta1.estaEmparejada = carta2.estaEmparejada = true;
      this.cartasVolteadas = [];
      this.verificarVictoria();
    } else {
      this.estaProcesando = true;
      this.intentosRestantes--;
      setTimeout(() => {
        carta1.estaVolteada = carta2.estaVolteada = false;
        this.cartasVolteadas = [];
        this.estaProcesando = false;
        this.verificarDerrota();
        this.cdr.detectChanges();
      }, 500);
    }
  }

  verificarVictoria() { if (this.cartas.every(c => c.estaEmparejada)) this.estadoJuego = 'WON'; }
  verificarDerrota() { if (this.intentosRestantes <= 0) this.estadoJuego = 'LOST'; }
  obtenerImagenCarta(valor: number) { 
    const colorTexto = valor === 4 ? '000000' : 'ffffff';
    return `https://placehold.co/100x120/${this.colores[valor]}/${colorTexto}?text=Par+${valor}`; 
  }
}
