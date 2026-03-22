import React, { createContext, useContext, useState } from 'react';
import { Property } from '../types';

interface ModalContextType {
  selectedProperty: Property | null;
  setSelectedProperty: (property: Property | null) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <ModalContext.Provider value={{ selectedProperty, setSelectedProperty }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};