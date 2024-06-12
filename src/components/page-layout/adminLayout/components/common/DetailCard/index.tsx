import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/adminLayout/components/common/DetailCard/DetailCard.module.scss';

const cn = classNames.bind(styles);

interface DetailAreaProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export default function DetailCard({ children, title, className }: DetailAreaProps) {
  return (
    <div className={cn('container', className)}>
      <div className={cn('title')}>{title}</div>
      <div className={cn('content')}>{children}</div>
    </div>
  );
}
