import React from 'react';
import { useApp } from '../../context/AppContext';
import { Seller } from '../../types';
import { RestaurantHeader } from './RestaurantHeader';
import { RestaurantMenuItem } from './RestaurantMenuItem';

export const RestaurantDetailModal: React.FC<{
  seller: Seller | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ seller, isOpen, onClose }) => {
  const { products, addToCart, language, showToast } = useApp();
  if (!isOpen || !seller) return null;

  const sellerProducts = products.filter((p: any) => p.sellerId === seller.id);

  const handleAdd = (prod: any) => {
    addToCart(prod, 1);
    showToast(language === 'sw' ? 'Imeongezwa kwenye riksho' : 'Added to cart');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/70 backdrop-blur-xs">
      <div className="w-full max-w-lg bg-[#FAF7F2] dark:bg-[#1A1A18] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[85vh]">
        <RestaurantHeader seller={seller} onClose={onClose} />
        <div className="p-4 overflow-y-auto space-y-2.5 flex-1">
          <span className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">
            Menu Items ({sellerProducts.length})
          </span>
          {sellerProducts.map((p: any) => (
            <RestaurantMenuItem key={p.id} product={p} language={language} onAdd={handleAdd} />
          ))}
        </div>
      </div>
    </div>
  );
};
