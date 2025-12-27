import React from 'react'
import { Search, X } from 'lucide-react';

function SearchBar({ value, onChange, debouncedValue }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Search Items
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search fruits..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-11 pr-10 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>
      {debouncedValue && (
        <div className="mt-2 text-sm text-slate-500">
          Filtering for: <span className="font-medium text-blue-600">{debouncedValue}</span>
        </div>
      )}
    </div>
  );
}

export default SearchBar