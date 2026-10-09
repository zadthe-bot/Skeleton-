import React from 'react';
import { useApp } from '../../context/AppContext';
import { Order } from '../../types';
import { ReceiptText, ChevronRight } from 'lucide-react';

export const OrderHistoryView: React.FC<{ onSelectOrder: (o: Order) => void; onStartBrowsing: () => void }> = ({
  onSelectOrder,
  onStartBrowsing,
}) => {
  const { orders } = useApp();

  if (orders.length === 0) {
    return (
      <div className="p-12 text-center text-xs text-neutral-400 space-y-2 bg-white dark:bg-[#1E1E1C] rounded-3xl border border-neutral-200 dark:border-neutral-800">
        <ReceiptText className="w-8 h-8 text-neutral-300 mx-auto" />
        <p className="font-bold text-neutral-800 dark:text-neutral-200">No orders yet</p>
        <p>Order food or groceries to see active tracking here.</p>
        <button onClick={onStartBrowsing} className="py-2 px-4 rounded-xl bg-orange-500 text-white font-bold text-xs mt-1">Start Ordering</button>
      </div>
    );
  }

  return (
    <div className="space-y-3 pb-24 animate-in fade-in duration-150">
      <h2 className="text-base font-black text-[#1F1E1D] dark:text-[#F5F5F3]">Order History ({orders.length})</h2>
      {orders.map((ord: Order) => (
        <div key={ord.id} onClick={() => onSelectOrder(ord)} className="p-3.5 rounded-2xl bg-white dark:bg-[#1E1E1C] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between cursor-pointer hover:border-orange-400 shadow-2xs">
          <div>
            <span className="text-[10px] font-bold text-neutral-400">#{ord.orderNumber}</span>
            <h4 className="font-bold text-xs sm:text-sm text-[#1F1E1D] dark:text-[#F5F5F3]">{ord.sellerName}</h4>
            <span className="text-xs font-black text-orange-600 block mt-0.5">TZS {ord.totalTzs.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-orange-600 font-bold">
            <span className="capitalize">{ord.status.replace(/_/g, ' ')}</span>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </div>
        </div>
      ))}
    </div>
  );
};
