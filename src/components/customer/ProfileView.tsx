import React from 'react';
import { useApp } from '../../context/AppContext';
import { ThemeToggle } from '../common/ThemeToggle';
import { UserProfileHeader } from './UserProfileHeader';

export const ProfileView: React.FC<{ onOpenAddressModal: () => void }> = ({ onOpenAddressModal }) => {
  const { language, setLanguage, currentAddress, theme } = useApp();

  return (
    <div className="space-y-4 pb-24 max-w-xl mx-auto animate-in fade-in duration-150">
      <UserProfileHeader />
      <div className="p-4 rounded-3xl bg-white dark:bg-[#1E1E1C] border border-neutral-200 dark:border-neutral-800 space-y-3 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-900 dark:text-neutral-100">Theme</span>
            <span className="text-[11px] text-neutral-400">({theme === 'dark' ? 'Dark' : 'Warm Light'})</span>
          </div>
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800">
          <span className="font-bold text-neutral-900 dark:text-neutral-100">Language</span>
          <button onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')} className="px-2.5 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700 font-bold uppercase text-orange-600">
            {language}
          </button>
        </div>
        <div onClick={onOpenAddressModal} className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800 cursor-pointer">
          <span className="font-bold text-neutral-900 dark:text-neutral-100">Delivery Address</span>
          <span className="text-neutral-400 truncate max-w-[140px]">{currentAddress.ward}</span>
        </div>
        <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-neutral-500">
          <span>Customer & Gas Helpline</span>
          <span className="font-mono font-bold text-neutral-900 dark:text-neutral-100">+255 754 000 888</span>
        </div>
      </div>
    </div>
  );
};

