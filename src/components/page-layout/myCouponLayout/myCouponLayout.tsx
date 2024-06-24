'use client';

import { useState } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import MyPageNav from '@/components/common/MyPageNav/MyPageNav';
import MyPageSubNav from '@/components/common/MyPageSubNav';
import Pagination from '@/components/common/Pagenation/Pagenation';
import Skeleton from '@/components/common/Skeleton/Skeleton';
import SubHeader from '@/components/common/SubHeader/SubHeader';
import styles from '@/components/page-layout/myCouponLayout/myCouponLayout.module.scss';

import getPagenationCoupon from './apis';
import Coupon from './components/Coupon/Coupon';

const cn = classNames.bind(styles);

interface Coupon {
  id: number;
  startDate: string;
  discountRate: number;
  type: 'welcome' | 'review';
  used: number;
}

export default function MyCouponLayout() {
  const [state, setState] = useState(0);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: [page, state],
    queryFn: () => getPagenationCoupon(state, page, 4),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <SubHeader>My page</SubHeader>
      <MyPageNav />
      <MyPageSubNav.Root className={cn('root')}>
        <MyPageSubNav.Container>
          <MyPageSubNav.Box className={cn({ selected: state === 0 })} onClick={() => setState(0)}>
            <MyPageSubNav.EnNav>Coupon</MyPageSubNav.EnNav>
            <MyPageSubNav.KoNav>내 쿠폰</MyPageSubNav.KoNav>
          </MyPageSubNav.Box>
          <MyPageSubNav.Box className={cn({ selected: state === 1 })} onClick={() => setState(1)}>
            <MyPageSubNav.EnNav>Used coupon</MyPageSubNav.EnNav>
            <MyPageSubNav.KoNav className={cn('right')}>사용한 쿠폰</MyPageSubNav.KoNav>
          </MyPageSubNav.Box>
        </MyPageSubNav.Container>
      </MyPageSubNav.Root>
      <div className={cn('couponContainer')}>
        <div className={cn('couponBox')}>
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className={cn('skeleton')} />)
            : data?.data.map((coupon: Coupon) => <Coupon data={coupon} key={coupon.id} />)}
        </div>
        <Pagination currentPage={page} itemsPerPage={4} totalItems={data?.totalItems} setPage={setPage} />
      </div>
    </>
  );
}
