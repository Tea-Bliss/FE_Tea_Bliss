import { Suspense } from 'react';

import EachLooseLeafTeasPage from '@/components/page-layout/adminLayout/components/AdminProductPage/LooseLeafTeasPage/EachLooseLeafTeasPage';

export default function LooseLeafTeasDetail() {
  return (
    <Suspense>
      <EachLooseLeafTeasPage />
    </Suspense>
  );
}
