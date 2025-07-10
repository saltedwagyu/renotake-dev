import React from 'react';

interface FormActionButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
}

const FormActionButtons: React.FC<FormActionButtonsProps> = ({ 
  onBack, 
  onNext, 
  backLabel = 'Back', 
  nextLabel = 'Next'
}) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
    <div className="flex justify-center w-full">
      <div className="card w-full md:w-1/2 lg:w-1/2">
        <div className="bg-white rounded-lg p-4 mt-2 w-full">
          <div className="flex gap-4">
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
        </div>
      </div>
    </div>
    <style jsx>{`
      .card {
        padding-bottom: calc(1rem + env(safe-area-inset-bottom));
      }
    `}</style>
  </div>
);

export default FormActionButtons;