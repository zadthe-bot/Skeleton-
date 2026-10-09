import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';

export const GasServiceBanner: React.FC<{ language: string; onSelectGas: () => void }> = ({
  language,
  onSelectGas,
}) => {
  return (
    <div
      onClick={onSelectGas}
      className="p-4 rounded-3xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white cursor-pointer hover:shadow-lg transition-all flex items-center justify-between gap-3 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
          <Flame className="w-6 h-6 text-yellow-300" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider bg-white/25 px-1.5 py-0.5 rounded text-white">
              Emergency Refill
            </span>
            <span className="text-xs font-black">Oryx & Taifa Gas</span>
          </div>
          <p className="text-xs text-white/90 font-medium mt-0.5">
            {language === 'sw'
              ? 'Mtungi wa gesi umeisha? Badilisha mtungi sasa kwa dakika chache!'
              : 'Cooking gas finished? Fast doorstep empty cylinder swap!'}
          </p>
        </div>
      </div>
      <div className="p-2 rounded-xl bg-white text-orange-600 shrink-0">
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};
