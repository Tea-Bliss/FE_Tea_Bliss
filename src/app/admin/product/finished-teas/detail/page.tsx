import { Suspense } from 'react';

import EachFinishedTeasPage from '@/components/page-layout/adminLayout/components/AdminProductPage/FinishedTeasPage/EachFinishedTeasPage';

export default function FinishedTeasDetail() {
  return (
    <Suspense>
      <EachFinishedTeasPage />
    </Suspense>
  );
}
