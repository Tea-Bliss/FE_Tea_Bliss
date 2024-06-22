import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/common/Button';
import styles from '@/components/common/GlobalNavBar/MyInfo/MyInfo.module.scss';
import ROUTE from '@/constants/route';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';

const cn = classNames.bind(styles);

export default function MyInfoContent() {
  const { data } = useUserInfoQuery();

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
        <Link className={cn('myInfoBtn')} href={ROUTE.MY_PAGE_MY_INFO}>
          <Button shape="round" color="red">
            마이페이지
          </Button>
        </Link>
        <Button shape="round" color="white">
          <p className={cn('myInfoBtn')}>로그아웃</p>
        </Button>
      </div>
    </>
  );
}
