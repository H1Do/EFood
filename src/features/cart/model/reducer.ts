import { Product } from 'shared/types/product';
import { CartActionTypes, CartAction } from './types';

const initialState: { cart: Product[] } = {
  cart: [],
};

export const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] };
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
