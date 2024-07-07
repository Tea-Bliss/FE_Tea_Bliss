import { Suspense } from 'react';

import OrderLayout from '@/components/page-layout/orderLayout/OrderLayout';

export default function Order() {
  return (
    <Suspense>
      <OrderLayout />
    </Suspense>
  );
}
