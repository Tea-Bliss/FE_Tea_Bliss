import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/common/Button';
import styles from '@/components/common/GlobalNavBar/component/MyInfo/MyInfo.module.scss';
const cn = classNames.bind(styles);

// TODO : 로그인 정보 api 연결 예정

export default function MyInfoContent() {
  return (
    <>
      <div className={cn('profile')}>
        <Image
          src={'/icons/다운로드.jpg'}
          width={105}
          height={105}
          className={cn('profileImage')}
          alt="프로필 이미지"
        />
        <p className={cn('userName')}>황준용</p>
      </div>
      <div className={cn('buttonWrapper')}>
        <Button shape="round" color="red">
          <Link className={cn('myInfoBtn')} href={'/'}>
            마이페이지
          </Link>
        </Button>
        <Button shape="round" color="white">
          <p className={cn('myInfoBtn')}>로그아웃</p>
        </Button>
      </div>
    </>
  );
}
