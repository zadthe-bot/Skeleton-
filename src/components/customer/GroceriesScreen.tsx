import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Product } from '../../types';
import { GroceryProductCard } from './GroceryProductCard';
import { ArrowLeft } from 'lucide-react';

export const GroceriesScreen: React.FC<{
  onSelectProduct: (p: Product) => void;
  onBackToFood: () => void;
}> = ({ onSelectProduct, onBackToFood }) => {
  const { products, language } = useApp();
  const [tab, setTab] = useState<'all' | 'gas' | 'groceries'>('all');

  const items = products.filter((p: Product) => {
    if (p.isFood) return false;
    if (tab === 'gas') return p.category === 'gas';
    if (tab === 'groceries') return p.category === 'groceries';
    return true;
  });

  return (
    <div className="space-y-3 pb-24 animate-in fade-in duration-150">
      <button onClick={onBackToFood} className="flex items-center gap-1 text-xs font-bold text-orange-600 cursor-pointer">
        <ArrowLeft className="w-4 h-4" /><span>{language === 'sw' ? 'Rudi Kwenye Vyakula' : 'Back to Food'}</span>
      </button>
      <div className="flex gap-2 text-xs font-bold">
        {[{ id: 'all', label: 'All Items' }, { id: 'gas', label: 'Oryx / Taifa Gas' }, { id: 'groceries', label: 'Sokoni Grains' }].map(({ id, label }) => (
          <button key={id} onClick={() => setTab(id as any)} className={`px-3 py-1.5 rounded-xl border ${tab === id ? 'bg-orange-500 text-white border-orange-500' : 'bg-white dark:bg-[#1E1E1C] text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700'}`}>
            {label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {items.map((prod: Product) => (
          <GroceryProductCard key={prod.id} product={prod} language={language} onSelect={onSelectProduct} />
        ))}
      </div>
    </div>
  );
};

