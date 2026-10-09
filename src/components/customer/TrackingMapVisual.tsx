import React from 'react';
import { Bike, MapPin, Store } from 'lucide-react';

export const TrackingMapVisual: React.FC<{ sellerName: string; ward: string }> = ({ sellerName, ward }) => {
  return (
    <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[#E5E9EC] dark:bg-[#151514]">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <path d="M 40 120 Q 150 40 280 100 T 520 80" fill="none" stroke="#EA580C" strokeWidth="4" strokeDasharray="6 6" />
      </svg>
      <div className="absolute left-6 bottom-6 flex flex-col items-center">
        <div className="p-2 rounded-full bg-orange-500 text-white shadow-md"><Store className="w-4 h-4" /></div>
        <span className="text-[10px] font-bold mt-1 bg-white dark:bg-black px-1.5 py-0.5 rounded shadow-xs truncate max-w-[100px]">{sellerName}</span>
      </div>
      <div className="absolute left-1/2 top-10 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="p-2 rounded-full bg-emerald-600 text-white shadow-lg"><Bike className="w-4 h-4" /></div>
        <span className="text-[9px] font-bold mt-1 bg-emerald-700 text-white px-1.5 py-0.5 rounded shadow-xs">Rider en route</span>
      </div>
      <div className="absolute right-6 top-6 flex flex-col items-center">
        <div className="p-2 rounded-full bg-[#1F1E1D] dark:bg-white text-white dark:text-black shadow-md"><MapPin className="w-4 h-4" /></div>
        <span className="text-[10px] font-bold mt-1 bg-white dark:bg-black px-1.5 py-0.5 rounded shadow-xs truncate max-w-[100px]">{ward}</span>
      </div>
    </div>
  );
};
