import { ProductCategories } from './productCategories';

export interface Product {
  id: number;
  category: ProductCategories;
  title: string;
  price: number;
  rating: number;
  image: string;
}
