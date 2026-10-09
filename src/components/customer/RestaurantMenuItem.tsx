import React from 'react';
import { Product } from '../../types';
import { Plus } from 'lucide-react';

export const RestaurantMenuItem: React.FC<{
  product: Product;
  language: string;
  onAdd: (p: Product) => void;
}> = ({ product, language, onAdd }) => {
  return (
    <div className="p-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#222220] flex items-center justify-between gap-3 shadow-2xs">
      <div className="flex items-center gap-3 min-w-0">
        <img src={product.imageUrl} alt={product.nameEn} className="w-16 h-16 rounded-xl object-cover shrink-0" />
        <div className="min-w-0">
          <h4 className="font-bold text-xs sm:text-sm text-[#1F1E1D] dark:text-[#F5F5F3] truncate">
            {language === 'sw' ? product.nameSw : product.nameEn}
          </h4>
          <p className="text-[11px] text-neutral-500 line-clamp-1">
            {language === 'sw' ? product.descriptionSw : product.descriptionEn}
          </p>
          <span className="font-black text-xs text-orange-600 mt-1 block">
            TZS {product.priceTzs.toLocaleString()}
          </span>
        </div>
      </div>
      <button
        onClick={() => onAdd(product)}
        className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 hover:bg-orange-100 shrink-0 font-bold text-xs flex items-center gap-1"
      >
        <Plus className="w-4 h-4" />
        <span>Add</span>
      </button>
    </div>
  );
};
