'use client';
import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/CartLayout/components/DeliveryAddress/DeliveryAddress.module.scss';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';
import Location from '@/icons/location.svg';

const cn = classNames.bind(styles);

export default function DeliveryAddress() {
  const { data } = useUserInfoQuery();
  return (
    data && (
      <div className={cn('deliveryAddress')}>
        <div className={cn('addressHeader')}>
          <div className={cn('locationIcon')}>
            <Location />
            <h3 className={cn('addressTitle')}>배송지</h3>
          </div>
          <span className={cn('addressDetails')}>{data.address}</span>
        </div>
        <Button shape="square" color="white">
          배송지 변경
        </Button>
      </div>
    )
  );
}
