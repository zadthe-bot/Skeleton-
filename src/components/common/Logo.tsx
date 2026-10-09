import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const s = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  return (
    <div className="flex items-center gap-2 select-none">
      <div className={`${s} shrink-0 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-sm`}>
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12 2L15 8L21 12L15 16L12 22L9 16L3 12L9 8Z" />
        </svg>
      </div>
      <span className="text-lg font-black tracking-tight text-[#1F1E1D] dark:text-[#F5F5F3]">
        Starches<span className="text-orange-500">.</span>
      </span>
    </div>
  );
};
