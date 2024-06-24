'use client';
import { useState } from 'react';

import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import BackdropModal from '@/components/common/modal/BackdropModal/BackdropModal';
import styles from '@/components/page-layout/cartLayout/components/DeliveryAddress/DeliveryAddress.module.scss';
import AddressChange from '@/components/page-layout/myPageLayout/myInfo/components/AddressChange';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';
import Location from '@/icons/location.svg';

const cn = classNames.bind(styles);

export default function DeliveryAddress() {
  const { data } = useUserInfoQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {data && (
        <div className={cn('deliveryAddress')}>
          <div className={cn('addressHeader')}>
            <div className={cn('locationIcon')}>
              <Location />
              <h3 className={cn('addressTitle')}>배송지</h3>
            </div>
            <span className={cn('addressDetails')}>{data.address}</span>
          </div>
          <Button shape="square" color="white" onClick={() => setIsModalOpen(!isModalOpen)}>
            배송지 변경
          </Button>
        </div>
      )}
      <BackdropModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <div className={cn('addressChange')}>
          <AddressChange />
        </div>
      </BackdropModal>
    </>
  );
}
