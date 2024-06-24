'use client';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/components/common/GlobalNavBar/AuthButton/AuthButton.module.scss';
import Profile from '@/components/common/GlobalNavBar/AuthButton/Profile';
import { useCartItemQuery } from '@/components/page-layout/cartLayout/hooks/useCartItemQuery';
import { getCartItems } from '@/components/page-layout/cartLayout/types/cartApiType';
import ROUTE from '@/constants/route';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';
import Cart from '@/icons/cart.svg';

const cn = classNames.bind(styles);

export default function AuthButton() {
  const [cartItems, setCartItems] = useState<getCartItems[]>();
  const { data } = useUserInfoQuery();
  const { data: cartItem } = useCartItemQuery();

  useEffect(() => {
    setCartItems(cartItem);
  }, [cartItem]);

  return (
    <div className={cn('authButton')}>
      {data?.data.data ? (
        <>
          <div className={cn('cartWrapper')}>
            <Link href={ROUTE.CART}>
              <Cart width={24} height={24} />
              <span className={cn('cartItemCount')}>{cartItems ? cartItems.length : 0}</span>
            </Link>
          </div>
          <Profile />
          {data.data.data.role !== '일반 회원' && (
            <Link href={ROUTE.ADMIN} className={cn('admin')}>
              관리자
            </Link>
          )}
        </>
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
