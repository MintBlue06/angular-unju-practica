import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

// Interfaz para tipar los productos
interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
}

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})

export class Punto2Component {

  // ── Array de productos predefinido (fuente de datos) ──────────────
  productos: Producto[] = [
    {
      nombre: 'Notebook ASUS 13L',
      descripcion: 'Procesador Intel i5, 8GB RAM, SSD 256GB, 13 pulgadas Full HD.',
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
      precio: 450000
    },
    {
      nombre: 'Monitor LG 27"',
      descripcion: 'Panel IPS 4K UHD, 60Hz, HDMI y DisplayPort, diseño sin bordes.',
      img: 'https://images.unsplash.com/photo-1527443224154-c4a573d5f5a1?w=400&q=80',
      precio: 185000
    },
    {
      nombre: 'Teclado Mecánico Keychron',
      descripcion: 'Switch Red, retroiluminación RGB, compatible Windows y macOS.',
      img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
      precio: 72000
    },
    {
      nombre: 'Mouse Logitech MX Master 3',
      descripcion: 'Inalámbrico, 4000 DPI, scroll electromagnético, ergonómico.',
      img: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80',
      precio: 54000
    },
    {
      nombre: 'Auriculares Sony WH-1000XM5',
      descripcion: 'Cancelación de ruido activa, 30hs de batería, Bluetooth 5.2.',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
      precio: 210000
    },
    {
      nombre: 'Webcam Logitech C920',
      descripcion: 'Full HD 1080p, micrófono estéreo integrado, compatible Zoom/Meet.',
      img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80',
      precio: 48000
    }
  ];

  // ── Array secundario: carrito de compras ─────────────────────────
  carrito: Producto[] = [];

  // Control para mensaje de feedback al agregar
  ultimoAgregado: string = '';

  // ── Agregar UN SOLO producto al carrito ──────────────────────────
  // Verifica que el producto no esté ya en el carrito antes de agregarlo
  agregarAlCarrito(producto: Producto): void {
    const yaExiste = this.carrito.some(p => p.nombre === producto.nombre);
    if (!yaExiste) {
      this.carrito.push(producto);
      this.ultimoAgregado = producto.nombre;
      // Limpiar mensaje después de 2.5 segundos
      setTimeout(() => { this.ultimoAgregado = ''; }, 2500);
    }
  }

  // ── Verificar si un producto ya está en el carrito ───────────────
  estaEnCarrito(producto: Producto): boolean {
    return this.carrito.some(p => p.nombre === producto.nombre);
  }

  // ── Eliminar un producto del carrito ─────────────────────────────
  eliminarDelCarrito(producto: Producto): void {
    this.carrito = this.carrito.filter(p => p.nombre !== producto.nombre);
  }

  // ── Calcular el TOTAL a abonar ───────────────────────────────────
  get totalCarrito(): number {
    return this.carrito.reduce((acc, p) => acc + p.precio, 0);
  }

  // ── Vaciar todo el carrito ───────────────────────────────────────
  vaciarCarrito(): void {
    this.carrito = [];
  }
}
