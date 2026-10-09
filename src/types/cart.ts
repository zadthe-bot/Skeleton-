import { Product } from './catalog';

export interface CartItemOption {
  groupId: string;
  groupTitle: string;
  choiceId: string;
  choiceName: string;
  priceDeltaTzs: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedOptions: CartItemOption[];
  specialInstructions?: string;
  itemTotalTzs: number;
}

export type PaymentMethod =
  | 'mpesa'
  | 'tigopesa'
  | 'airtelmoney'
  | 'halopesa'
  | 'cash_on_delivery';

export type PaymentStatus =
  | 'awaiting_payment'
  | 'payment_successful';
