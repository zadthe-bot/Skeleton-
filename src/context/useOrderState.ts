import { useState } from 'react';
import { Order, TanzanianAddress, PaymentMethod, CartItem } from '../types';
import { buildOrderEntity } from './orderFactory';

export const useOrderState = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);

  const createOrder = (
    address: TanzanianAddress,
    paymentMethod: PaymentMethod,
    items: CartItem[],
    subtotal: number,
    total: number,
    sellerName: string,
    notes = ''
  ): Order => {
    const newOrd = buildOrderEntity(address, paymentMethod, items, subtotal, total, sellerName, notes);
    setOrders((prev) => [newOrd, ...prev]);
    setActiveOrderId(newOrd.id);
    return newOrd;
  };

  return { orders, activeOrderId, setActiveOrderId, createOrder };
};

