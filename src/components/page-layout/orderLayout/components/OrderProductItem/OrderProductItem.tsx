'use client';
import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/orderLayout/components/OrderProductItem/OrderProductItem.module.scss';

const cn = classNames.bind(styles);

interface OrderProductItemProps {
  img: string;
  nameEng: string;
  product: string;
  price: number;
  quantity: number;
}
export default function OrderProductItem({ img, nameEng, product, price, quantity }: OrderProductItemProps) {
  return (
    <li className={cn('cartItemContainer')}>
      <div className={cn('cartItem')}>
        <Image src={img} width={64} height={80} alt="상품 이미지" className={cn('productImage')} />
        <div className={cn('productNameWrapper')}>
          <h2 className={cn('nameEng')}>{nameEng}</h2>
          <h2 className={cn('productName')}>{product}</h2>
        </div>
      </div>
      <div className={cn('quantityContainer')}>
        <div className={cn('quantity')}>{quantity}개</div>
        <div className={cn('priceBox')}>
          <div className={cn('price')}>{price.toLocaleString()}원</div>
        </div>
      </div>
    </li>
  );
}
