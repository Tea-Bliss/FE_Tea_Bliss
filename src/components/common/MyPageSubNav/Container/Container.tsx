'use client';

import { ComponentPropsWithRef, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/MyPageSubNav/Container/Container.module.scss';

const cn = classNames.bind(styles);

interface ContainerProps extends ComponentPropsWithRef<'div'> {}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn('container', className)}>{children}</div>;
}
