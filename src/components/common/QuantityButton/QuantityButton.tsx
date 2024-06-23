'use client';

import classNames from 'classnames/bind';

import styles from '@/components/common/QuantityButton/QuantityButton.module.scss';
import { getCartItems } from '@/components/page-layout/cartLayout/types/cartApiType';
import Minus from '@/icons/minus.svg';
import Plus from '@/icons/plus.svg';

const cn = classNames.bind(styles);

interface QuantityButton extends Pick<getCartItems, 'quantity'> {}

export default function QuantityButton({ quantity }: QuantityButton) {
  return (
    <div className={cn('quantity')}>
      <button>
        <Minus />
      </button>
      <div className={cn('quantityNumber')}>{quantity}</div>
      <button>
        <Plus />
      </button>
    </div>
  );
}
