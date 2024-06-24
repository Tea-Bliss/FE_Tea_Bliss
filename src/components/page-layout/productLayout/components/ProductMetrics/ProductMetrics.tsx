'use client';
import { useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import QuantityButton from '@/components/common/QuantityButton/QuantityButton';
import useAddCartItemMutation from '@/components/page-layout/cartLayout/hooks/useAddCartItemMutation';
import styles from '@/components/page-layout/productLayout/components/ProductMetrics/ProductMetrics.module.scss';
import ROUTE from '@/constants/route';

import useGetTeaDetailQuery from '../../hooks/useGetTeaDetailQuery';

const cn = classNames.bind(styles);

export default function ProductMetrics() {
  const { id }: { id: string } = useParams();
  const router = useRouter();
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const { data } = useGetTeaDetailQuery(id);
  const { mutate } = useAddCartItemMutation(data?.data.name, currentQuantity);

  const handleIncreaseClick = () => {
    const updatedQuantity = currentQuantity + 1;
    setCurrentQuantity(updatedQuantity);
  };

  const handleDecreaseClick = () => {
    const updatedQuantity = currentQuantity - 1;
    setCurrentQuantity(updatedQuantity);
  };

  const handleCardClick = () => {
    if (!localStorage.getItem('token')) {
      router.push(ROUTE.SIGN_IN);
      return;
    }
    mutate();
  };

  const handlePaymentClick = () => {
    const newProduct = {
      id: data?.data.id,
      img: data?.data.img,
      product: data?.data.name,
      nameEng: data?.data.nameEng,
      quantity: currentQuantity,
      price: data?.data.price,
    };

    const updatedItems = [newProduct];

    localStorage.setItem('selectedItems', JSON.stringify(updatedItems));
    router.push(ROUTE.ORDER);
  };

  return (
    <div className={cn('container')}>
      <Image src={data?.data.img!} width={438} height={438} alt="제품 이미지" />
      <div className={cn('content')}>
        <div className={cn('productInfo')}>
          <h3 className={cn('productName')}>{data?.data.name}</h3>
          <span className={cn('productPrice')}>{data?.data.price.toLocaleString()}원</span>
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
            {(data?.data.price! * currentQuantity).toLocaleString()}
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
