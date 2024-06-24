'use client';
import { useState } from 'react';

import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/orderLayout/components/PaymentMethod/PaymentMethod.module.scss';

const cn = classNames.bind(styles);

export default function PaymentMethod() {
  const [selectedPayment, setSelectedPayment] = useState('CARD');

  const handlePaymentSelection = (paymentType: 'CARD' | 'EASY_PAY') => {
    setSelectedPayment(paymentType);
  };

  return (
    <div className={cn('container')}>
      <h2 className={cn('title')}>결제 수단</h2>
      <div className={cn('paymentMethods')}>
        <span className={cn('label')}>결제수단 선택</span>
        <div className={cn('buttonContainer')}>
          <Button
            shape="square"
            color={selectedPayment === 'CARD' ? 'black' : 'white'}
            onClick={() => handlePaymentSelection('CARD')}
          >
            신용 카드
          </Button>
          <Button
            shape="square"
            color={selectedPayment === 'EASY_PAY' ? 'black' : 'white'}
            onClick={() => handlePaymentSelection('EASY_PAY')}
          >
            간편 결제
          </Button>
        </div>
      </div>
    </div>
  );
}
