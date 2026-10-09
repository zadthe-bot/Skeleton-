import React from 'react';
import { Order } from '../../types';
import { Clock } from 'lucide-react';

export const TrackingStatusCard: React.FC<{ order: Order }> = ({ order }) => {
  return (
    <div className="p-4 rounded-3xl bg-white dark:bg-[#1E1E1C] border border-neutral-200 dark:border-neutral-800 space-y-3 shadow-xs">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase text-orange-600 tracking-wider">Live Delivery</span>
          <h2 className="text-lg font-black text-[#1F1E1D] dark:text-[#F5F5F3] capitalize">{order.status.replace(/_/g, ' ')}</h2>
        </div>
        <div className="flex items-center gap-1 text-xs font-bold text-neutral-500">
          <Clock className="w-3.5 h-3.5 text-orange-500" />
          <span>~{order.estimatedDeliveryMinutes}m</span>
        </div>
      </div>
      <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
        <div className="bg-orange-500 h-full w-3/4 rounded-full transition-all duration-300" />
      </div>
    </div>
  );
};
