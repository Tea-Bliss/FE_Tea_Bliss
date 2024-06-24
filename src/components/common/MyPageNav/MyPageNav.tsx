'use client';

import classNames from 'classnames/bind';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/components/common/MyPageNav/MyPageNav.module.scss';
import ROUTE from '@/constants/route';

const cn = classNames.bind(styles);

export default function MyPageNav() {
  const pathname = usePathname();

  const lastPathname = pathname.split('/')[2];

  return (
    <nav className={cn('nav')}>
      <div className={cn('navBox')}>
        <Link className={cn({ selected: lastPathname === 'my-info' })} href={ROUTE.MY_PAGE_MY_INFO}>
          내정보
        </Link>
        <Link className={cn({ selected: lastPathname === 'order-subscribe' })} href={ROUTE.MY_PAGE_ORDER_SUBSCRIBE}>
          주문/구독관리
        </Link>
        <Link className={cn({ selected: lastPathname === 'save-list' })} href={ROUTE.MY_PAGE_SAVE_LIST}>
          찜목록
        </Link>
        <Link className={cn({ selected: lastPathname === 'my-review' })} href={ROUTE.MY_PAGE_MY_REVIEW}>
          내 리뷰
        </Link>
        <Link className={cn({ selected: lastPathname === 'my-coupon' })} href={ROUTE.MY_PAGE_MY_COUPON}>
          내 쿠폰
        </Link>
      </div>
    </nav>
  );
}
