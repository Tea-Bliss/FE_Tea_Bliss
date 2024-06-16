import { Suspense } from 'react';

import LooseLeafTeasPage from '@/components/page-layout/adminLayout/components/AdminProductPage/LooseLeafTeasPage';

export default function LooseLeafTeas() {
  return (
    <Suspense>
      <LooseLeafTeasPage />
    </Suspense>
  );
}
