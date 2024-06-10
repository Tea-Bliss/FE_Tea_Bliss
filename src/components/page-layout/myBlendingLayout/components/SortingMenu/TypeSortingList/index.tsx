'use client';

import classNames from 'classnames/bind';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import styles from '@/components/page-layout/myBlendingLayout/components/SortingMenu/TypeSortingList/TypeSortingList.module.scss';
import { TEA_TYPES } from '@/components/page-layout/myBlendingLayout/constants/standards';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';

const cn = classNames.bind(styles);

export default function TypeSortingList() {
  const { filter, setFilter } = useMyBlendingContext();

  const handleSelect = (type: (typeof TEA_TYPES)[number]) => {
    if (filter.type.includes(type)) {
      setFilter((prev) => ({ ...prev, type: prev.type.filter((data) => data !== type) }));
      return;
    }

    setFilter((prev) => ({ ...prev, type: [...prev.type, type] }));
  };

  return (
    <ul className={cn('list')}>
      {TEA_TYPES.map((type, index) => {
        return (
          <li key={index}>
            <BlendingLabel isSelected={filter.type.includes(type)} onClick={() => handleSelect(type)}>
              {type}
            </BlendingLabel>
          </li>
        );
      })}
    </ul>
  );
}
