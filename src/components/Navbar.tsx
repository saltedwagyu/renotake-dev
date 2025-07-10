"use client";
import Image from 'next/image';

export default function Navbar() {
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
      borderBottom: '1px solid #f0f0f0',
      background: '#fff',
    }}>
      <Image
        src="/logo.svg"
        alt="RenoTake Logo"
        height={24} 
        width={0}
        style={{ height: 24, width: 'auto', display: 'block' }} 
        priority
      />
      <style jsx>{`
        @media (max-width: 600px) {
          nav {
            padding: 20px 20px !important;
          }
          :global(nav img) {
            height: 24px !important;
            width: auto !important;
          }
        }
      `}</style>
    </nav>
  );
}