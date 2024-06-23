'use client';
import classNames from 'classnames/bind';

import Image from 'next/image';

import QuantityButton from '@/components/common/QuantityButton/QuantityButton';
import styles from '@/components/page-layout/cartLayout/components/CartItem/CartItem.module.scss';
import { getCartItems } from '@/components/page-layout/cartLayout/types/cartApiType';
import Delete from '@/icons/close.svg';
import { removeCartItem } from '@/lib/cartActions';

const cn = classNames.bind(styles);

interface CartItemProps extends getCartItems {
  openModal: () => void;
}

export default function CartItem({ img, name, nameEng, price, quantity, openModal }: CartItemProps) {
  return (
    <li className={cn('cartItemContainer')}>
      <div className={cn('cartItem')}>
        <input type="checkbox" className={cn('cartItemCheckbox')} />
        <Image src={img} width={64} height={80} alt="상품 이미지" className={cn('productImage')} />
        <h2 className={cn('productName')}>{name}</h2>
      </div>
      <div className={cn('quantityContainer')}>
        <QuantityButton quantity={quantity} />
        <div className={cn('priceBox')}>
          <div className={cn('price')}>{price.toLocaleString()}원</div>
          <button className={cn('deleteButton')} onClick={openModal}>
            <Delete width={16} height={16} stroke={'#bfbfbf'} />
          </button>
        </div>
      </div>
    </li>
  );
}
