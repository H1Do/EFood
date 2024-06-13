import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { CartState } from './types';

export const useTypedSelector: TypedUseSelectorHook<{ cart: CartState }> =
  useSelector;
