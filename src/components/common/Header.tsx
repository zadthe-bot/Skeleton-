import React from 'react';
import { useApp } from '../../context/AppContext';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { HeaderLocation } from './HeaderLocation';
import { HeaderCartButton } from './HeaderCartButton';
import { Globe } from 'lucide-react';

interface HeaderProps {
  onOpenCart: () => void;
  onOpenCity: () => void;
  onOpenAddress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart, onOpenCity, onOpenAddress }) => {
  const { cart, language, setLanguage } = useApp();
  const count = cart.reduce((s: number, i: any) => s + i.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 dark:bg-[#121211]/95 backdrop-blur-md border-b border-neutral-300/70 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-15 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Logo size="md" />
          <HeaderLocation onOpenCity={onOpenCity} onOpenAddress={onOpenAddress} />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border border-neutral-300 dark:border-neutral-700 uppercase"
          >
            <Globe className="w-3.5 h-3.5 text-orange-500" />
            <span>{language}</span>
          </button>
          <HeaderCartButton count={count} onOpenCart={onOpenCart} />
        </div>
      </div>
    </header>
  );
};

