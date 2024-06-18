'use client';

import React from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/myBlendingLayout/components/SelectArea/SelectFlavor/FlavorSelect/FlavorSelect.module.scss';
import flavors from '@/components/page-layout/myBlendingLayout/constants/flavors';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';
import { FlavorTypeEng } from '@/components/page-layout/myBlendingLayout/types/teaType';

const cn = classNames.bind(styles);

interface FlavorSelectProps {
  flavorNumber: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export default function FlavorSelect({ flavorNumber, className }: FlavorSelectProps) {
  const { filter, setFilter } = useMyBlendingContext();

  const flavor = flavors[flavorNumber];

  return (
    <button className={cn('container', className)} onClick={() => setFilter(flavor.nameEng as FlavorTypeEng)}>
      <Image
        src={flavor.url}
        alt={flavor.name}
        width={317.92}
        height={107.479}
        className={cn('image', filter === flavor.nameEng && 'selected')}
      />
      <div className={cn('round', filter === flavor.nameEng && 'selected')}></div>

      <div className={cn('name')} style={{ rotate: `${flavorNumber * -60}deg` }}>
        <div className={cn('nameEng')}>{flavor.nameEng}</div>
        <div className={cn('nameKor')}>{`(${flavor.name})`}</div>
      </div>
    </button>
  );
}
