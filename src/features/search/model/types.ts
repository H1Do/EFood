import { Product } from 'shared/types/product';
import { ProductCategories } from 'shared/types/productCategories';

export interface SearchState {
  products: Product[];
  loading: boolean;
  error: null | string;
  query: string;
  category: ProductCategories | null;
  page: number;
  limit: number;
}

export enum SearchActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
  SET_PRODUCTS_PAGE = 'SET_PRODUCTS_PAGE',
}

interface FetchProductsAction {
  type: SearchActionTypes.FETCH_PRODUCTS;
  payload: { query: string; category: ProductCategories | null };
}

interface FetchProductsSuccessAction {
  type: SearchActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsErrorAction {
  type: SearchActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

interface SetProductsPageAction {
  type: SearchActionTypes.SET_PRODUCTS_PAGE;
  payload: number;
}

export type SearchAction =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsErrorAction
  | SetProductsPageAction;
