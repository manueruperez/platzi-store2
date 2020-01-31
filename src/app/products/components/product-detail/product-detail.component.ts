import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/product/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private producService: ProductsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.producService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
  this.producService.getProduct(id)
  .subscribe(product => {
      this.product = product;
      console.log(product);
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '287872',
      title: 'nuevo desde angular',
      image: 'assets/images/hoodie.png',
      price: 7777,
      description: 'Muestrenme lo que tienen!!!',

    };
    this.producService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updatProduct: Partial<Product> = {
      title: 'rick y morty',
      price: 88888,
      description: 'Muestrenme lo que tienen!!!',

    };
    this.producService.updateProduct('2', updatProduct)
    .subscribe(product => {
      console.log(product);
    });

  }

  deleteProduct() {
    this.producService.deleteProduct('222').subscribe(rta => {
      console.log(rta);
    });
  }

}
