import React, { createContext, useContext, useState } from 'react';
import { useThemeState } from './useThemeState';
import { useLocaleState } from './useLocaleState';
import { useLocationState } from './useLocationState';
import { useCartState } from './useCartState';
import { useOrderState } from './useOrderState';
import { SELLERS_DATA, PRODUCTS_DATA } from '../data';

const AppContext = createContext<any>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeHook = useThemeState();
  const localeHook = useLocaleState();
  const locationHook = useLocationState();
  const cartHook = useCartState();
  const orderHook = useOrderState();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const value = {
    ...themeHook,
    ...localeHook,
    ...locationHook,
    ...cartHook,
    ...orderHook,
    sellers: SELLERS_DATA,
    products: PRODUCTS_DATA,
    toastMessage,
    showToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
};

