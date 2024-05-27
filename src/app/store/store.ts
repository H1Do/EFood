import { cartReducer } from 'features/cart';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { searchReducer } from 'features/search';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: searchReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
