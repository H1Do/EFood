import { Dispatch } from 'redux';

import { getProducts } from 'shared/api/product/product';
import { ProductCategories } from 'shared/types/productCategories';

import { SearchAction, SearchActionTypes } from './types';

export const fetchProducts = (
  query: string,
  category: ProductCategories | null = null,
  page: number,
  limit: number,
) => {
  return async (dispatch: Dispatch<SearchAction>) => {
    try {
      dispatch({
        type: SearchActionTypes.SET_IS_OPENED,
        payload: true,
      });
      dispatch({
        type: SearchActionTypes.FETCH_PRODUCTS,
        payload: {
          query,
          category,
        },
      });
      const [count, data] = await getProducts(category, query, page, limit);
      dispatch({
        type: SearchActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: [count ? +count : 0, data],
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

export const setIsOpened = (isOpened: boolean): SearchAction => ({
  type: SearchActionTypes.SET_IS_OPENED,
  payload: isOpened,
});
