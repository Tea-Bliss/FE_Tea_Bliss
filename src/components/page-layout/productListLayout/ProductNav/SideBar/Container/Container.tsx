import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/productListLayout/ProductNav/SideBar/Container/Container.module.scss';

const cn = classNames.bind(styles);

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn('container', className)}>{children}</div>;
}
