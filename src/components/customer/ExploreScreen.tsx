import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Product } from '../../types';
import { ExploreSearchBar } from './ExploreSearchBar';
import { ExploreProductCard } from './ExploreProductCard';

export const ExploreScreen: React.FC<{
  onSelectProduct: (p: Product) => void;
}> = ({ onSelectProduct }) => {
  const { products, language } = useApp();
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<'all' | 'food' | 'groceries' | 'gas'>('all');

  const filtered = products.filter((p: Product) => {
    if (cat !== 'all' && p.category !== cat) return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return p.nameEn.toLowerCase().includes(q) || p.nameSw.toLowerCase().includes(q) || p.sellerName.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-4 pb-24 animate-in fade-in duration-150">
      <ExploreSearchBar query={query} onChange={setQuery} placeholder={language === 'sw' ? 'Tafuta chakula, sokoni, au gesi ya Oryx...' : 'Search any food, grocery, or Oryx gas...'} />
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar text-xs font-bold">
        {[
          { id: 'all', label: 'All Items' },
          { id: 'food', label: 'Food & Meals' },
          { id: 'groceries', label: 'Sokoni Groceries' },
          { id: 'gas', label: 'Cooking Gas' },
        ].map(({ id, label }) => (
          <button key={id} onClick={() => setCat(id as any)} className={`px-3 py-1.5 rounded-xl border whitespace-nowrap ${cat === id ? 'bg-orange-500 text-white border-orange-500' : 'bg-white dark:bg-[#1E1E1C] text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700'}`}>
            {label}
          </button>
        ))}
      </div>
      <div className="space-y-2.5">
        {filtered.map((prod: Product) => (
          <ExploreProductCard key={prod.id} product={prod} language={language} onSelect={onSelectProduct} />
        ))}
      </div>
    </div>
  );
};
