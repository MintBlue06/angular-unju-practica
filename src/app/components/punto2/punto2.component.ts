import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

// Interfaz para tipar los productos
interface Producto {
  nombre: string;
  descripcion: string;
  imgJpg: string;
  imgWebp: string;
  precio: number;
}

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
})
export class Punto2Component {
  // ── Array de productos predefinido (fuente de datos) ──────────────
  productos: Producto[] = [
    {
      nombre: 'Notebook ASUS 13L',
      descripcion: 'Procesador Intel i5, 8GB RAM, SSD 256GB, 13 pulgadas Full HD.',
      imgJpg: 'assets/productos/notebook.jpg',
      imgWebp: 'assets/productos/notebook.webp',
      precio: 450000,
    },
    {
      nombre: 'Monitor LG 27"',
      descripcion: 'Panel IPS 4K UHD, 60Hz, HDMI y DisplayPort, diseño sin bordes.',
      imgJpg: 'assets/productos/monitor.jpg',
      imgWebp: 'assets/productos/monitor.webp',
      precio: 185000,
    },
    {
      nombre: 'Teclado Mecánico Keychron',
      descripcion: 'Switch Red, retroiluminación RGB, compatible Windows y macOS.',
      imgJpg: 'assets/productos/teclado.jpg',
      imgWebp: 'assets/productos/teclado.webp',
      precio: 72000,
    },
    {
      nombre: 'Mouse Logitech MX Master 3',
      descripcion: 'Inalámbrico, 4000 DPI, scroll electromagnético, ergonómico.',
      imgJpg: 'assets/productos/mouse.jpg',
      imgWebp: 'assets/productos/mouse.webp',
      precio: 54000,
    },
    {
      nombre: 'Auriculares Sony WH-1000XM5',
      descripcion: 'Cancelación de ruido activa, 30hs de batería, Bluetooth 5.2.',
      imgJpg: 'assets/productos/auriculares.jpg',
      imgWebp: 'assets/productos/auriculares.webp',
      precio: 210000,
    },
    {
      nombre: 'Webcam Logitech C920',
      descripcion: 'Full HD 1080p, micrófono estéreo integrado, compatible Zoom/Meet.',
      imgJpg: 'assets/productos/webcam.jpg',
      imgWebp: 'assets/productos/webcam.webp',
      precio: 48000,
    },
  ];

  // ── Array secundario: carrito de compras ─────────────────────────
  carrito: Producto[] = [];

  // Control para mensaje de feedback al agregar
  ultimoAgregado: string = '';

  // ── Agregar UN SOLO producto al carrito ──────────────────────────
  // Verifica que el producto no esté ya en el carrito antes de agregarlo
  agregarAlCarrito(producto: Producto): void {
    const yaExiste = this.carrito.some((p) => p.nombre === producto.nombre);
    if (!yaExiste) {
      this.carrito.push(producto);
      this.ultimoAgregado = producto.nombre;
      // Limpiar mensaje después de 2.5 segundos
      setTimeout(() => {
        this.ultimoAgregado = '';
      }, 2500);
    }
  }

  // ── Verificar si un producto ya está en el carrito ───────────────
  estaEnCarrito(producto: Producto): boolean {
    return this.carrito.some((p) => p.nombre === producto.nombre);
  }

  // ── Eliminar un producto del carrito ─────────────────────────────
  eliminarDelCarrito(producto: Producto): void {
    this.carrito = this.carrito.filter((p) => p.nombre !== producto.nombre);
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
