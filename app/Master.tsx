import React from 'react';
import { store, persistor } from 'store';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { NativeBaseProvider } from 'native-base';
import Router from 'router';
import Theme from 'style/theme';

export const Master: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={Theme}>
          <Router />
        </NativeBaseProvider>
      </PersistGate>
    </StoreProvider>
  );
};
