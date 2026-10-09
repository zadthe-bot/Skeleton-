import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { toastMessage } = useApp();
  if (!toastMessage) return null;
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-sm w-[90%] pointer-events-none animate-in fade-in duration-150">
      <div className="bg-[#1F1E1D]/95 dark:bg-[#272725]/95 text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-xl flex items-center gap-2 border border-neutral-700">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="truncate">{toastMessage}</span>
      </div>
    </div>
  );
};
