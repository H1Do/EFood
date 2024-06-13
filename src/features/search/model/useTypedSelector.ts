import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { SearchState } from './types';

export const useTypedSelector: TypedUseSelectorHook<{ search: SearchState }> =
  useSelector;
