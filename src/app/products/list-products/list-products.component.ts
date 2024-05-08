import { Component } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: Product[];

  constructor() {
    
    this.products = [
      new Product('Producto 1', 10),
      new Product('Producto 2', 20),
      new Product('Producto 3', 30),
    ];
  }
}

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
