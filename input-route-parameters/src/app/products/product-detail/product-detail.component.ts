import { Component, OnInit, inject, computed, Input, numberAttribute } from '@angular/core';

import { RouterLink } from '@angular/router';
import { NgIf, CurrencyPipe } from '@angular/common';
import { ProductDetailService } from './product-detail.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: true,
  imports: [NgIf, RouterLink, CurrencyPipe]
})
export class ProductDetailComponent implements OnInit {
  productDetailService = inject(ProductDetailService);

  // Signals
  product = this.productDetailService.selectedProduct;

  pageTitle = computed(() => {
    if (this.product()) {
      return `Product Detail: ${this.product()?.productName}`;
    } else {
      return 'Selected product not found';
    }
  });

  @Input({transform: numberAttribute})
  id = 0;

  ngOnInit(): void {
    if (this.id) {
      this.productDetailService.setSelectedProductId(this.id);
    }
  }
}
