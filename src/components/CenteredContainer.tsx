import React from 'react';

interface CenteredContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

const CenteredContainer: React.FC<CenteredContainerProps> = ({
  children,
  title,
  subtitle,
  className = ''
}) => {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center bg-white p-8 ${className}`}>
      {title && (
        <h1 className="font-bold text-3xl text-zinc-950 mb-8 text-center">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="text-zinc-500 mb-5 text-center text-base">
          {subtitle}
        </p>
      )}
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default CenteredContainer;