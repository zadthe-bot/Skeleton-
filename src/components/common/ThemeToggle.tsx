import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useApp();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex items-center gap-1 px-2.5 py-1 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-amber-100/70 dark:bg-neutral-800 text-xs font-bold text-neutral-800 dark:text-neutral-200 hover:border-orange-500 cursor-pointer transition-all shadow-2xs"
      title={isDark ? 'Switch to warm light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <>
          <Moon className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-[11px]">Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-600 fill-amber-500/20" />
          <span className="text-[11px] text-amber-950">Light</span>
        </>
      )}
    </button>
  );
};

