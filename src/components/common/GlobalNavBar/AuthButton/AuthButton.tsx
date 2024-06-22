'use client';
import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/components/common/GlobalNavBar/AuthButton/AuthButton.module.scss';
import Profile from '@/components/common/GlobalNavBar/AuthButton/Profile';
import ROUTE from '@/constants/route';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';
import Cart from '@/icons/cart.svg';

const cn = classNames.bind(styles);

export default function AuthButton() {
  const { data, isLoading } = useUserInfoQuery();

  if (isLoading) return <div className={cn('authButton')}>...Loading</div>;

  return (
    <div className={cn('authButton')}>
      <div className={cn('cartWrapper')}>
        <Link href={ROUTE.CART}>
          <Cart width={24} height={24} />
          <span className={cn('cartItemCount')}>1</span>
        </Link>
      </div>
      {data ? (
        <Profile />
      ) : (
        <div className={cn('authLinkWrapper')}>
          <Link className={cn('authLink')} href={ROUTE.SIGN_IN}>
            로그인
          </Link>
          <span className={cn('authSeparator')} />
          <Link className={cn('authLink')} href={ROUTE.SIGN_UP}>
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
}
