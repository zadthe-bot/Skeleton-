import React from 'react';
import { CustomerTab } from '../common/BottomNav';
import { HomeScreen } from './HomeScreen';
import { GroceriesScreen } from './GroceriesScreen';
import { ExploreScreen } from './ExploreScreen';
import { OrderHistoryView } from './OrderHistoryView';
import { OrderTrackingView } from './OrderTrackingView';
import { ProfileView } from './ProfileView';

interface CustomerRouterProps {
  tab: CustomerTab;
  setTab: (t: CustomerTab) => void;
  activeOrder: any;
  setActiveOrderId: (id: string | null) => void;
  onSelectSeller: (s: any) => void;
  onSelectProduct: (p: any) => void;
  onOpenAddress: () => void;
}

export const CustomerRouter: React.FC<CustomerRouterProps> = ({
  tab,
  setTab,
  activeOrder,
  setActiveOrderId,
  onSelectSeller,
  onSelectProduct,
  onOpenAddress,
}) => {
  if (tab === 'home') {
    return <HomeScreen onSelectSeller={onSelectSeller} onSelectProduct={onSelectProduct} onOpenSearch={() => setTab('explore')} onGoToGroceries={() => setTab('groceries')} />;
  }
  if (tab === 'groceries') {
    return <GroceriesScreen onSelectProduct={onSelectProduct} onBackToFood={() => setTab('home')} />;
  }
  if (tab === 'explore') {
    return <ExploreScreen onSelectProduct={onSelectProduct} />;
  }
  if (tab === 'orders') {
    return activeOrder ? <OrderTrackingView order={activeOrder} onBackToOrders={() => setActiveOrderId(null)} /> : <OrderHistoryView onSelectOrder={(o) => setActiveOrderId(o.id)} onStartBrowsing={() => setTab('home')} />;
  }
  return <ProfileView onOpenAddressModal={onOpenAddress} />;
};
