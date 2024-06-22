'use client';
import { useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import Image from 'next/image';

import { getUserInfo } from '@/apis/getUserInfo';
import styles from '@/components/common/GlobalNavBar/AuthButton/Profile.module.scss';
import MyInfo from '@/components/common/GlobalNavBar/MyInfo/MyInfo';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';
import useOutsideClick from '@/hooks/useOutsideClick';

const cn = classNames.bind(styles);

export default function Profile() {
  const [showMyInfo, setShowMyInfo] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const { data } = useUserInfoQuery();

  const toggleMyInfo = () => {
    setShowMyInfo((prev) => !prev);
  };
  useOutsideClick(ref, toggleMyInfo, toggleRef);

  return (
    <>
      <button onClick={toggleMyInfo} ref={toggleRef}>
        <span className={cn('profileContent')}>
          {data.profile ? (
            <Image
              src={data.profile}
              width={24}
              height={24}
              style={{ borderRadius: '999px' }}
              alt="유저 프로필 이미지"
              placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            />
          ) : (
            <Image
              src={'/images/default_profile.png'}
              width={24}
              height={24}
              style={{ borderRadius: '999px' }}
              alt="기본 프로필 이미지"
            />
          )}
          <span className={cn('profileName')}>{data.nickname}</span>
        </span>
      </button>
      {showMyInfo && <MyInfo toggle={toggleMyInfo} ref={ref} />}
    </>
  );
}
