import React from 'react';

interface FormActionButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
}

const FormActionButtons: React.FC<FormActionButtonsProps> = ({ onBack, onNext, backLabel = 'Back', nextLabel = 'Next' }) => (
  <div className="flex gap-4 mt-8">
    <button
      type="button"
      className="flex-1 px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-700 font-semibold text-base"
      onClick={onBack}
    >
      {backLabel}
    </button>
    <button
      type="button"
      className="flex-1 px-6 py-3 rounded-full bg-teal-600 text-white font-semibold text-base shadow-none"
      onClick={onNext}
    >
      {nextLabel}
    </button>
  </div>
);

export default FormActionButtons; 