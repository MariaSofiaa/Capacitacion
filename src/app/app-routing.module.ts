import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sofcodeComponent } from './pages/sofcode/sofcode.components';

const routes: Routes = [

  {path: 'sofcode', component: sofcodeComponent},
  { path: 'products', 
  loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  //evitar el ERROR 404
  {path: '**', redirectTo: '', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
