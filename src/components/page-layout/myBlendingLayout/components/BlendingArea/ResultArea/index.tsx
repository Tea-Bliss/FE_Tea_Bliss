'use client';

import { ChangeEvent } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/myBlendingLayout/components/BlendingArea/ResultArea/ResultArea.module.scss';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';

const cn = classNames.bind(styles);

export default function ResultArea() {
  const { selectedTeas, myTeaName, setMyTeaName } = useMyBlendingContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMyTeaName(e.target.value);
  };

  return (
    <div className={cn('container')}>
      <Image src="/icons/kettle.svg" alt="주전자" width={58.9} height={39.1} />
      <div className={cn('decideTeaName')}>
        <h2 className={cn('teaName')}>Tea name</h2>
        <input
          className={cn('teaNameInput')}
          placeholder="차의 이름을 지어주세요."
          value={myTeaName}
          onChange={handleChange}
        />
      </div>
      <Link
        href={{ pathname: '/my-blending/result', query: { id: selectedTeas.map((tea) => tea.id), name: myTeaName } }}
      >
        <Button shape="square" color="black" disabled={!myTeaName || selectedTeas.length < 2}>
          나만의 티 만들기
        </Button>
      </Link>
    </div>
  );
}
