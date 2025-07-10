"use client";
import Button from '@/components/Button';
import CenteredContainer from '@/components/CenteredContainer';
import { useRouter } from 'next/navigation';

export default function MaintenancePage() {
  const router = useRouter();
  return (
    <CenteredContainer title="Under Maintenance">
      <Button 
        variant="primary" 
        onClick={() => router.push('/')} 
        style={{ width: 'auto', minWidth: 160, padding: '12px 32px', fontSize: 16 }}
      >
        Back to Homepage
      </Button>
    </CenteredContainer>
  );
}