import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductSpecifComponent } from './product-specif/product-specif.component';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent },
  { path: 'products', component: ProductSpecifComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
