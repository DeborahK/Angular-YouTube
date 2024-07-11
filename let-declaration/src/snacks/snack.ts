export interface Snack {
  id: number;
  name: string;
  price: number;
  numberInStock: number;
  size: string;
}

// Hard-coded data
export const SNACKS = [
  { id: 1, name: 'popcorn', price: 2.0, numberInStock: 5, size: '6 oz bag' },
  { id: 2, name: 'peanuts', price: 3.0, numberInStock: 9, size: '5 oz bag' },
  { id: 3, name: 'mixed nuts', price: 5.0, numberInStock: 12, size: '4 oz bag' },
  { id: 4, name: 'crackers', price: 2.5, numberInStock: 0, size: '6 crackers' },
  { id: 5, name: 'ice cream', price: 3.95, numberInStock: 16, size: '4 oz tub' },
  { id: 6, name: 'corn nuts', price: 2.29, numberInStock: 42, size: '8 oz bag' },
];
