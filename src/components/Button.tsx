"use client";
import React from 'react';

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
    borderRadius: 9999, 
    fontWeight: 500,
    fontSize: 16,
    cursor: 'pointer',
    padding: variant === 'primary' ? '14px 0' : '12px 0',
    display: variant === 'secondary' ? 'flex' : undefined,
    alignItems: variant === 'secondary' ? 'center' : undefined,
    justifyContent: variant === 'secondary' ? 'center' : undefined,
    gap: variant === 'secondary' ? 8 : undefined,
    background: variant === 'primary' ? '#0d9488' : '#fff', // teal-600
    color: variant === 'primary' ? '#fff' : '#71717a', // white for primary, zinc-500 for secondary
    marginBottom: 16,
    border: variant === 'secondary' ? '1.5px solid #e4e4e7' : 'none', // zinc-200
    ...style,
  };
  return (
    <button type={type} onClick={onClick} style={baseStyle} className={className}>
      {children}
    </button>
  );
} 