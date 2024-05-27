import { apiInstance } from '../base';
import { ProductCategories } from 'shared/types/productCategories';
import { Product } from 'shared/types/product';

const BASE_URL = 'products';

export const getProducts = (
  category: ProductCategories | null = null,
  query: string = '',
  page: number = 1,
  limit: number = 16,
) => {
  const params = category
    ? new URLSearchParams({
        category,
        q: query,
        _page: page.toString(),
        _limit: limit.toString(),
      })
    : new URLSearchParams({
        q: query,
        _page: page.toString(),
        _limit: limit.toString(),
      });

  return apiInstance.get<Product[]>(`${BASE_URL}?${params}`);
};

export const getProductById = (id: number): Promise<Product> => {
  return apiInstance.get(`${BASE_URL}/${id}`);
};
