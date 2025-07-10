import React from 'react';

interface FormSectionProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ label, children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    <label className="block text-sm font-medium mb-2">
      {label} <span className="text-red-500">*</span>
    </label>
    {children}
  </div>
);

export default FormSection; 