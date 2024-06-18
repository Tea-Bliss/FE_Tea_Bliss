import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/productListLayout/ProductNav/SideBar/Root/Root.module.scss';

const cn = classNames.bind(styles);

interface RootProps {
  children: ReactNode;
  className?: string;
}

export default function Root({ children, className }: RootProps) {
  return <nav className={cn('nav', className)}>{children}</nav>;
}
