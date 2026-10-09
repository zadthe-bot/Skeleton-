import React from 'react';
import { useApp } from '../../context/AppContext';
import { UtensilsCrossed, Apple, Compass, ReceiptText, User } from 'lucide-react';

export type CustomerTab = 'home' | 'groceries' | 'explore' | 'orders' | 'profile';

export const BottomNav: React.FC<{ activeTab: CustomerTab; onSelectTab: (t: CustomerTab) => void }> = ({ activeTab, onSelectTab }) => {
  const { language, orders } = useApp();
  const hasActiveOrder = orders.some((o: any) => o.status !== 'delivered');
  const items = [
    { id: 'home', label: language === 'sw' ? 'Vyakula' : 'Food', icon: UtensilsCrossed },
    { id: 'groceries', label: language === 'sw' ? 'Sokoni' : 'Groceries', icon: Apple },
    { id: 'explore', label: language === 'sw' ? 'Tafuta' : 'Explore', icon: Compass },
    { id: 'orders', label: language === 'sw' ? 'Oda' : 'Orders', icon: ReceiptText, badge: hasActiveOrder },
    { id: 'profile', label: language === 'sw' ? 'Wasifu' : 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#151514]/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-md mx-auto px-4 h-15 flex items-center justify-around">
        {items.map(({ id, label, icon: Icon, badge }) => (
          <button
            key={id}
            onClick={() => onSelectTab(id as CustomerTab)}
            className={`flex flex-col items-center py-1 px-2.5 ${activeTab === id ? 'text-orange-600 font-bold' : 'text-neutral-500'}`}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {badge && <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />}
            </div>
            <span className="text-[10px] mt-0.5">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
