import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/SubHeader/SubHeader.module.scss';

const cn = classNames.bind(styles);

interface SubHeaderProps {
  children: ReactNode;
}

export default function SubHeader({ children }: SubHeaderProps) {
  return (
    <header className={cn('header')}>
      <div className={cn('content')}>{children}</div>
    </header>
  );
}
