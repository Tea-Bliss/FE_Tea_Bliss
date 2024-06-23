import classNames from 'classnames/bind';

import styles from '@/components/page-layout/cartLayout/components/PriceDetails/PriceDetails.module.scss';

const cn = classNames.bind(styles);

export default function PriceDetails() {
  return (
    <div className={cn('container')}>
      <div className={cn('item')}>
        <span className={cn('label')}>상품금액</span>
        <span className={cn('amount')}>
          13,000<span className={cn('currency')}>원</span>
        </span>
      </div>

      <div className={cn('item')}>
        <span className={cn('label')}>배송비</span>
        <span className={cn('amount')}>
          +3,000<span className={cn('currency')}>원</span>
        </span>
      </div>

      <p className={cn('additionalInfo')}>
        2,200원 추가주문 시, <strong>무료배송</strong>
      </p>

      <div className={cn('item', 'total-item')}>
        <span className={cn('label')}>결제예정금액</span>
        <span>
          <strong className={cn('total-amount')}>40,800</strong>
          <span className={cn('currency')}>원</span>
        </span>
      </div>
    </div>
  );
}
