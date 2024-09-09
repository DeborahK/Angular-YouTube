import { Component, inject } from '@angular/core';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, CurrencyPipe]
})
export class ProductListComponent {
  private productService = inject(ProductService);

  pageTitle = 'Product List';

  // Reference the products and loading signals from the service
  products = this.productService.products;

}
