import classNames from 'classnames/bind';

import styles from '@/components/page-layout/cartLayout/CartLayout.module.scss';
import CartView from '@/components/page-layout/cartLayout/components/CartView/CartView';
import CheckoutSummary from '@/components/page-layout/cartLayout/components/CheckoutSummary/CheckoutSummary';

const cn = classNames.bind(styles);

export default function cartLayout() {
  return (
    <main className={cn('container')}>
      <h2 className={cn('title')}>Cart</h2>
      <div className={cn('content')}>
        <CartView />
        <CheckoutSummary />
      </div>
    </main>
  );
}
