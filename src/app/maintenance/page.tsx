"use client";
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function MaintenancePage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#fff', padding: '32px 16px' }}>
      <h1 style={{ fontWeight: 700, fontSize: 32, color: '#09090b', marginBottom: 32, textAlign: 'center' }}>Under Maintenance</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" onClick={() => router.push('/')} style={{ width: 'auto', minWidth: 160, padding: '12px 32px', fontSize: 16 }}>
          Back to Homepage
        </Button>
      </div>
    </div>
  );
} 