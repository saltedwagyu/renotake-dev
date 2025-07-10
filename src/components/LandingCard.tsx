"use client";
import Button from './Button';
import { useRouter } from 'next/navigation';
import GoogleIcon from './icons/GoogleIcon';

export default function LandingCard() {
  const router = useRouter();
  return (
    <div className="card" style={{
      width: '100%',
      maxWidth: 420,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
    }}>
      <h1 className="main-title" style={{ fontWeight: 700, fontSize: 32, marginBottom: 4, color: '#18181b', textAlign: 'center' }}>
        Plan Your Dream Space
      </h1>
      <p style={{ color: '#71717a', marginBottom: 20, textAlign: 'center', fontSize: 16 }}>
        Start by creating a smart plan for your renovation project in just a few taps.
      </p>
      <Button variant="primary" onClick={() => router.push('/form')}>
        ✨ Create a Plan
      </Button>
      <div style={{
        width: '100%',
        textAlign: 'center',
        color: '#71717a',
        fontSize: 15,
        marginBottom: 16
      }}>
        Already have an Account?
      </div>
      <Button variant="secondary" onClick={() => router.push('/maintenance')}>
        <GoogleIcon /> Continue with Google
      </Button>
      <div style={{ fontSize: 13, color: '#555', marginTop: 10, textAlign: 'center' }}>
        By continuing, you agree to RenoTake’s <a href="#" style={{ color: '#059669', textDecoration: 'underline' }}>Terms of Service</a> and <a href="#" style={{ color: '#059669', textDecoration: 'underline' }}>Privacy Policy</a>
      </div>
    </div>
  );
}