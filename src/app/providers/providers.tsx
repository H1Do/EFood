import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from 'app/store';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
