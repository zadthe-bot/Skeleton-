import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Product } from '../../types';
import { ProductModalAction } from './ProductModalAction';
import { X } from 'lucide-react';

export const ProductDetailModal: React.FC<{ product: Product | null; isOpen: boolean; onClose: () => void }> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { addToCart, language, showToast } = useApp();
  const [qty, setQty] = useState(1);
  if (!isOpen || !product) return null;

  const handleAdd = () => {
    addToCart(product, qty);
    showToast(language === 'sw' ? 'Imeongezwa kwenye riksho' : 'Added to cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/70 backdrop-blur-xs">
      <div className="w-full max-w-sm bg-white dark:bg-[#1E1E1C] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 space-y-3 p-4">
        <div className="relative h-44 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <img src={product.imageUrl} alt={product.nameEn} className="w-full h-full object-cover" />
          <button onClick={onClose} className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white cursor-pointer"><X className="w-4 h-4" /></button>
          {product.unit && <span className="absolute bottom-2 left-2 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded">{product.unit}</span>}
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase text-orange-600">{product.sellerName}</span>
          <h3 className="font-bold text-sm text-[#1F1E1D] dark:text-[#F5F5F3] leading-snug">{language === 'sw' ? product.nameSw : product.nameEn}</h3>
          <p className="text-xs text-neutral-500 line-clamp-2">{language === 'sw' ? product.descriptionSw : product.descriptionEn}</p>
        </div>
        <ProductModalAction qty={qty} priceTzs={product.priceTzs} isGas={product.category === 'gas'} language={language} onQtyChange={setQty} onAdd={handleAdd} />
      </div>
    </div>
  );
};

