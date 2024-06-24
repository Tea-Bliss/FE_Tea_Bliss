'use client';
import PortOne, { PaymentRequest } from '@portone/browser-sdk/v2';
import classNames from 'classnames/bind';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import { SelectedItemsType } from '@/components/page-layout/cartLayout/components/CartView/CartView';
import styles from '@/components/page-layout/orderLayout/components/PaymentSummary/PaymentSummary.module.scss';
import ROUTE from '@/constants/route';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';

import usePaymentMutation from '../../hooks/usePaymentMutation';

const cn = classNames.bind(styles);

interface PaymentSummaryProps {
  selectedPayment: 'CARD' | 'EASY_PAY';
}
export default function PaymentSummary({ selectedPayment }: PaymentSummaryProps) {
  const router = useRouter();
  const { data } = useUserInfoQuery();
  const { mutate } = usePaymentMutation();
  const selectedItems: SelectedItemsType[] =
    typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('selectedItems')!) : [];
  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = totalPrice >= 50000 ? 0 : 3000;
  const totalAmount = totalPrice + deliveryFee;

  const transformedItems = selectedItems.map((item) => ({
    id: item.id.toString(),
    name: item.product,
    amount: item.price,
    quantity: item.quantity,
  }));

  const generateOrderName = () => {
    if (transformedItems.length === 1) {
      return transformedItems[0].name;
    } else {
      const firstItemName = transformedItems[0].name;
      const additionalItemsCount = transformedItems.length - 1;
      return `${firstItemName} 외 ${additionalItemsCount}개`;
    }
  };

  async function requestPayment() {
    let requestConfig: any = {
      storeId: 'store-dbd78455-7f6f-46c2-9523-9ceb7b9a1e46',
      paymentId: `payment-${crypto.randomUUID()}`,
      orderName: generateOrderName(),
      totalAmount: totalAmount,
      currency: 'CURRENCY_KRW',
      channelKey: 'channel-key-430e41d7-5a30-4502-ab2e-f65627dccb14',
      payMethod: selectedPayment,
      customer: {
        customerId: data?.data.data.email,
        fullName: data?.data.data.nickname,
        email: data?.data.data.email,
        address: { addressLine1: data?.data.data.address!, addressLine2: '' },
        zipcode: '12345',
      },
      products: transformedItems,
      shippingAddress: { addressLine1: data?.data.data.address!, addressLine2: '' },
    };

    if (selectedPayment === 'EASY_PAY') {
      requestConfig.easyPay = { easyPayProvider: 'EASY_PAY_PROVIDER_TOSSPAY' };
    }

    const response = await PortOne.requestPayment(requestConfig);

    if (response?.code != null) {
      if (response.code === 'FAILURE_TYPE_PG') {
        alert('결제를 취소했습니다');
      } else {
        alert(response.message);
      }
      localStorage.removeItem('selectedItems');
      router.push(ROUTE.CART);
      return;
    }

    mutate(response?.paymentId!);
  }

  return (
    <>
      <div className={cn('container')}>
        <div className={cn('item')}>
          <span className={cn('label')}>주문금액</span>
          <span className={cn('amount')}>
            {totalPrice.toLocaleString()}
            <span className={cn('currency')}>원</span>
          </span>
        </div>

        <div className={cn('item')}>
          <span className={cn('label')}>배송비</span>
          <span className={cn('amount')}>
            {deliveryFee !== 0 && '+'}
            {deliveryFee.toLocaleString()}
            <span className={cn('currency')}>원</span>
          </span>
        </div>

        <div className={cn('item', 'total-item')}>
          <span className={cn('label')}>최종결제금액</span>
          <span>
            <strong className={cn('total-amount')}> {totalAmount.toLocaleString()}</strong>
            <span className={cn('currency')}>원</span>
          </span>
        </div>
      </div>
      <Button shape="square" color="black" onClick={requestPayment}>
        {totalAmount.toLocaleString()}원 결제하기
      </Button>
    </>
  );
}
