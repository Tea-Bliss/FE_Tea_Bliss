import { Suspense } from 'react';

import EachCustomerPage from '@/components/page-layout/adminLayout/components/AdminCustomerPage/EachCustomerPage';

export default function customerDetail() {
  return (
    <Suspense>
      <EachCustomerPage />
    </Suspense>
  );
}
