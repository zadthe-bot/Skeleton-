import React from 'react';
import { Seller } from '../../types';
import { X, Star, Clock, Bike } from 'lucide-react';

export const RestaurantHeader: React.FC<{ seller: Seller; onClose: () => void }> = ({ seller, onClose }) => {
  return (
    <div className="relative h-40 w-full shrink-0">
      <img src={seller.bannerImage} alt={seller.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <button onClick={onClose} className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white backdrop-blur-md">
        <X className="w-4 h-4" />
      </button>
      <div className="absolute bottom-3 left-4 right-4 text-white">
        <span className="text-[10px] font-bold uppercase text-orange-400">{seller.categoryLabel}</span>
        <h2 className="text-lg font-black">{seller.name}</h2>
        <div className="flex items-center gap-3 text-xs mt-1 text-white/90">
          <span className="flex items-center gap-1 font-bold text-amber-400"><Star className="w-3.5 h-3.5 fill-current" />{seller.rating}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{seller.estimatedPrepMinutes}m</span>
          <span className="flex items-center gap-1"><Bike className="w-3.5 h-3.5" />TZS {seller.deliveryFeeBaseTzs.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
