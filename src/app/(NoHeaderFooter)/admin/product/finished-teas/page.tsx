import { Suspense } from 'react';

import FinishedTeasPage from '@/components/page-layout/adminLayout/components/AdminProductPage/FinishedTeasPage';

export default function FinishedTeas() {
  return (
    <Suspense>
      <FinishedTeasPage />
    </Suspense>
  );
}
