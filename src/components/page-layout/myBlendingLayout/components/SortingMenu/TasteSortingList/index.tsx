'use client';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import styles from '@/components/page-layout/myBlendingLayout/components/SortingMenu/TasteSortingList/TasteSortingList.module.scss';
import classNames from 'classnames/bind';
import { TASTE_TYPES } from '@/components/page-layout/myBlendingLayout/constants/standards';
import openToast from '@/components/common/Toast/features/openToast';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';

const cn = classNames.bind(styles);

export default function TasetSortingList() {
  const { filter, setFilter } = useMyBlendingContext();

  const handleSelect = (taste: (typeof TASTE_TYPES)[number][1]) => {
    if (filter.taste.includes(taste)) {
      setFilter((prev) => ({ ...prev, taste: prev.taste.filter((data) => data !== taste) }));
      return;
    }
    if (filter.taste.length === 3) {
      openToast('error', '맛은 3개까지 고르실 수 있습니다.');
      return;
    }
    setFilter((prev) => ({ ...prev, taste: [...prev.taste, taste] }));
  };

  return (
    <ul className={cn('list')}>
      {TASTE_TYPES.map((type, index) => {
        return (
          <li key={index}>
            <BlendingLabel
              isSelected={filter.taste.includes(type[1])}
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
