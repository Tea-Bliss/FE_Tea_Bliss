import { Suspense } from 'react';

import MyBlendingResultLayout from '@/components/page-layout/myBlendingResultLayout/MyBlendingResultLayout';

export default function Result() {
  return (
    <Suspense>
      <MyBlendingResultLayout />
    </Suspense>
  );
}
