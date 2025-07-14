"use client";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { CaretUpDown, Bell, User, Question, SignOut } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { usePlan } from '@/contexts/PlanContext';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const { planName, setPlanName, setPlanData } = usePlan();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isPublicPage = pathname === '/' || pathname === '/form';
  const showMyPlan = !isPublicPage;
  const showProfileSection = !isPublicPage;

  // Load plan from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPlan = localStorage.getItem('renovationPlan');
      if (savedPlan) {
        try {
          const parsedPlan = JSON.parse(savedPlan);
          if (parsedPlan.planName && !planName) {
            setPlanName(parsedPlan.planName);
            setPlanData(parsedPlan.planData);
          }
        } catch (error) {
          console.error('Error parsing saved plan:', error);
        }
      }
    }
  }, [planName, setPlanName, setPlanData]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    setShowProfileDropdown(false);
    setShowSignOutModal(true);
  };

  const confirmSignOut = async () => {
    setShowSignOutModal(false);
    try {
      await logout();
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  const cancelSignOut = () => {
    setShowSignOutModal(false);
  };

  // Get user display name and email
  const displayName = user?.displayName || 'User';
  const email = user?.email || 'user@example.com';
  const initials = displayName.split(' ').map(name => name[0]).join('').toUpperCase();
  
  // Get plan name initials for avatar
  const planInitials = planName ? planName.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2) : 'R';
  const displayPlanName = planName || 'Room Refresh';

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100%',
        padding: '12px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f0f0f0',
        background: '#ffffff',
        height: '64px',
        margin: 0,
      }}>
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="RenoTake Logo"
            height={24} 
            width={0}
            style={{ height: 24, width: 'auto', display: 'block' }} 
            priority
            className="logo-responsive"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          {showMyPlan && (
            <>
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors duration-150">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-xs">{planInitials}</span>
                </div>
                <span className="text-sm font-medium text-gray-900 hidden sm:block">{displayPlanName}</span>
                <CaretUpDown size={12} className="text-gray-400" />
              </div>
              
              <div className="w-px h-6 bg-gray-300"></div>
            </>
          )}
          
          {showProfileSection && (
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-150">
                <Bell size={14} className="text-gray-600" />
              </div>
              
              <div className="relative" ref={dropdownRef}>
                <div 
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors duration-150"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                >
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-semibold text-xs">{initials}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 hidden sm:block">{displayName}</span>
                </div>
                
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-gray-200 py-1 z-50">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{displayName}</p>
                      <p className="text-xs text-gray-500">{email}</p>
                    </div>
                    
                    <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                      <User size={16} className="mr-3 text-gray-400" />
                      My Profile
                    </button>
                    
                    <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                      <Question size={16} className="mr-3 text-gray-400" />
                      Help
                    </button>
                    
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <button 
                        onClick={handleSignOut}
                        className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                      >
                        <SignOut size={16} className="mr-3 text-red-500" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
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

      {/* Sign Out Confirmation Modal */}
      {showSignOutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirm Sign Out</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to sign out?</p>
            <div className="flex space-x-3">
              <button
                onClick={cancelSignOut}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-150"
              >
                Cancel
              </button>
              <button
                onClick={confirmSignOut}
                className="flex-1 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-150"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}