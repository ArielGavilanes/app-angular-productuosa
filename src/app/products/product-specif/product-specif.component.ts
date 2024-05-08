import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-product-specif',
  templateUrl: './product-specif.component.html', // Ruta al archivo HTML correcta
  styleUrls: ['./product-specif.component.css'] 
})

export class ProductSpecifComponent {
  productos: Producto[] = [
    {
      nombre: 'Smartphone',
      descripcion: 'Un teléfono inteligente con características avanzadas.',
      precio: 599,
      imagen: 'smartphone.jpg'
    },
    {
      nombre: 'Laptop',
      descripcion: 'Una computadora portátil potente y ligera.',
      precio: 1299,
      imagen: 'laptop.jpg'
    },
    // Agrega más productos aquí
  ];
}
