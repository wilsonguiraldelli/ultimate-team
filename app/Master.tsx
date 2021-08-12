import React from 'react';
import { store } from 'store';
import { Provider as StoreProvider } from 'react-redux';

import { NativeBaseProvider } from 'native-base';
import Router from 'router';
import Theme from 'style/theme';

export const Master: React.FC = () => {
  return (
    <StoreProvider store={store}>
        <NativeBaseProvider theme={Theme}>
          <Router />
        </NativeBaseProvider>
    </StoreProvider>
  );
};
