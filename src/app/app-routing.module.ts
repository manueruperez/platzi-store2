import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        // loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        // component: ProductsComponent
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
        // loadChildren: './products/products.module#ProductsModule'
      },
      {
        path: 'contact',
        // component: ContactComponent
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: '**',
        // component: PageNotFoundComponent
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
