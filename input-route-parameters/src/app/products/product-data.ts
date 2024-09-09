import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb(): { products: Product[] } {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        description: 'Leaf rake with 48-inch wooden handle',
        price: 19.95,
        imageUrl: 'assets/images/leaf_rake.png'
      },
      {
        id: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        imageUrl: 'assets/images/garden_cart.png'
      },
      {
        id: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        description: 'Curved claw steel hammer',
        price: 8.9,
        imageUrl: 'assets/images/hammer.png'
      },
      {
        id: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        imageUrl: 'assets/images/saw.png'
      },
      {
        id: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        description: 'Standard two-button video game controller',
        price: 35.95,
        imageUrl: 'assets/images/xbox-controller.png'
      }
    ];
    return { products };
  }
}
