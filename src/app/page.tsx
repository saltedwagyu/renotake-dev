"use client";
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import LandingCard from '@/components/LandingCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className + ' responsive-landing'} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="main-content" style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        
        <div className="left-side" style={{
          flex: 1,
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px'
        }}>
          <LandingCard />
        </div>
        
        <div className="right-side" style={{ flex: 1, background: '#0d9488', minHeight: 0 }} />
      </div>
      <style jsx>{`
        .responsive-landing {
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
          display: flex;
          min-height: 0;
        }
        @media (max-width: 768px) {
          .main-content {
            flex-direction: column-reverse;
          }
          .left-side {
            width: 100%;
            flex: unset !important;
            min-height: unset;
            padding: 40px 16px 24px 16px !important;
            display: block !important;
            justify-content: flex-start !important;
            align-items: stretch !important;
          }
          .right-side {
            min-height: 0;
            flex: 1;
            height: auto !important;
          }
        }
        @media (max-width: 480px) {
          .left-side {
            padding: 20px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
