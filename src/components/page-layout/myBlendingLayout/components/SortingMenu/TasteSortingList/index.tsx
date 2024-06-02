'use client';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import styles from '@/components/page-layout/myBlendingLayout/components/SortingMenu/TasteSortingList/TasteSortingList.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { TASTE_TYPES } from '@/components/page-layout/myBlendingLayout/constants/standards';
import openToast from '@/components/common/Toast/features/openToast';

const cn = classNames.bind(styles);

export default function TasetSortingList() {
  const [selectedTastes, setSelectedTastes] = useState<(typeof TASTE_TYPES)[number][1][]>([]);

  const handleSelect = (taste: (typeof selectedTastes)[number]) => {
    if (selectedTastes.includes(taste)) {
      setSelectedTastes((prev) => [...prev].filter((data) => data !== taste));
      return;
    }
    if (selectedTastes.length === 3) {
      openToast('error', '맛은 3개까지 고르실 수 있습니다.');
      return;
    }
    setSelectedTastes((prev) => [...prev, taste]);
  };

  return (
    <ul className={cn('list')}>
      {TASTE_TYPES.map((type, index) => {
        return (
          <li key={index}>
            <BlendingLabel
              isSelected={selectedTastes.includes(type[1])}
              taste={type[0]}
              onClick={() => handleSelect(type[1])}
            >
              {type[1]}
            </BlendingLabel>
          </li>
        );
      })}
    </ul>
  );
}
