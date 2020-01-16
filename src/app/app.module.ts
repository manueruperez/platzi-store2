import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { HighligthDirective } from './highligth.directive';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    ContactComponent,
    HighligthDirective,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
