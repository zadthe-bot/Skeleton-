import React from 'react';
import { useApp } from '../../context/AppContext';
import { CITIES_DATA } from '../../data';
import { X, Check } from 'lucide-react';

export const CitySelectorModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { currentCity, selectCity, t } = useApp();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-sm bg-white dark:bg-[#1E1E1C] rounded-2xl p-4 shadow-2xl border border-neutral-200 dark:border-neutral-800 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-[#1F1E1D] dark:text-[#F5F5F3]">{t.selectCity}</h3>
          <button onClick={onClose} className="text-neutral-400 p-1"><X className="w-4 h-4" /></button>
        </div>
        <div className="space-y-1.5">
          {CITIES_DATA.map((city) => (
            <button
              key={city.id}
              onClick={() => { selectCity(city.id); onClose(); }}
              className={`w-full p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between ${
                currentCity.id === city.id
                  ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-600'
                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${city.isSupported ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                <span>{city.name}</span>
              </div>
              {currentCity.id === city.id && <Check className="w-4 h-4 text-orange-500" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
