import { ComponentPropsWithRef, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/MyPageSubNav/Root/Root.module.scss';

const cn = classNames.bind(styles);

interface RootProps extends ComponentPropsWithRef<'nav'> {}

export default function Root({ children, className }: RootProps) {
  return <nav className={cn('nav', className)}>{children}</nav>;
}
