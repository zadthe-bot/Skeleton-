import React from 'react';
import { Product } from '../../types';
import { Plus } from 'lucide-react';

export const HomeMealCard: React.FC<{ product: Product; language: string; onSelect: (p: Product) => void }> = ({
  product,
  language,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className="p-2.5 rounded-2xl bg-white dark:bg-[#1E1E1C] border border-neutral-200 dark:border-neutral-800 hover:border-orange-400 cursor-pointer transition-all flex flex-col justify-between shadow-2xs"
    >
      <div className="relative h-24 w-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-2">
        <img src={product.imageUrl} alt={product.nameEn} className="w-full h-full object-cover" />
      </div>
      <div>
        <span className="text-[9px] font-bold text-orange-600 block uppercase truncate">{product.sellerName}</span>
        <h4 className="font-bold text-xs text-[#1F1E1D] dark:text-[#F5F5F3] line-clamp-1 leading-tight">
          {language === 'sw' ? product.nameSw : product.nameEn}
        </h4>
      </div>
      <div className="pt-2 flex items-center justify-between">
        <span className="font-black text-xs text-orange-600">TZS {product.priceTzs.toLocaleString()}</span>
        <div className="p-1 rounded-md bg-orange-50 dark:bg-orange-950/40 text-orange-600"><Plus className="w-3 h-3" /></div>
      </div>
    </div>
  );
};
