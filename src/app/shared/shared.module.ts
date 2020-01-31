import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './../cart/cart.component';

import { HighligthDirective } from './directives/highlight/highligth.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighligthDirective,
    CartComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighligthDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
