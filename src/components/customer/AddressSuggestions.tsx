import React from 'react';

interface AddressSuggestionsProps {
  suggestions: Array<{ ward: string; street: string; landmark: string }>;
  onSelect: (sug: { ward: string; street: string; landmark: string }) => void;
}

export const AddressSuggestions: React.FC<AddressSuggestionsProps> = ({ suggestions, onSelect }) => (
  <div className="bg-white dark:bg-[#252523] border border-neutral-200 dark:border-neutral-700 rounded-xl divide-y divide-neutral-100 dark:divide-neutral-800 shadow-md max-h-32 overflow-y-auto">
    {suggestions.map((s, idx) => (
      <div
        key={idx}
        onClick={() => onSelect(s)}
        className="p-2 text-xs hover:bg-orange-50 dark:hover:bg-orange-950/40 cursor-pointer flex justify-between"
      >
        <span className="font-bold text-neutral-800 dark:text-neutral-200">{s.ward}</span>
        <span className="text-neutral-400 text-[10px]">{s.landmark}</span>
      </div>
    ))}
  </div>
);
