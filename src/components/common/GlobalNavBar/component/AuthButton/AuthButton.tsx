import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/components/common/GlobalNavBar/component/AuthButton/AuthButton.module.scss';
import ROUTE from '@/constants/route';
import Cart from '@/icons/cart.svg';

import Profile from './Profile';

const cn = classNames.bind(styles);
// TODO: 로그인 여부 확인 로직 구현 예정
export default function AuthButton() {
  const auth = true;
  return (
    <>
      {auth ? (
        <>
          <Link href={ROUTE.PAYMENT}>
            <Cart width={24} height={24} />
          </Link>
          <div className={cn('profile')}>
            <Profile />
          </div>
        </>
      ) : (
        <>
          <Link className={cn('authLink')} href={ROUTE.SIGN_IN}>
            로그인
          </Link>
          <Link className={cn('authLink')} href={ROUTE.SIGN_UP}>
            회원가입
          </Link>
        </>
      )}
    </>
  );
}
