import { Component } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: TechProduct[];
  selectedProduct: TechProduct | null;

  constructor() {
    this.products = [
      new TechProduct(
        'Smartphone Honor 90', 
        'El Honor 90 es parte de la serie homónima, debutando con una pantalla AMOLED de 6.7 pulgadas con resolución FHD+ y tasa de refresco de 120Hz, y un procesador Snapdragon 7 Gen 1 en su edición acelerada acompañado de hasta 16GB de RAM y hasta 512GB de almacenamiento interno. Su cámara trasera es triple y está liderada por un sensor de 200MP, con una cámara selfie de 50MP al frente. El Honor 90 se alimenta de una batería de 5000 mAh de capacidad, con soporte para carga rápida con 66W de potencia, y completa sus características con un lector de huellas integrado en la pantalla, y Android 13', 
        299, 
        'https://i.blogs.es/cfce38/honor-90-pro/1366_2000.webp', 
        '6.7 pulgadas', 
        'Snapdragon 888', 
        '8 GB'
      ),
      new TechProduct(
        'Laptop Hp', 
        'Hewlett-Packard o HP, es una de las mayores e importantes empresas de tecnologías de la información del mundo. Fabrica y comercializa hardware y software además brinda servicios de asistencia relacionados con la informática. Actualmente es líder en venta de computadoras personales e impresoras en el mundo.', 
        850, 
        'https://i0.wp.com/computronik.com.ec/wp-content/uploads/2023/12/Omen-Laptop-Hp.jpg?fit=2004%2C2001&ssl=1',
        '15,6 Pulgadas', 
        'AMD Ryzen 5-5500U (Beats Intel i7-1065G7)',
        '8 GB'
      ),
      new TechProduct(
        'Smartwatch multifunctional', 
        'Un smartwatch es un dispositivo electrónico de pulsera que funciona, por lo general, conectado a un celular y hasta cierto punto de forma interactiva y autónoma. Con su capacidad para medir métricas importantes como el ritmo cardíaco, la distancia recorrida y las calorías quemadas, los relojes para controlar la salud se han convertido en una herramienta esencial para aquellos que buscan superarse a sí mismos y llevar un estilo de vida más consciente.', 
        199, 
        'https://www.cnet.com/a/img/resize/770007077c38361ca13ef0b0aa4c208f88fa2053/hub/2023/09/20/9e9b8e2b-04ee-4087-b819-c99ec8bbc980/apple-watch-ultra-2-7.jpg?auto=webp&fit=crop&height=1200&width=1200',
        'OLED', 
        'Snapdragon W5+ y Snapdragon W5 Gen 1 ', 
        '512 MB' 
      ),
    ];
    this.selectedProduct = null; 
  }

  
  selectProduct(product: TechProduct) {
    this.selectedProduct = product;
  }
}

class TechProduct {
  name: string;
  description: string;
  price: number;
  imageUrl: string; 
  screen: string; 
  processor: string; 
  ram: string; 

  constructor(name: string, description: string, price: number, imageUrl: string, screen: string, processor: string, ram: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.screen = screen;
    this.processor = processor;
    this.ram = ram;
  }
}

