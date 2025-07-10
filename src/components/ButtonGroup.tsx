import React from 'react';

interface ButtonGroupProps {
  options: string[];
  value: string | null;
  onChange: (value: string) => void;
  className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={`px-4 py-2 rounded-lg border text-base font-medium whitespace-nowrap flex-shrink-0 ${
            value === option
              ? "bg-teal-600 text-white border-teal-600"
              : "bg-white text-gray-700 border-gray-200"
          }`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;