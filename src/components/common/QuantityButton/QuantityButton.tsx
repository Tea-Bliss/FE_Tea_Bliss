'use client';

import classNames from 'classnames/bind';

import styles from '@/components/common/QuantityButton/QuantityButton.module.scss';
import { getCartItems } from '@/components/page-layout/cartLayout/types/cartApiType';
import Minus from '@/icons/minus.svg';
import Plus from '@/icons/plusIcon.svg';

const cn = classNames.bind(styles);

interface QuantityButton extends Pick<getCartItems, 'quantity'> {
  increase: () => void;
  decrease: () => void;
}

export default function QuantityButton({ quantity, increase, decrease }: QuantityButton) {
  return (
    <div className={cn('quantity')}>
      <button onClick={decrease} disabled={quantity === 1 ? true : false}>
        <Minus stroke={quantity === 1 ? '#BFBFBF' : '#181717'} />
      </button>
      <div className={cn('quantityNumber')}>{quantity}</div>
      <button onClick={increase}>
        <Plus />
      </button>
    </div>
  );
}
