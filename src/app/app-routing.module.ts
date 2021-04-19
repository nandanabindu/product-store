import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ProductListingComponent} from './product-listing/product-listing.component';
import {AddProductComponent} from './add-product/add-product.component';
const routes: Routes = [
  {path:"", component:ProductListingComponent},
  {path : "product/:id",component:ProductDetailsComponent},
  { path:"addproduct",component:AddProductComponent}  ];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
