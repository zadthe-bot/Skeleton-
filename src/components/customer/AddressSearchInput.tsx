import React from 'react';
import { AddressSuggestions } from './AddressSuggestions';
import { Search } from 'lucide-react';

interface AddressSearchInputProps {
  query: string;
  onChange: (q: string) => void;
  onSelectSuggestion: (sug: { ward: string; street: string; landmark: string }) => void;
}

const DEFAULT_SUGGESTIONS = [
  { ward: 'Mikocheni B', street: 'Old Bagamoyo Rd', landmark: 'Regency Hospital' },
  { ward: 'Masaki', street: 'Toure Drive', landmark: 'The Slipway' },
  { ward: 'Sinza', street: 'Shekilango Rd', landmark: 'Mori Bus Stand' },
  { ward: 'Kariakoo', street: 'Msimbazi St', landmark: 'Big Bon Station' },
];

export const AddressSearchInput: React.FC<AddressSearchInputProps> = ({
  query,
  onChange,
  onSelectSuggestion,
}) => {
  const filtered = DEFAULT_SUGGESTIONS.filter(
    (s) => s.ward.toLowerCase().includes(query.toLowerCase()) || s.landmark.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-1.5">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-2.5 text-neutral-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search location, street, landmark..."
          className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#252523] text-neutral-900 dark:text-neutral-100"
        />
      </div>
      {query.length > 0 && filtered.length > 0 && (
        <AddressSuggestions suggestions={filtered} onSelect={onSelectSuggestion} />
      )}
    </div>
  );
};

