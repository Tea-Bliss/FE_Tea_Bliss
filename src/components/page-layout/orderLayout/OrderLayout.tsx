import classNames from 'classnames/bind';

import OrderSummary from '@/components/page-layout/orderLayout/components/OrderSummary/OrderSummary';
import styles from '@/components/page-layout/orderLayout/OrderLayout.module.scss';

const cn = classNames.bind(styles);

export default function OrderLayout() {
  return (
    <main className={cn('container')}>
      <h2 className={cn('title')}>Order</h2>
      <OrderSummary />
    </main>
  );
}
