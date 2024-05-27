import { SearchAction, SearchActionTypes, SearchState } from './types';

const initialState: SearchState = {
  products: [],
  loading: false,
  error: null,
  query: '',
  category: null,
  page: 1,
  limit: 8,
};

export const searchReducer = (
  state = initialState,
  action: SearchAction,
): SearchState => {
  switch (action.type) {
    case SearchActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: [],
        loading: true,
        error: null,
        query: action.payload.query,
        category: action.payload.category,
      };
    case SearchActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case SearchActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, products: [], loading: false, error: null };
    case SearchActionTypes.SET_PRODUCTS_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
