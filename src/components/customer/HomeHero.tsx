import React from 'react';
import { Search } from 'lucide-react';

export const HomeHero: React.FC<{ language: string; cityName: string; onSearch: () => void }> = ({
  language,
  cityName,
  onSearch,
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 p-5 text-white shadow-md">
      <div className="relative z-10 space-y-2">
        <span className="text-[11px] font-bold text-white/90 bg-white/20 px-2 py-0.5 rounded-md inline-block">
          {cityName} · Fresh Delivery
        </span>
        <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
          {language === 'sw' ? 'Agiza Vyakula Halisi vya Kiswahili' : 'Order Authentic Tanzanian Food'}
        </h1>
        <div onClick={onSearch} className="pt-1 cursor-pointer">
          <div className="w-full bg-white dark:bg-[#1E1E1C] text-neutral-800 dark:text-neutral-200 py-2.5 px-3.5 rounded-2xl shadow-sm flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-neutral-400">
              <Search className="w-4 h-4 text-orange-500" />
              <span>{language === 'sw' ? 'Tafuta chakula, migahawa, gesi...' : 'Search food, groceries, gas...'}</span>
            </div>
            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg">Explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};
