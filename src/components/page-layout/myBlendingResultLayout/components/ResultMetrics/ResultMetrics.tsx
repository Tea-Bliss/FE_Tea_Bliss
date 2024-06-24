'use client';
import { useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import Button from '@/components/common/Button';
import QuantityButton from '@/components/common/QuantityButton/QuantityButton';
import openToast from '@/components/common/Toast/features/openToast';
import styles from '@/components/page-layout/myBlendingResultLayout/components/ResultMetrics/ResultMetrics.module.scss';
import ROUTE from '@/constants/route';

const cn = classNames.bind(styles);

export default function ResultMetrics() {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const id = searchParams.getAll('id');
  const price = id.length * 6000;
  const randomId = Math.floor(Math.random() * 1000000);

  const handleIncreaseClick = () => {
    const updatedQuantity = currentQuantity + 1;
    setCurrentQuantity(updatedQuantity);
  };

  const handleDecreaseClick = () => {
    const updatedQuantity = currentQuantity - 1;
    setCurrentQuantity(updatedQuantity);
  };

  const handlePaymentClick = () => {
    const newProduct = {
      id: randomId,
      img: '/images/my-blending/myBlending.png',
      product: name,
      quantity: currentQuantity,
      price: price,
    };

    const updatedItems = [newProduct];

    localStorage.setItem('selectedItems', JSON.stringify(updatedItems));
    router.push(ROUTE.ORDER);
  };

  const handleCardClick = () => {
    if (!localStorage.getItem('token')) {
      router.push(ROUTE.SIGN_IN);
      return;
    }
    const newProduct = {
      id: randomId,
      img: '/images/my-blending/myBlending.png',
      product: name,
      quantity: currentQuantity,
      price: price,
    };

    const updatedItems = [newProduct];

    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    openToast('success', '장바구니에 상품을 담았습니다.');
  };

  return (
    <div className={cn('container')}>
      <div className={cn('imageWrapper')}>
        <Image src={'/images/my-blending/myBlending.png'} width={438} height={438} alt="블렌딩 티 이미지" />
        <span className={cn('overlayText')}>{name}</span>
      </div>
      <div className={cn('content')}>
        <div className={cn('productInfo')}>
          <h3 className={cn('productName')}>{name}</h3>
          <span className={cn('productPrice')}>{price.toLocaleString()}원</span>
        </div>

        <div className={cn('productDetails')}>
          <div className={cn('productDetailRow')}>
            <div className={cn('detailLabel')}>포장타입</div>
            <div className={cn('detailValue')}>종이 포장</div>
          </div>
          <div className={cn('productDetailRow')}>
            <div className={cn('detailLabel')}>중량</div>
            <div className={cn('detailValue')}>250g</div>
          </div>
          <div className={cn('productDetailRow')}>
            <div className={cn('detailLabel')}>구매수량</div>
            <QuantityButton quantity={currentQuantity} increase={handleIncreaseClick} decrease={handleDecreaseClick} />
          </div>
        </div>

        <div className={cn('totalPriceContainer')}>
          <div className={cn('totalPriceLabel')}>총 상품금액:</div>
          <div className={cn('totalPriceValue')}>
            {(price * currentQuantity).toLocaleString()}
            <span className={cn('currencyUnit')}>원</span>
          </div>
        </div>

        <div className={cn('buttonContainer')}>
          <Button shape="square" color="white" onClick={handlePaymentClick}>
            구매하기
          </Button>
          <Button shape="square" color="white" onClick={handleCardClick}>
            장바구니
          </Button>
        </div>
      </div>
    </div>
  );
}
