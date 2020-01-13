import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() selectedProduct: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addCart() {
    console.log('Estas haciendo bien las cosas');
    this.selectedProduct.emit(this.product.id);
  }

}
