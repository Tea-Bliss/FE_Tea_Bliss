import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/productListLayout/ProductNav/SideBar/Title/Title.module.scss';

const cn = classNames.bind(styles);

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return <p className={cn('title', className)}>{children}</p>;
}
