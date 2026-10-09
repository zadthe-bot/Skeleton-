import React from 'react';
import { useApp } from '../../context/AppContext';
import { MapPin, ChevronDown } from 'lucide-react';

export const HeaderLocation: React.FC<{ onOpenCity: () => void; onOpenAddress: () => void }> = ({
  onOpenCity,
  onOpenAddress,
}) => {
  const { currentCity, currentAddress } = useApp();

  return (
    <div className="flex items-center gap-1.5 pl-2 sm:pl-3 border-l border-neutral-300 dark:border-neutral-800">
      <button
        onClick={onOpenCity}
        className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg bg-neutral-100 dark:bg-[#1E1E1C] text-neutral-800 dark:text-neutral-200"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
        <span>{currentCity.name}</span>
        <ChevronDown className="w-3 h-3 text-neutral-400" />
      </button>

      <button
        onClick={onOpenAddress}
        className="hidden md:flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-orange-500 max-w-[150px] truncate"
      >
        <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
        <span className="truncate">{currentAddress.ward || currentAddress.district}</span>
      </button>
    </div>
  );
};
