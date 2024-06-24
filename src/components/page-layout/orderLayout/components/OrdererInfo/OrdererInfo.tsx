'use client';
import classNames from 'classnames/bind';

import styles from '@/components/page-layout/orderLayout/components/OrdererInfo/OrdererInfo.module.scss';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';

const cn = classNames.bind(styles);

export default function OrdererInfo() {
  const { data } = useUserInfoQuery();
  return (
    <div className={cn('container')}>
      <h2 className={cn('title')}>주문자 정보</h2>
      <div className={cn('details')}>
        <div className={cn('detail')}>
          <span className={cn('label')}>보내는 분</span>
          <div className={cn('value')}>{data?.data.data.nickname}</div>
        </div>
        <div className={cn('detail')}>
          <span className={cn('label')}>이메일</span>
          <div className={cn('value')}>{data?.data.data.email}</div>
        </div>
        <div className={cn('detail')}>
          <span className={cn('label')}>배송지</span>
          <div className={cn('value')}>{data?.data.data.address}</div>
        </div>
      </div>
    </div>
  );
}
