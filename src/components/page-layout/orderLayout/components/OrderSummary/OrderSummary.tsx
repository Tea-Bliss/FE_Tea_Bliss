'use client';
import { useState } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/orderLayout/components/OrderSummary/OrderSummary.module.scss';

import OrdererInfo from '../OrdererInfo/OrdererInfo';
import OrderProduct from '../OrderProduct/OrderProduct';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import PaymentSummary from '../PaymentSummary/PaymentSummary';

const cn = classNames.bind(styles);

export default function OrderSummary() {
  const [selectedPayment, setSelectedPayment] = useState<'CARD' | 'EASY_PAY'>('CARD');

  return (
    <div className={cn('container')}>
      <div className={cn('detailsContainer')}>
        <OrderProduct />
        <OrdererInfo />
        <PaymentMethod selectedPayment={selectedPayment} onPaymentSelect={setSelectedPayment} />
      </div>
      <div className={cn('summaryContainer')}>
        <h3 className={cn('summaryTitle')}>결제 금액</h3>
        <PaymentSummary selectedPayment={selectedPayment} />
      </div>
    </div>
  );
}
