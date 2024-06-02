'use client';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import styles from '@/components/page-layout/myBlendingLayout/components/SortingMenu/TypeSortingList/TypeSortingList.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { TEA_TYPES } from '@/components/page-layout/myBlendingLayout/constants/standards';

const cn = classNames.bind(styles);

export default function TypeSortingList() {
  const [selectedTypes, setSelectedTypes] = useState<(typeof TEA_TYPES)[number][]>([]);

  const handleSelect = (type: (typeof selectedTypes)[number]) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes((prev) => [...prev].filter((data) => data !== type));
      return;
    }
    setSelectedTypes((prev) => [...prev, type]);
  };

  return (
    <ul className={cn('list')}>
      {TEA_TYPES.map((type, index) => {
        return (
          <li key={index}>
            <BlendingLabel isSelected={selectedTypes.includes(type)} onClick={() => handleSelect(type)}>
              {type}
            </BlendingLabel>
          </li>
        );
      })}
    </ul>
  );
}
