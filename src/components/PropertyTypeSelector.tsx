import React from 'react';
import ButtonGroup from './ButtonGroup';

interface PropertyTypeSelectorProps {
  value: string | null;
  onChange: (value: string) => void;
}

const types = ["HDB", "Condo", "Landed"];

const PropertyTypeSelector: React.FC<PropertyTypeSelectorProps> = ({ value, onChange }) => (
  <ButtonGroup
    options={types}
    value={value}
    onChange={onChange}
    className=""
  />
);

export default PropertyTypeSelector;