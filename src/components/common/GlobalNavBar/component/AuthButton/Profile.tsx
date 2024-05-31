'use client';
import { useState } from 'react';

import Image from 'next/image';

import MyInfo from '../MyInfo/MyInfo';

export default function Profile() {
  const [showMyInfo, setShowMyInfo] = useState(false);

  const toggleMyInfo = () => {
    setShowMyInfo(!showMyInfo);
  };

  return (
    <>
      <button onClick={toggleMyInfo}>
        <Image
          src={'/icons/다운로드.jpg'}
          width={24}
          height={24}
          style={{ borderRadius: '999px' }}
          alt="프로필 이미지"
        />
      </button>
      {showMyInfo && <MyInfo toggle={toggleMyInfo} />}
    </>
  );
}
