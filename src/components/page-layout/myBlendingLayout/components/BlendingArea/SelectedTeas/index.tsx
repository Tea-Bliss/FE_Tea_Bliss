'use client';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myBlendingLayout/components/BlendingArea/SelectedTeas/SelectedTeas.module.scss';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';

const cn = classNames.bind(styles);

export default function SelectedTeas() {
  const { selectedTeas } = useMyBlendingContext();

  return <div className={cn('cards')}>{}</div>;
}
