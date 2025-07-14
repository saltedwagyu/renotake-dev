import React from 'react';
import Button from './Button';

interface FormActionButtonsProps {
  onBack: () => void;
  onNext: () => void;
  backLabel?: string;
  nextLabel?: string;
  disabled?: boolean;
}

export default function FormActionButtons({ 
  onBack, 
  onNext, 
  backLabel = 'Back', 
  nextLabel = 'Next',
  disabled = false
}: FormActionButtonsProps) {
  return (
    <div className="flex gap-4 mt-8">
      {backLabel ? (
        <>
          <div className="flex-1">
            <Button 
              variant="secondary" 
              onClick={onBack}
              disabled={disabled}
              style={{ 
                padding: '12px 24px', 
                fontSize: 16 
              }}
            >
              {backLabel}
            </Button>
          </div>
          <div className="flex-1">
            <Button 
              variant="primary" 
              onClick={onNext}
              disabled={disabled}
              style={{ 
                padding: '12px 24px', 
                fontSize: 16 
              }}
            >
              {nextLabel}
            </Button>
          </div>
        </>
      ) : (
        <div className="ml-auto w-1/2">
          <Button 
            variant="primary" 
            onClick={onNext}
            disabled={disabled}
            style={{ 
              padding: '12px 24px', 
              fontSize: 16 
            }}
          >
            {nextLabel}
          </Button>
        </div>
      )}
    </div>
  );
}