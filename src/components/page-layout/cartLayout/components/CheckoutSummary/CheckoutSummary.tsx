import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/CartLayout/components/CheckoutSummary/CheckoutSummary.module.scss';
import DeliveryAddress from '@/components/page-layout/cartLayout/components/DeliveryAddress/DeliveryAddress';
import PriceDetails from '@/components/page-layout/cartLayout/components/PriceDetails/PriceDetails';

const cn = classNames.bind(styles);
export default function CheckoutSummary() {
  return (
    <section className={cn('container')}>
      <div className={cn('wrapper')}>
        <div>
          <DeliveryAddress />
          <PriceDetails />
        </div>
        <Button shape="square" color="red">
          주문하기
        </Button>
      </div>
    </section>
  );
}
