import { useState } from 'react';
import { CartItem, Product, CartItemOption } from '../types';

export const useCartState = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity = 1, options: CartItemOption[] = [], instructions = '') => {
    const extra = options.reduce((s, o) => s + o.priceDeltaTzs, 0);
    const unitPrice = product.priceTzs + extra;
    const itemTotal = unitPrice * quantity;
    const id = `${product.id}-${options.map((o) => o.choiceId).join('-')}`;

    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === id);
      if (idx > -1) {
        const copy = [...prev];
        const newQty = copy[idx].quantity + quantity;
        copy[idx] = { ...copy[idx], quantity: newQty, itemTotalTzs: unitPrice * newQty };
        return copy;
      }
      return [...prev, { id, product, quantity, selectedOptions: options, specialInstructions: instructions, itemTotalTzs: itemTotal }];
    });
  };

  const removeFromCart = (id: string) => setCart((prev) => prev.filter((i) => i.id !== id));
  const updateCartQuantity = (id: string, qty: number) => {
    if (qty <= 0) return removeFromCart(id);
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: qty, itemTotalTzs: (i.itemTotalTzs / i.quantity) * qty } : i)));
  };
  const clearCart = () => setCart([]);

  const subtotalTzs = cart.reduce((s, i) => s + i.itemTotalTzs, 0);
  const deliveryFeeTzs = cart.length > 0 ? 2500 : 0;
  const serviceFeeTzs = cart.length > 0 ? 800 : 0;
  const totalTzs = subtotalTzs + deliveryFeeTzs + serviceFeeTzs;

  return { cart, addToCart, removeFromCart, updateCartQuantity, clearCart, subtotalTzs, deliveryFeeTzs, serviceFeeTzs, totalTzs };
};
