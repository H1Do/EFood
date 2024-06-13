import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { cartReducer } from 'features/cart';
import { searchReducer } from 'features/search';

const rootReducer = combineReducers({
  cart: cartReducer,
  search: searchReducer,
});

// @ts-expect-error There is no react-toolkit
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
