import React from 'react';

interface StepProgressProps {
  step: number;
  total: number;
}

const stepLabels = [
  "Property Details",
  "Renovation Scope",
  "Hacking & Demolition",
  "Essential Services",
  "Summary & Create a Plan"
];

const StepProgress: React.FC<StepProgressProps> = ({ step, total }) => {
  const percent = Math.max(0, Math.min(100, (step / total) * 100));
  const currentStepLabel = stepLabels[step - 1] || "Step";
  
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl font-semibold">{currentStepLabel}</span>
        <span className="text-gray-500 text-sm">Step {step} of {total}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal-600 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default StepProgress;