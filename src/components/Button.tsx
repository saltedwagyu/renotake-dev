"use client";
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  style,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: 9999, 
    fontWeight: 500,
    fontSize: 16,
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: variant === 'primary' ? '14px 0' : '12px 0',
    display: variant === 'secondary' ? 'flex' : undefined,
    alignItems: variant === 'secondary' ? 'center' : undefined,
    justifyContent: variant === 'secondary' ? 'center' : undefined,
    gap: variant === 'secondary' ? 8 : undefined,
    background: disabled 
      ? (variant === 'primary' ? '#94a3b8' : '#f1f5f9')
      : (variant === 'primary' ? '#0d9488' : '#fff'), 
    color: disabled 
      ? (variant === 'primary' ? '#e2e8f0' : '#94a3b8')
      : (variant === 'primary' ? '#fff' : '#71717a'), 
    marginBottom: 16,
    border: variant === 'secondary' ? '1.5px solid #e4e4e7' : 'none', 
    opacity: disabled ? 0.6 : 1,
    ...style,
  };
  
  return (
    <button 
      type={type} 
      onClick={disabled ? undefined : onClick} 
      style={baseStyle} 
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
}