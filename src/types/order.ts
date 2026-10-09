import { TanzanianAddress } from './base';
import { CartItem, PaymentMethod, PaymentStatus } from './cart';

export type OrderStatus = 'pending_confirmation' | 'confirmed' | 'preparing' | 'ready_for_pickup' | 'picked_up' | 'on_the_way' | 'delivered';

export interface OrderTimelineEvent {
  status: OrderStatus;
  timestamp: string;
  noteEn: string;
  noteSw: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  sellerId: string;
  sellerName: string;
  sellerAddress: string;
  sellerPhone: string;
  items: CartItem[];
  subtotalTzs: number;
  deliveryFeeTzs: number;
  serviceFeeTzs: number;
  discountTzs: number;
  totalTzs: number;
  status: OrderStatus;
  deliveryAddress: TanzanianAddress;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  estimatedDeliveryMinutes: number;
  createdAt: string;
  updatedAt: string;
  timeline: OrderTimelineEvent[];
  riderName?: string;
  riderPhone?: string;
  riderVehicle?: string;
  deliveryInstructions?: string;
}
