import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
import { Observable } from 'rxjs';
import { ProductsComponent } from 'src/app/products/components/products/products.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$.pipe(map(products => products.length));
  }

  ngOnInit() {
  }

}
