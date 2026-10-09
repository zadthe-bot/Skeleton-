import React from 'react';
import { CartItem } from '../../types';
import { Plus, Minus, Trash2 } from 'lucide-react';

interface CartItemRowProps {
  item: CartItem;
  language: string;
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({ item, language, onUpdateQty, onRemove }) => {
  return (
    <div className="p-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#222220] flex items-center justify-between gap-2.5">
      <img src={item.product.imageUrl} alt={item.product.nameEn} className="w-12 h-12 rounded-xl object-cover shrink-0" />
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-xs text-[#1F1E1D] dark:text-[#F5F5F3] truncate">
          {language === 'sw' ? item.product.nameSw : item.product.nameEn}
        </h4>
        <span className="text-xs font-black text-orange-600">
          TZS {item.itemTotalTzs.toLocaleString()}
        </span>
      </div>
      <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-[#1E1E1C] px-2 py-1 rounded-xl">
        <button onClick={() => onUpdateQty(item.id, item.quantity - 1)} className="p-0.5 text-neutral-500 hover:text-black dark:hover:text-white">
          {item.quantity === 1 ? <Trash2 className="w-3 h-3 text-rose-500" /> : <Minus className="w-3 h-3" />}
        </button>
        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
        <button onClick={() => onUpdateQty(item.id, item.quantity + 1)} className="p-0.5 text-neutral-500 hover:text-black dark:hover:text-white">
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
