import { Product } from 'shared/types/product';

import { CartActionTypes } from './types';

export const addProductAction = (payload: Product) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductAction = (payload: number) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});
