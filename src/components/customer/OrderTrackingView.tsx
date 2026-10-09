import React from 'react';
import { Order } from '../../types';
import { TrackingStatusCard } from './TrackingStatusCard';
import { TrackingMapVisual } from './TrackingMapVisual';
import { ArrowLeft } from 'lucide-react';

export const OrderTrackingView: React.FC<{ order: Order; onBackToOrders: () => void }> = ({
  order,
  onBackToOrders,
}) => {
  return (
    <div className="max-w-2xl mx-auto space-y-4 pb-20 animate-in fade-in duration-150">
      <div className="flex items-center justify-between">
        <button onClick={onBackToOrders} className="flex items-center gap-1 text-xs font-bold text-neutral-500 hover:text-orange-500">
          <ArrowLeft className="w-4 h-4" /><span>Back</span>
        </button>
        <span className="font-mono text-xs font-bold text-neutral-500">#{order.orderNumber}</span>
      </div>
      <TrackingStatusCard order={order} />
      <TrackingMapVisual sellerName={order.sellerName} ward={order.deliveryAddress.ward} />
      <div className="p-4 rounded-3xl bg-white dark:bg-[#1E1E1C] border border-neutral-200 dark:border-neutral-800 space-y-2 text-xs">
        <span className="font-bold text-neutral-900 dark:text-neutral-100 block">Items in Order</span>
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          {order.items.map((i) => (
            <div key={i.id} className="py-1.5 flex justify-between">
              <span>{i.quantity}x {i.product.nameEn}</span>
              <span className="font-bold">TZS {i.itemTotalTzs.toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700 flex justify-between font-black text-sm">
          <span>Total Paid</span>
          <span className="text-orange-600">TZS {order.totalTzs.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
