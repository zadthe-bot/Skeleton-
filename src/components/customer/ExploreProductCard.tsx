import React from 'react';
import { Product } from '../../types';
import { Plus } from 'lucide-react';

interface ExploreProductCardProps {
  product: Product;
  language: string;
  onSelect: (p: Product) => void;
}

export const ExploreProductCard: React.FC<ExploreProductCardProps> = ({ product, language, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className="p-3 rounded-2xl bg-white dark:bg-[#1E1E1C] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3 cursor-pointer hover:border-orange-400 shadow-2xs"
    >
      <div className="flex items-center gap-3 min-w-0">
        <img src={product.imageUrl} alt={product.nameEn} className="w-14 h-14 rounded-xl object-cover shrink-0" />
        <div className="min-w-0">
          <span className="text-[10px] font-bold text-orange-600 block uppercase truncate">{product.sellerName}</span>
          <h4 className="font-bold text-xs sm:text-sm text-[#1F1E1D] dark:text-[#F5F5F3] truncate">
            {language === 'sw' ? product.nameSw : product.nameEn}
          </h4>
          <span className="text-xs font-black text-neutral-900 dark:text-neutral-100">
            TZS {product.priceTzs.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="p-1.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-600 shrink-0">
        <Plus className="w-4 h-4" />
      </div>
    </div>
  );
};
