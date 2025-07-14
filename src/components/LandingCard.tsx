"use client";
import Button from './Button';
import { useRouter } from 'next/navigation';
import GoogleIcon from './icons/GoogleIcon';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

export default function LandingCard() {
  const router = useRouter();
  const { signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error('Failed to sign in:', error);
      // Tampilkan error message ke user jika diperlukan
      alert('Failed to sign in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
      <Button 
        variant="secondary" 
        onClick={handleGoogleSignIn}
        style={{ opacity: isLoading ? 0.7 : 1 }}
      >
        <GoogleIcon /> {isLoading ? 'Signing in...' : 'Continue with Google'}
      </Button>
      <div style={{ fontSize: 13, color: '#555', marginTop: 10, textAlign: 'center' }}>
        By continuing, you agree to RenoTake's <a href="#" style={{ color: '#059669', textDecoration: 'underline' }}>Terms of Service</a> and <a href="#" style={{ color: '#059669', textDecoration: 'underline' }}>Privacy Policy</a>
      </div>
    </div>
  );
}