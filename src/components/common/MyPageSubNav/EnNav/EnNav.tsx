import { ComponentPropsWithRef, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/MyPageSubNav/EnNav/EnNav.module.scss';

const cn = classNames.bind(styles);

interface EnNavProps extends ComponentPropsWithRef<'div'> {}

export default function EnNav({ children, className }: EnNavProps) {
  return <div className={cn('enNav', className)}>{children}</div>;
}
