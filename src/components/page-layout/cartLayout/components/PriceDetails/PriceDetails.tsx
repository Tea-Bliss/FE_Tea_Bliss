import classNames from 'classnames/bind';

import styles from '@/components/page-layout/cartLayout/components/PriceDetails/PriceDetails.module.scss';

import { CheckoutSummaryProps } from '../CheckoutSummary/CheckoutSummary';

const cn = classNames.bind(styles);

interface PriceDetailsProps extends CheckoutSummaryProps {}

export default function PriceDetails({ selectedItems }: PriceDetailsProps) {
  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = totalPrice >= 50000 ? 0 : 3000;
  const totalAmount = totalPrice + deliveryFee;
  const additionalOrderForFreeShipping = 50000 - totalPrice;

  return (
    <div className={cn('container')}>
      <div className={cn('item')}>
        <span className={cn('label')}>상품금액</span>
        <span className={cn('amount')}>
          {totalPrice.toLocaleString()}
          <span className={cn('currency')}>원</span>
        </span>
      </div>

      <div className={cn('item')}>
        <span className={cn('label')}>배송비</span>
        <span className={cn('amount')}>
          {deliveryFee.toLocaleString()}
          <span className={cn('currency')}>원</span>
        </span>
      </div>

      {totalPrice <= 50000 && (
        <p className={cn('additionalInfo')}>
          {additionalOrderForFreeShipping.toLocaleString()}원 추가주문 시, <strong>무료배송</strong>
        </p>
      )}

      <div className={cn('item', 'total-item')}>
        <span className={cn('label')}>결제예정금액</span>
        <span>
          <strong className={cn('total-amount')}> {totalAmount.toLocaleString()}</strong>
          <span className={cn('currency')}>원</span>
        </span>
      </div>
    </div>
  );
}
