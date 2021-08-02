import React from 'react';
import { store } from 'store';
import { Provider as StoreProvider } from 'react-redux';
import Router from 'router';

export const Master: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  );
};
