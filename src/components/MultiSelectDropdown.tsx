import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface MultiSelectDropdownProps {
  label: string;
  value: string[];
  options: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ 
  label, 
  value, 
  options, 
  onChange, 
  placeholder = 'Select options' 
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionToggle = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(item => item !== option)
      : [...value, option];
    onChange(newValue);
  };

  const displayText = value.length > 0 
    ? value.length === 1 
      ? value[0] 
      : `${value.length} areas selected`
    : placeholder;

  return (
    <div className="mb-4" ref={dropdownRef}>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        <button
          type="button"
          className="w-full px-6 py-2 rounded-lg border text-base font-medium border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center justify-between"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <span className={value.length === 0 ? 'text-gray-500' : ''}>{displayText}</span>
          <ChevronDownIcon size={20} className="text-gray-400 ml-2" />
        </button>
        {showDropdown && (
          <div className="absolute left-0 right-0 mt-2 z-10 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option}
                className="px-6 py-2 cursor-pointer text-base font-medium text-gray-700 hover:bg-teal-50 flex items-center"
                onClick={() => handleOptionToggle(option)}
              >
                <input
                  type="checkbox"
                  checked={value.includes(option)}
                  onChange={() => {}} 
                  className="mr-3 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <span className={value.includes(option) ? 'text-teal-700' : ''}>
                  {option}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      {value.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {value.map((item) => (
            <span
              key={item}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800"
            >
              {item}
              <button
                type="button"
                className="ml-2 text-teal-600 hover:text-teal-800"
                onClick={() => handleOptionToggle(item)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;