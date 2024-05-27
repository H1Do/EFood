import { getProducts } from 'shared/api/product/product';
import { SearchAction, SearchActionTypes } from './types';
import { Dispatch } from 'redux';
import { ProductCategories } from 'shared/types/productCategories';

export const fetchProducts = (
  query: string,
  category: ProductCategories | null = null,
  page: number,
  limit: number,
) => {
  return async (dispatch: Dispatch<SearchAction>) => {
    try {
      dispatch({
        type: SearchActionTypes.FETCH_PRODUCTS,
        payload: {
          query,
          category,
        },
      });
      const data = await getProducts(category, query, page, limit);
      dispatch({
        type: SearchActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SearchActionTypes.FETCH_PRODUCTS_ERROR,
        payload: 'An error has occurred',
      });
    }
  };
};

export const setProductsPage = (page: number): SearchAction => ({
  type: SearchActionTypes.SET_PRODUCTS_PAGE,
  payload: page,
});
