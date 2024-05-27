import { Product } from 'shared/types/product';

export enum CartActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
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
