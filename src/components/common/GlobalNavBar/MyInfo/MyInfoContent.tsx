'use client';
import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/common/Button';
import { MyInfoProps } from '@/components/common/GlobalNavBar/MyInfo/MyInfo';
import styles from '@/components/common/GlobalNavBar/MyInfo/MyInfo.module.scss';
import ROUTE from '@/constants/route';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';

const cn = classNames.bind(styles);

interface MyInfoContentProps extends MyInfoProps {}

export default function MyInfoContent({ toggle }: MyInfoContentProps) {
  const { data } = useUserInfoQuery();

  const handleLogoutClick = () => {
    toggle();
    localStorage.removeItem('token');
    document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = ROUTE.HOME;
  };
  return (
    <>
      <div className={cn('profile')}>
        {data.profile ? (
          <Image
            src={data.profile}
            width={105}
            height={105}
            className={cn('profileImage')}
            alt="유저 프로필 이미지"
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
          />
        ) : (
          <Image
            src={'/images/default_profile.png'}
            width={105}
            height={105}
            style={{ borderRadius: '999px' }}
            alt="기본 프로필 이미지"
          />
        )}
        <p className={cn('userName')}>{data.nickname}</p>
      </div>
      <div className={cn('buttonWrapper')}>
        <Link className={cn('myInfoBtn', 'red')} href={ROUTE.MY_PAGE_MY_INFO} onClick={toggle}>
          마이페이지
        </Link>
        <button className={cn('myInfoBtn')} type="button" onClick={() => handleLogoutClick()}>
          로그아웃
        </button>
      </div>
    </>
  );
}
