import { ComponentPropsWithRef, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/MyPageSubNav/KoNav/KoNav.module.scss';

const cn = classNames.bind(styles);

interface KoNavProps extends ComponentPropsWithRef<'div'> {}

export default function KoNav({ children, className }: KoNavProps) {
  return <div className={cn('koNav', className)}>{children}</div>;
}
