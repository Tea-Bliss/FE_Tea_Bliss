'use client';
import classNames from 'classnames/bind';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/cartLayout/components/CheckoutSummary/CheckoutSummary.module.scss';
import DeliveryAddress from '@/components/page-layout/cartLayout/components/DeliveryAddress/DeliveryAddress';
import PriceDetails from '@/components/page-layout/cartLayout/components/PriceDetails/PriceDetails';
import ROUTE from '@/constants/route';

const cn = classNames.bind(styles);

export interface CheckoutSummaryProps {
  selectedItems: { id: number; price: number; quantity: number }[];
}

export default function CheckoutSummary({ selectedItems }: CheckoutSummaryProps) {
  const router = useRouter();

  const handlePaymentClick = () => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    router.push(ROUTE.ORDER);
  };

  return (
    <section className={cn('container')}>
      <div className={cn('wrapper')}>
        <div>
          <DeliveryAddress />
          <PriceDetails selectedItems={selectedItems} />
        </div>
        <Button
          shape="square"
          color="black"
          disabled={selectedItems.length > 0 ? false : true}
          onClick={handlePaymentClick}
        >
          {selectedItems.length > 0 ? '주문하기' : '상품을 선택해주세요'}
        </Button>
      </div>
    </section>
  );
}
