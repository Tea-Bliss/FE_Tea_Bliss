import { Suspense } from 'react';

import ProductListLayout from '@/components/page-layout/productListLayout/productListLayout';

export default function ProductList() {
  return (
    <Suspense>
      <ProductListLayout />
    </Suspense>
  );
}
