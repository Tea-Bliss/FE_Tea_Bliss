'use client';

import React from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/myBlendingLayout/components/SelectArea/SelectFlavor/FlavorSelect/FlavorSelect.module.scss';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';
import { FlavorTypeEng } from '@/components/page-layout/myBlendingLayout/types/teaType';

const cn = classNames.bind(styles);

const flavors = {
  Sweet: '/images/my-blending/sweet.svg',
  Sour: '/images/my-blending/sour.svg',
  Floral: '/images/my-blending/floral.svg',
  Fruity: '/images/my-blending/fruity.svg',
  Spicy: '/images/my-blending/spicy.svg',
  Bitter: '/images/my-blending/bitter.svg',
};

interface FlavorSelectProps {
  flavor: FlavorTypeEng;
  className?: string;
}

export default function FlavorSelect({ flavor, className }: FlavorSelectProps) {
  const { filter, setFilter } = useMyBlendingContext();

  return (
    <div className={cn('container', className)} onClick={() => setFilter(flavor)}>
      <Image
        src={flavors[flavor]}
        alt={flavor}
        width={317.92}
        height={107.479}
        className={cn('image', filter === flavor && 'selected')}
      />
      <div className={cn('round', filter === flavor && 'selected')}></div>
    </div>
  );
}
