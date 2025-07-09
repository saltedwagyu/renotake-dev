"use client";
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={{
      width: '100%',
      padding: '8px 40px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #f0f0f0',
      background: '#fff',
    }}>
      <Image
        src="/logo.svg"
        alt="RenoTake Logo"
        height={32}
        width={0}
        style={{ height: 32, width: 'auto', display: 'block' }}
        priority
      />
      <style jsx>{`
        @media (max-width: 600px) {
          nav {
            padding: 8px 16px !important;
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