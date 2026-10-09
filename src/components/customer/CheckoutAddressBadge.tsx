import React from 'react';
import { TanzanianAddress } from '../../types';

export const CheckoutAddressBadge: React.FC<{ address: TanzanianAddress }> = ({ address }) => (
  <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-[#252523] text-xs">
    <span className="font-bold block text-neutral-900 dark:text-neutral-100">
      {address.ward}, {address.district}
    </span>
    <span className="text-neutral-500 text-[11px]">
      {address.street} · {address.landmark}
    </span>
  </div>
);
