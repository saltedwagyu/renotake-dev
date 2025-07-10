import React from 'react';

interface FormSectionProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean; 
}

const FormSection: React.FC<FormSectionProps> = ({ 
  label, 
  children, 
  className = '', 
  required = true 
}) => (
  <div className={`mb-4 ${className}`}>
    <label className="block text-sm font-medium mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

export default FormSection;