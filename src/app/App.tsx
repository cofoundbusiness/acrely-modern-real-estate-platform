import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './Providers';
import { AppRouter } from './AppRouter';

export const App: React.FC = () => {
  return (
    <Providers>
      <AppRouter />
      <Analytics />
    </Providers>
  );
};