'use client';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import QuantityButton from '@/components/common/QuantityButton/QuantityButton';
import styles from '@/components/page-layout/cartLayout/components/CartItem/CartItem.module.scss';
import { getCartItems } from '@/components/page-layout/cartLayout/types/cartApiType';
import Delete from '@/icons/close.svg';

import usePatchCartItemMutation from '../../hooks/usePatchCartItemMutation';

const cn = classNames.bind(styles);

interface CartItemProps extends getCartItems {
  openModal: (productId: number) => void;
  handleItemSelection: (id: number, price: number, quantity: number, isSelected: boolean) => void;
  isSelected: boolean;
}

export default function CartItem({
  id,
  img,
  product,
  nameEng,
  price,
  quantity,
  openModal,
  handleItemSelection,
  isSelected,
}: CartItemProps) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const { mutate } = usePatchCartItemMutation(product, currentQuantity, id);

  const handleIncreaseClick = () => {
    const updatedQuantity = currentQuantity + 1;
    setCurrentQuantity(updatedQuantity);
    mutate();
  };

  const handleDecreaseClick = () => {
    const updatedQuantity = currentQuantity - 1;
    setCurrentQuantity(updatedQuantity);
    mutate();
  };

  return (
    <li className={cn('cartItemContainer')}>
      <div className={cn('cartItem')}>
        <input
          type="checkbox"
          className={cn('cartItemCheckbox')}
          onChange={() => handleItemSelection(id, price, quantity, isSelected)}
          checked={isSelected}
        />
        <Image src={img} width={64} height={80} alt="상품 이미지" className={cn('productImage')} />
        <div className={cn('productNameWrapper')}>
          <h2 className={cn('nameEng')}>{nameEng}</h2>
          <h2 className={cn('productName')}>{product}</h2>
        </div>
      </div>
      <div className={cn('quantityContainer')}>
        <QuantityButton quantity={currentQuantity} increase={handleIncreaseClick} decrease={handleDecreaseClick} />
        <div className={cn('priceBox')}>
          <div className={cn('price')}>{price.toLocaleString()}원</div>
          <button className={cn('deleteButton')} onClick={() => openModal(id)}>
            <Delete width={16} height={16} stroke={'#bfbfbf'} />
          </button>
        </div>
      </div>
    </li>
  );
}
