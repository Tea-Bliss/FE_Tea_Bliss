'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import MyPageNav from '@/components/common/MyPageNav/MyPageNav';
import MyPageSubNav from '@/components/common/MyPageSubNav';
import SubHeader from '@/components/common/SubHeader/SubHeader';
import styles from '@/components/page-layout/myCouponLayout/myCouponLayout.module.scss';

import Coupon from './components/Coupon/Coupon';

const cn = classNames.bind(styles);

const mock = [
  {
    startDate: '2022.08.09',
    discountRate: 10,
    used: false,
    type: 'welcome' as 'welcome',
  },
  {
    startDate: '2022.08.09',
    discountRate: 10,
    used: false,
    type: 'welcome' as 'welcome',
  },
  {
    startDate: '2022.08.09',
    discountRate: 15,
    used: false,
    type: 'review' as 'review',
  },
  {
    startDate: '2022.08.09',
    discountRate: 15,
    used: false,
    type: 'review' as 'review',
  },
];

const mock1 = [
  {
    startDate: '2022.08.09',
    discountRate: 10,
    used: true,
    type: 'welcome' as 'welcome',
  },
  {
    startDate: '2022.08.09',
    discountRate: 10,
    used: true,
    type: 'welcome' as 'welcome',
  },
  {
    startDate: '2022.08.09',
    discountRate: 15,
    used: true,
    type: 'review' as 'review',
  },
  {
    startDate: '2022.08.09',
    discountRate: 15,
    used: true,
    type: 'review' as 'review',
  },
];

export default function MyCouponLayout() {
  const [state, setState] = useState('coupon');

  return (
    <>
      <SubHeader>My page</SubHeader>
      <MyPageNav />
      <MyPageSubNav.Root className={cn('root')}>
        <MyPageSubNav.Container>
          <MyPageSubNav.Box className={cn({ selected: state === 'coupon' })} onClick={() => setState('coupon')}>
            <MyPageSubNav.EnNav>Coupon</MyPageSubNav.EnNav>
            <MyPageSubNav.KoNav>내 쿠폰</MyPageSubNav.KoNav>
          </MyPageSubNav.Box>
          <MyPageSubNav.Box className={cn({ selected: state === 'usedCoupon' })} onClick={() => setState('usedCoupon')}>
            <MyPageSubNav.EnNav>Used coupon</MyPageSubNav.EnNav>
            <MyPageSubNav.KoNav className={cn('right')}>사용한 쿠폰</MyPageSubNav.KoNav>
          </MyPageSubNav.Box>
        </MyPageSubNav.Container>
      </MyPageSubNav.Root>
      <div className={cn('couponContainer')}>
        <div className={cn('couponBox')}>
          {state === 'coupon'
            ? mock.map((coupon, idx) => <Coupon data={coupon} key={idx} />)
            : mock1.map((coupon, idx) => <Coupon data={coupon} key={idx} />)}
        </div>
      </div>
    </>
  );
}
