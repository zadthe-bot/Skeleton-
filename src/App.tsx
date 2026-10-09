import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { BottomNav, CustomerTab } from './components/common/BottomNav';
import { NotificationToast } from './components/common/NotificationToast';
import { CustomerRouter } from './components/customer/CustomerRouter';
import { CustomerModals } from './components/customer/CustomerModals';

const AppContent: React.FC = () => {
  const { orders, activeOrderId, setActiveOrderId, theme } = useApp();
  const [tab, setTab] = useState<CustomerTab>('home');
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);

  const activeOrder = orders.find((o: any) => o.id === activeOrderId);
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark bg-[#121211] text-[#F5F5F3]' : 'light bg-[#FAF7F2] text-[#1F1E1D]'} transition-colors`}>
      <Header onOpenCart={() => setIsCartOpen(true)} onOpenCity={() => setIsCityOpen(true)} onOpenAddress={() => setIsAddressOpen(true)} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 pt-4">
        <CustomerRouter tab={tab} setTab={setTab} activeOrder={activeOrder} setActiveOrderId={setActiveOrderId} onSelectSeller={setSelectedSeller} onSelectProduct={setSelectedProduct} onOpenAddress={() => setIsAddressOpen(true)} />
      </main>
      <BottomNav activeTab={tab} onSelectTab={setTab} />
      <CustomerModals selectedSeller={selectedSeller} setSelectedSeller={setSelectedSeller} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} isCheckoutOpen={isCheckoutOpen} setIsCheckoutOpen={setIsCheckoutOpen} isAddressOpen={isAddressOpen} setIsAddressOpen={setIsAddressOpen} isCityOpen={isCityOpen} setIsCityOpen={setIsCityOpen} onOrderSuccess={(id) => { setActiveOrderId(id); setTab('orders'); }} />
      <NotificationToast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
