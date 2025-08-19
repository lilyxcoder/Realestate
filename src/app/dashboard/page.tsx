
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard/deposit');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-15rem)]">
      <p>Redirecting to your dashboard...</p>
    </div>
  );
}
