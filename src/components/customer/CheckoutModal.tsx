import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PaymentMethodPicker } from './PaymentMethodPicker';
import { CheckoutAddressBadge } from './CheckoutAddressBadge';
import { PaymentMethod } from '../../types';
import { X, Lock, Check } from 'lucide-react';

export const CheckoutModal: React.FC<{ isOpen: boolean; onClose: () => void; onOrderSuccess: (id: string) => void }> = ({
  isOpen,
  onClose,
  onOrderSuccess,
}) => {
  const { currentAddress, cart, subtotalTzs, totalTzs, clearCart, createOrder, showToast } = useApp();
  const [method, setMethod] = useState<PaymentMethod>('mpesa');
  const [notes, setNotes] = useState('');
  if (!isOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const sellerName = cart[0]?.product.sellerName || 'Starches Partner';
    const ord = createOrder(currentAddress, method, cart, subtotalTzs, totalTzs, sellerName, notes);
    clearCart();
    showToast('Oda imetumwa kikamilifu!');
    onClose();
    onOrderSuccess(ord.id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/70 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white dark:bg-[#1E1E1C] rounded-3xl p-5 shadow-2xl border border-neutral-200 dark:border-neutral-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-orange-500" /><h3 className="font-bold text-sm text-[#1F1E1D] dark:text-[#F5F5F3]">Checkout</h3></div>
          <button onClick={onClose} className="p-1 text-neutral-400 cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
        <CheckoutAddressBadge address={currentAddress} />
        <PaymentMethodPicker method={method} onSelect={setMethod} />
        <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Delivery note for rider (optional)..." className="w-full text-xs px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#252523]" />
        <button onClick={handlePlaceOrder} className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer">
          <Check className="w-4 h-4" />
          <span>Pay & Order (TZS {totalTzs.toLocaleString()})</span>
        </button>
      </div>
    </div>
  );
};

