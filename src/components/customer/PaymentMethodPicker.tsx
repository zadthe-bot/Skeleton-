import React from 'react';
import { PaymentMethod } from '../../types';
import { Smartphone, Banknote } from 'lucide-react';

interface PaymentMethodPickerProps {
  method: PaymentMethod;
  onSelect: (m: PaymentMethod) => void;
}

export const PaymentMethodPicker: React.FC<PaymentMethodPickerProps> = ({ method, onSelect }) => {
  const options: { id: PaymentMethod; label: string; icon: any }[] = [
    { id: 'mpesa', label: 'M-Pesa (Vodacom)', icon: Smartphone },
    { id: 'tigopesa', label: 'Tigo Pesa', icon: Smartphone },
    { id: 'airtelmoney', label: 'Airtel Money', icon: Smartphone },
    { id: 'cash_on_delivery', label: 'Cash on Delivery', icon: Banknote },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => onSelect(id)}
          className={`p-2.5 rounded-xl border text-left text-xs font-bold flex items-center gap-2 transition-all ${
            method === id
              ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-600'
              : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300'
          }`}
        >
          <Icon className="w-4 h-4 shrink-0" />
          <span className="truncate">{label}</span>
        </button>
      ))}
    </div>
  );
};
