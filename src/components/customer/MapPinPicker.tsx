import React from 'react';
import { MapPin } from 'lucide-react';

interface MapPinPickerProps {
  ward: string;
  landmark: string;
  onPanLocation: (offsetLat: number, offsetLng: number) => void;
}

export const MapPinPicker: React.FC<MapPinPickerProps> = ({ ward, landmark, onPanLocation }) => {
  return (
    <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-[#E8ECEF] dark:bg-[#1A1A18] select-none">
      {/* Map Grid / Streets Simulation */}
      <div
        onClick={() => onPanLocation((Math.random() - 0.5) * 0.005, (Math.random() - 0.5) * 0.005)}
        className="absolute inset-0 cursor-crosshair opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"
      />

      {/* Uber-style Center Floating Pin with Shadow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none z-10 animate-bounce duration-1000">
        <div className="p-2 rounded-full bg-orange-600 text-white shadow-xl ring-4 ring-orange-400/40">
          <MapPin className="w-5 h-5" />
        </div>
        <div className="w-2.5 h-1 bg-black/40 rounded-full blur-[1px] mt-1" />
      </div>

      {/* Floating Address Pill at Bottom */}
      <div className="absolute bottom-2 left-2 right-2 bg-white/95 dark:bg-[#1E1E1C]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-md flex items-center justify-between text-xs">
        <div className="truncate">
          <span className="font-bold text-neutral-900 dark:text-neutral-100">{ward || 'Mikocheni'}</span>
          <span className="text-neutral-400 text-[10px] ml-1.5">{landmark || 'Tap map to adjust pin'}</span>
        </div>
        <span className="text-[10px] font-bold text-orange-600 bg-orange-50 dark:bg-orange-950/60 px-1.5 py-0.5 rounded">
          Uber Pin
        </span>
      </div>
    </div>
  );
};
