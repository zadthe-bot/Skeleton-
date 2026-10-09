import React from 'react';
import { Plus } from 'lucide-react';

interface ProductModalActionProps {
  qty: number;
  priceTzs: number;
  isGas: boolean;
  language: string;
  onQtyChange: (q: number) => void;
  onAdd: () => void;
}

export const ProductModalAction: React.FC<ProductModalActionProps> = ({
  qty,
  priceTzs,
  isGas,
  language,
  onQtyChange,
  onAdd,
}) => (
  <div className="space-y-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
    <div className="flex items-center justify-between">
      <div className="text-sm font-black text-orange-600">TZS {(priceTzs * qty).toLocaleString()}</div>
      <div className="flex items-center gap-2 bg-neutral-100 dark:bg-[#252523] px-2 py-1 rounded-lg">
        <button onClick={() => onQtyChange(Math.max(1, qty - 1))} className="text-xs font-bold px-1 cursor-pointer">-</button>
        <span className="text-xs font-bold">{qty}</span>
        <button onClick={() => onQtyChange(qty + 1)} className="text-xs font-bold px-1 cursor-pointer">+</button>
      </div>
    </div>
    <button onClick={onAdd} className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer">
      <Plus className="w-4 h-4" />
      <span>{isGas ? (language === 'sw' ? 'Agiza Badilishano la Gesi' : 'Order Gas Exchange') : 'Add to Cart'}</span>
    </button>
  </div>
);
