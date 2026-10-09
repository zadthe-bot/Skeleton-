import React from 'react';

export const UserProfileHeader: React.FC = () => (
  <div className="p-4 rounded-3xl bg-white dark:bg-[#1E1E1C] border border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 font-black flex items-center justify-center text-lg">
      J
    </div>
    <div>
      <h3 className="font-bold text-sm text-[#1F1E1D] dark:text-[#F5F5F3]">Juma Mwambene</h3>
      <p className="text-xs text-neutral-400 font-mono">+255 754 123 456 · Dar es Salaam</p>
    </div>
  </div>
);
