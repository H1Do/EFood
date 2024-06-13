import { Product } from 'shared/types/product';

export interface CartState {
  cart: Product[];
}

export enum CartActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  GET_PRODUCTS = 'GET_PRODUCTS',
}

interface AddProductAction {
  type: CartActionTypes.ADD_PRODUCT;
  payload: Product;
}

interface RemoveProductAction {
  type: CartActionTypes.REMOVE_PRODUCT;
  payload: number;
}

export type CartAction = AddProductAction | RemoveProductAction;
