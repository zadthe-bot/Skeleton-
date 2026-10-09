import React from 'react';
import { useApp } from '../../context/AppContext';
import { Logo } from '../common/Logo';
import { ArrowRight, Sparkles } from 'lucide-react';

export const OnboardingModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { language } = useApp();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-sm bg-white dark:bg-[#1E1E1C] rounded-3xl p-6 text-center space-y-4 shadow-2xl border border-neutral-200 dark:border-neutral-800">
        <div className="flex justify-center"><Logo size="lg" /></div>
        <h2 className="text-xl font-black text-[#1F1E1D] dark:text-[#F5F5F3]">
          {language === 'sw' ? 'Karibu Starches Tanzania!' : 'Welcome to Starches!'}
        </h2>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {language === 'sw'
            ? 'Vyakula vitamu, bidhaa za sokoni na huduma ya gesi ya Oryx/Taifa mlangoni kwako.'
            : 'Authentic food, sokoni groceries, and Oryx/Taifa cooking gas delivered to your door.'}
        </p>
        <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[11px] font-semibold text-orange-800 dark:text-orange-300 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-orange-500" />
          <span>{language === 'sw' ? 'Tazama bei bila kusajili akaunti.' : 'Guest browsing: Explore menus freely.'}</span>
        </div>
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <span>{language === 'sw' ? 'Anza Sasa' : 'Start Ordering'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
