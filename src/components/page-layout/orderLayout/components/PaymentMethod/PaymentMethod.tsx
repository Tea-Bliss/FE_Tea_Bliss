'use client';
import { Dispatch, SetStateAction } from 'react';

import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/orderLayout/components/PaymentMethod/PaymentMethod.module.scss';

const cn = classNames.bind(styles);

interface PaymentMethodProps {
  selectedPayment: 'CARD' | 'EASY_PAY';
  onPaymentSelect: Dispatch<SetStateAction<'CARD' | 'EASY_PAY'>>;
}

export default function PaymentMethod({ selectedPayment, onPaymentSelect }: PaymentMethodProps) {
  return (
    <div className={cn('container')}>
      <h2 className={cn('title')}>결제 수단</h2>
      <div className={cn('paymentMethods')}>
        <span className={cn('label')}>결제수단 선택</span>
        <div className={cn('buttonContainer')}>
          <Button
            shape="square"
            color={selectedPayment === 'CARD' ? 'black' : 'white'}
            onClick={() => onPaymentSelect('CARD')}
          >
            신용 카드
          </Button>
          <Button
            shape="square"
            color={selectedPayment === 'EASY_PAY' ? 'black' : 'white'}
            onClick={() => onPaymentSelect('EASY_PAY')}
          >
            간편 결제
          </Button>
        </div>
      </div>
    </div>
  );
}
