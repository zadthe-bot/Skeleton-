import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CartSummaryFooterProps {
  subtotal: number;
  deliveryFee: number;
  total: number;
  onCheckout: () => void;
}

export const CartSummaryFooter: React.FC<CartSummaryFooterProps> = ({
  subtotal,
  deliveryFee,
  total,
  onCheckout,
}) => {
  return (
    <div className="p-4 bg-[#FAF7F2] dark:bg-[#171715] border-t border-neutral-200 dark:border-neutral-800 space-y-3 shrink-0">
      <div className="space-y-1 text-xs">
        <div className="flex justify-between text-neutral-500">
          <span>Subtotal</span>
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">TZS {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-neutral-500">
          <span>Delivery</span>
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">TZS {deliveryFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm font-black pt-1 border-t border-neutral-200 dark:border-neutral-700">
          <span>Total</span>
          <span className="text-orange-600">TZS {total.toLocaleString()}</span>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
      >
        <span>Proceed to Checkout</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
