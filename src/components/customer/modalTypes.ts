export interface CustomerModalsProps {
  selectedSeller: any;
  setSelectedSeller: (s: any) => void;
  selectedProduct: any;
  setSelectedProduct: (p: any) => void;
  isCartOpen: boolean;
  setIsCartOpen: (o: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (o: boolean) => void;
  isAddressOpen: boolean;
  setIsAddressOpen: (o: boolean) => void;
  isCityOpen: boolean;
  setIsCityOpen: (o: boolean) => void;
  onOrderSuccess: (id: string) => void;
}
