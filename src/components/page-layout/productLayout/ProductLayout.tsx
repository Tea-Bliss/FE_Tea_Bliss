import classNames from 'classnames/bind';

import ProductDetail from '@/components/page-layout/productLayout/components/ProductDetail/ProductDetail';
import ProductMetrics from '@/components/page-layout/productLayout/components/ProductMetrics/ProductMetrics';
import styles from '@/components/page-layout/productLayout/ProductLayout.module.scss';

const cn = classNames.bind(styles);

export default function ProductLayout() {
  return (
    <main className={cn('container')}>
      <h2 className={cn('title')}>Product</h2>
      <ProductMetrics />
      <ProductDetail />
    </main>
  );
}
