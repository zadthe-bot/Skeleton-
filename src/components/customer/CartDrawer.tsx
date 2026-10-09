import React from 'react';
import { useApp } from '../../context/AppContext';
import { CartItemRow } from './CartItemRow';
import { CartSummaryFooter } from './CartSummaryFooter';
import { X, ShoppingBag } from 'lucide-react';

export const CartDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onProceedToCheckout: () => void;
}> = ({ isOpen, onClose, onProceedToCheckout }) => {
  const { cart, removeFromCart, updateCartQuantity, subtotalTzs, deliveryFeeTzs, totalTzs, language } = useApp();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-150">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#1A1A18] shadow-2xl flex flex-col border-l border-neutral-200 dark:border-neutral-800">
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-orange-500" />
              <h3 className="font-bold text-sm text-[#1F1E1D] dark:text-[#F5F5F3]">Your Cart ({cart.length})</h3>
            </div>
            <button onClick={onClose} className="p-1 text-neutral-400 hover:text-neutral-700 dark:hover:text-white"><X className="w-5 h-5" /></button>
          </div>
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-xs text-neutral-400 space-y-2">
              <ShoppingBag className="w-8 h-8 text-neutral-300" />
              <p>Your cart is empty. Add fresh food, groceries or cooking gas!</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              {cart.map((item: any) => (
                <CartItemRow key={item.id} item={item} language={language} onUpdateQty={updateCartQuantity} onRemove={removeFromCart} />
              ))}
            </div>
          )}
          {cart.length > 0 && (
            <CartSummaryFooter subtotal={subtotalTzs} deliveryFee={deliveryFeeTzs} total={totalTzs} onCheckout={() => { onClose(); onProceedToCheckout(); }} />
          )}
        </div>
      </div>
    </div>
  );
};
