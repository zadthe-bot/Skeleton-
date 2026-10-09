import { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

export const useThemeState = () => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem('starches_theme_v3') as ThemeMode) || 'light';
  });

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem('starches_theme_v3', mode);
  };

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    root.classList.toggle('light', !isDark);
    body.classList.toggle('dark', isDark);
    body.classList.toggle('light', !isDark);
    root.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

