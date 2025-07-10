import React from 'react';
import ButtonGroup from './ButtonGroup';

interface PropertyAgeSelectorProps {
  value: string | null;
  onChange: (value: string) => void;
}

const ages = ["< 10 years", "10 - 20 years", "> 20 years"];

const PropertyAgeSelector: React.FC<PropertyAgeSelectorProps> = ({ value, onChange }) => (
  <ButtonGroup
    options={ages}
    value={value}
    onChange={onChange}
    className=""
  />
);

export default PropertyAgeSelector;