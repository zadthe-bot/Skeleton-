import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface HeaderCartButtonProps {
  count: number;
  onOpenCart: () => void;
}

export const HeaderCartButton: React.FC<HeaderCartButtonProps> = ({ count, onOpenCart }) => {
  return (
    <button
      onClick={onOpenCart}
      className="relative p-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-xs"
      title="View cart"
    >
      <ShoppingBag className="w-4.5 h-4.5" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-[#1F1E1D] text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white">
          {count}
        </span>
      )}
    </button>
  );
};
