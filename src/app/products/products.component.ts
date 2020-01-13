import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  ngOnInit() {
  }
  selected(id: number) {
    console.log(id);
  }

}
