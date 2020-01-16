import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HighligthDirective } from './directives/highlight/highligth.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighligthDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighligthDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
