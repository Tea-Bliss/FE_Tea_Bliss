'use client';
import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import { SelectedItemsType } from '@/components/page-layout/cartLayout/components/CartView/CartView';
import styles from '@/components/page-layout/orderLayout/components/PaymentSummary/PaymentSummary.module.scss';

const cn = classNames.bind(styles);

export default function PaymentSummary() {
  const selectedItems: SelectedItemsType[] = JSON.parse(localStorage.getItem('selectedItems')!);
  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = totalPrice >= 50000 ? 0 : 3000;
  const totalAmount = totalPrice + deliveryFee;

  return (
    <>
      <div className={cn('container')}>
        <div className={cn('item')}>
          <span className={cn('label')}>주문금액</span>
          <span className={cn('amount')}>
            {totalPrice.toLocaleString()}
            <span className={cn('currency')}>원</span>
          </span>
        </div>

        <div className={cn('item')}>
          <span className={cn('label')}>배송비</span>
          <span className={cn('amount')}>
            {deliveryFee !== 0 && '+'}
            {deliveryFee.toLocaleString()}
            <span className={cn('currency')}>원</span>
          </span>
        </div>

        <div className={cn('item', 'total-item')}>
          <span className={cn('label')}>최종결제금액</span>
          <span>
            <strong className={cn('total-amount')}> {totalAmount.toLocaleString()}</strong>
            <span className={cn('currency')}>원</span>
          </span>
        </div>
      </div>
      <Button shape="square" color="black">
        {totalAmount.toLocaleString()}원 결제하기
      </Button>
    </>
  );
}
