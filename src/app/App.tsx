import React from 'react';
import { Providers } from './Providers';
import { AppRouter } from './AppRouter';

export const App: React.FC = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};