import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: ':id',
    component: ProductDetailComponent
  }
];