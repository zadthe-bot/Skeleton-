import React from 'react';
import { Seller } from '../../types';
import { Star, Clock, Bike } from 'lucide-react';

export const HomeRestaurantCard: React.FC<{ seller: Seller; onSelect: (s: Seller) => void }> = ({
  seller,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(seller)}
      className="p-3 rounded-2xl bg-white dark:bg-[#1E1E1C] border border-neutral-200 dark:border-neutral-800 hover:border-orange-400 cursor-pointer transition-all flex items-start gap-3 shadow-2xs"
    >
      <img src={seller.logoImage} alt={seller.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-xs sm:text-sm text-[#1F1E1D] dark:text-[#F5F5F3] truncate">{seller.name}</h4>
          <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-current" />{seller.rating}
          </span>
        </div>
        <p className="text-[11px] text-neutral-400 truncate mt-0.5">{seller.categoryLabel}</p>
        <div className="flex items-center gap-3 text-[10px] text-neutral-500 mt-1 font-semibold">
          <span className="flex items-center gap-0.5"><Clock className="w-3 h-3 text-orange-500" />{seller.estimatedPrepMinutes}m</span>
          <span className="flex items-center gap-0.5"><Bike className="w-3 h-3 text-orange-500" />TZS {seller.deliveryFeeBaseTzs.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
