'use client';
import { useRef, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/common/GlobalNavBar/AuthButton/Profile.module.scss';
import MyInfo from '@/components/common/GlobalNavBar/MyInfo/MyInfo';
import useOutsideClick from '@/components/page-layout/adminLayout/hooks/useOutsideClick';

const cn = classNames.bind(styles);

export default function Profile() {
  const [showMyInfo, setShowMyInfo] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const toggleMyInfo = () => {
    setShowMyInfo((prev) => !prev);
  };
  useOutsideClick(ref, toggleMyInfo, toggleRef);

  return (
    <>
      <button onClick={toggleMyInfo} ref={toggleRef}>
        <span className={cn('profileContent')}>
          <Image
            src={'/icons/다운로드.jpg'}
            width={24}
            height={24}
            style={{ borderRadius: '999px' }}
            alt="프로필 이미지"
          />
          <span className={cn('profileName')}>황준용</span>
        </span>
      </button>
      {showMyInfo && <MyInfo toggle={toggleMyInfo} ref={ref} />}
    </>
  );
}
