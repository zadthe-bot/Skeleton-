import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MapPinPicker } from './MapPinPicker';
import { AddressSearchInput } from './AddressSearchInput';
import { createAddressObject } from './createAddressObject';
import { X, Check } from 'lucide-react';

export const AddressEditorModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { currentCity, addSavedAddress } = useApp();
  const [search, setSearch] = useState('');
  const [ward, setWard] = useState('Mikocheni B');
  const [street, setStreet] = useState('Old Bagamoyo Rd');
  const [landmark, setLandmark] = useState('Near Regency Hospital');
  if (!isOpen) return null;

  const handleSave = () => {
    addSavedAddress(createAddressObject(currentCity, ward, street, landmark));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white dark:bg-[#1E1E1C] rounded-2xl p-4 shadow-2xl border border-neutral-200 dark:border-neutral-800 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-[#1F1E1D] dark:text-[#F5F5F3]">Uber Pin Location Picker</h3>
          <button onClick={onClose} className="text-neutral-400 p-1 cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
        <AddressSearchInput query={search} onChange={setSearch} onSelectSuggestion={(s) => { setWard(s.ward); setStreet(s.street); setLandmark(s.landmark); setSearch(''); }} />
        <MapPinPicker ward={ward} landmark={landmark} onPanLocation={() => setLandmark('Adjusted location pin')} />
        <button onClick={handleSave} className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
          <Check className="w-4 h-4" />
          <span>Confirm & Deliver Here</span>
        </button>
      </div>
    </div>
  );
};

