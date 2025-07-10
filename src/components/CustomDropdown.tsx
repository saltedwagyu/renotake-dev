import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface CustomDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, value, options, onChange, placeholder = 'Select an option' }) => {
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

  return (
    <div className="mb-4" ref={dropdownRef}>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        <button
          type="button"
          className="w-full px-6 py-2 rounded-lg border text-base font-medium border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center justify-between"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <span>{value || placeholder}</span>
          <ChevronDownIcon size={20} className="text-gray-400 ml-2" />
        </button>
        {showDropdown && (
          <ul className="absolute left-0 right-0 mt-2 z-10 bg-white border border-gray-200 rounded-lg shadow-lg">
            {options.map((option) => (
              <li
                key={option}
                className={`px-6 py-2 cursor-pointer text-base font-medium text-gray-700 hover:bg-teal-50 ${value === option ? 'bg-teal-100 text-teal-700' : ''}`}
                onClick={() => {
                  onChange(option);
                  setShowDropdown(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown; 