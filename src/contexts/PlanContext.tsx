"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PlanContextType {
  planName: string;
  setPlanName: (name: string) => void;
  planData: any;
  setPlanData: (data: any) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
};

interface PlanProviderProps {
  children: ReactNode;
}

export const PlanProvider: React.FC<PlanProviderProps> = ({ children }) => {
  const [planName, setPlanName] = useState<string>('');
  const [planData, setPlanData] = useState<any>(null);

  const value = {
    planName,
    setPlanName,
    planData,
    setPlanData,
  };

  return (
    <PlanContext.Provider value={value}>
      {children}
    </PlanContext.Provider>
  );
};