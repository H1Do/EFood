import { CartActionTypes, CartAction, CartState } from './types';

const initialState: CartState = {
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
    case CartActionTypes.SET_PRODUCTS:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
