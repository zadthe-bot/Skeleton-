import React from 'react';
import { CustomerModalsProps } from './modalTypes';
import { RestaurantDetailModal } from './RestaurantDetailModal';
import { ProductDetailModal } from './ProductDetailModal';
import { CartDrawer } from './CartDrawer';
import { CheckoutModal } from './CheckoutModal';
import { AddressEditorModal } from './AddressEditorModal';
import { CitySelectorModal } from './CitySelectorModal';

export const CustomerModals: React.FC<CustomerModalsProps> = ({
  selectedSeller,
  setSelectedSeller,
  selectedProduct,
  setSelectedProduct,
  isCartOpen,
  setIsCartOpen,
  isCheckoutOpen,
  setIsCheckoutOpen,
  isAddressOpen,
  setIsAddressOpen,
  isCityOpen,
  setIsCityOpen,
  onOrderSuccess,
}) => {
  return (
    <>
      <RestaurantDetailModal seller={selectedSeller} isOpen={!!selectedSeller} onClose={() => setSelectedSeller(null)} />
      <ProductDetailModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onProceedToCheckout={() => setIsCheckoutOpen(true)} />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} onOrderSuccess={onOrderSuccess} />
      <AddressEditorModal isOpen={isAddressOpen} onClose={() => setIsAddressOpen(false)} />
      <CitySelectorModal isOpen={isCityOpen} onClose={() => setIsCityOpen(false)} />
    </>
  );
};

