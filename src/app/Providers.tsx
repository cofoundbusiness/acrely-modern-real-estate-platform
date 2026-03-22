import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { ModalProvider } from '../context/ModalContext';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  );
};