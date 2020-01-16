import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/i1.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/i2.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/i3.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/i4.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/i5.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/i6.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    }
  ];

  getAllProducts() {
    return this.products;
  }
  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
