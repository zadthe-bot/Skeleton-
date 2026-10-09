import React from 'react';
import { Search, X } from 'lucide-react';

interface ExploreSearchBarProps {
  query: string;
  onChange: (q: string) => void;
  placeholder: string;
}

export const ExploreSearchBar: React.FC<ExploreSearchBarProps> = ({ query, onChange, placeholder }) => {
  return (
    <div className="relative">
      <Search className="w-4 h-4 absolute left-3.5 top-3 text-neutral-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-xs pl-10 pr-10 py-2.5 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1E1E1C] text-neutral-900 dark:text-neutral-100 shadow-2xs"
      />
      {query && (
        <button onClick={() => onChange('')} className="absolute right-3.5 top-2.5 text-neutral-400 hover:text-black dark:hover:text-white">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
