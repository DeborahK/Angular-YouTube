import { Injectable, computed, inject, signal } from '@angular/core';
import { ProductService } from '../product-list/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  private productService = inject(ProductService);

  // Writable signal for the selected product Id
  selectedProductId = signal<number | undefined>(undefined);

  // React to changes in the selected product id and get the selected product
  selectedProduct = computed(() =>
    this.productService.products().find(p => p.id === this.selectedProductId())
  );

  setSelectedProductId(id: number) {
    this.selectedProductId.set(id);
  }
}
