'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  SquaresFour, 
  Sparkle, 
  Files, 
  Package, 
  CalendarDots, 
  Wallet
} from '@phosphor-icons/react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const router = useRouter();

  const navigationItems = [
    { icon: SquaresFour, label: 'Dashboard', path: '/dashboard' },
    { icon: Sparkle, label: 'Ask Reno', path: '/ask-reno' },
    { icon: Files, label: 'My Tasks', path: '/tasks' },
    { icon: Package, label: 'Renovation Items', path: '/renovation-items' },
    { icon: CalendarDots, label: 'Timeline', path: '/timeline' },
    { icon: Wallet, label: 'Budget', path: '/budget' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden lg:flex fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex-col overflow-y-auto ${className}`}>
        {/* Navigation Section - Desktop */}
        <div className="flex-1 px-4 py-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Navigation</h3>
          <nav className="space-y-1">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => router.push(item.path)}
                  className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150 group"
                >
                  <IconComponent size={20} className="text-gray-500 group-hover:text-gray-700" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        
        {/* Footer Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            RenoTake v1.0
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-center w-full">
          <div className="card w-full md:w-1/2 lg:w-1/2">
            <div className="bg-white rounded-lg p-2 mt-2 w-full">
              <nav className="flex justify-around items-center">
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => router.push(item.path)}
                      className="flex flex-col items-center justify-center p-2 min-w-0 flex-1 text-gray-600 hover:text-gray-900 transition-colors duration-150"
                    >
                      <IconComponent size={24} className="mb-1" />
                      <span className="text-xs font-medium truncate w-full text-center">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <style jsx>{`
          .card {
            padding-bottom: calc(1rem + env(safe-area-inset-bottom));
          }
        `}</style>
      </div>
    </>
  );
};

export default Sidebar;
