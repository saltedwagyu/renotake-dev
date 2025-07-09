"use client";
import React from 'react';

// Zinc 950: #09090b, Zinc 500: #71717a, Emerald 600: #059669, Zinc 200: #e4e4e7

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  className?: string;
};

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  style,
  className = '',
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: 9999, // rounded-full
    fontWeight: 500,
    fontSize: 16,
    cursor: 'pointer',
    padding: variant === 'primary' ? '14px 0' : '12px 0',
    display: variant === 'secondary' ? 'flex' : undefined,
    alignItems: variant === 'secondary' ? 'center' : undefined,
    justifyContent: variant === 'secondary' ? 'center' : undefined,
    gap: variant === 'secondary' ? 8 : undefined,
    background: variant === 'primary' ? '#059669' : '#fff', // emerald-600
    color: variant === 'primary' ? '#fff' : '#71717a', // white for primary, zinc-500 for secondary
    marginBottom: 8,
    border: variant === 'secondary' ? '1.5px solid #e4e4e7' : 'none', // zinc-200
    ...style,
  };
  return (
    <button type={type} onClick={onClick} style={baseStyle} className={className}>
      {children}
    </button>
  );
} 