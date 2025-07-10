"use client";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CaretUpDown, Bell } from '@phosphor-icons/react';

export default function Navbar() {
  const pathname = usePathname();
  
  const showMyPlan = ![
    '/',           
    '/form'        
  ].includes(pathname);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      width: '100%',
      padding: '20px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #f0f0f0',
      background: '#ffffff',
    }}>
      <div className="flex items-center space-x-4">
        <Image
          src="/logo.svg"
          alt="RenoTake Logo"
          height={24} 
          width={0}
          style={{ height: 24, width: 'auto', display: 'block' }} 
          priority
          className="logo-responsive"
        />
        
        {showMyPlan && (
          <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors duration-150">
            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-teal-600 font-semibold text-xs">R</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-gray-900">Room Refresh</span>
              <CaretUpDown size={14} className="text-gray-400" />
            </div>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-150">
          <Bell size={14} className="text-gray-600" />
        </div>
        
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
            <span className="text-teal-600 font-semibold text-xs">S</span>
          </div>
          <span className="text-sm font-medium text-gray-900 hidden sm:block">SingaByte</span>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 600px) {
          nav {
            padding: 15px 20px !important;
          }
          :global(.logo-responsive) {
            height: 20px !important;
            width: auto !important;
          }
        }
        @media (max-width: 480px) {
          nav {
            padding: 12px 16px !important;
          }
          :global(.logo-responsive) {
            height: 18px !important;
            width: auto !important;
          }
          .flex.items-center.space-x-2 {
            padding: 6px 10px !important;
          }
          .flex.items-center.space-x-2 span {
            font-size: 11px !important;
          }
        }
      `}</style>
    </nav>
  );
}