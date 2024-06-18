'use client';

import classNames from 'classnames/bind';

import SelectedTeaCard from '@/components/page-layout/myBlendingLayout/components/BlendingArea/SelectedTeas/SelectedTeaCard';
import styles from '@/components/page-layout/myBlendingLayout/components/BlendingArea/SelectedTeas/SelectedTeas.module.scss';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';

const cn = classNames.bind(styles);

export default function SelectedTeas() {
  const { selectedTeas } = useMyBlendingContext();

  return (
    <div className={cn('cards')}>
      {Array.from({ length: 3 }, (_, i) => (selectedTeas[i] !== undefined ? selectedTeas[i] : null)).map((tea, i) => {
        return <SelectedTeaCard key={i} tea={tea} />;
      })}
    </div>
  );
}
