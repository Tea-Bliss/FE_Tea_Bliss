import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/productListLayout/ProductNav/SideBar/Content/Content.module.scss';

const cn = classNames.bind(styles);

interface ContentProps {
  children: ReactNode;
  className?: string;
}

export default function Content({ children, className }: ContentProps) {
  return <div className={cn('box', className)}>{children}</div>;
}
