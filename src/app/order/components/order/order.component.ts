import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { CartService } from 'src/app/core/service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private cartService: CartService) {
    // Todo: pipe cuente productos
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {
  }

}
