import { ComponentProps, ComponentPropsWithRef, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/MyPageSubNav/Box/Box.module.scss';

const cn = classNames.bind(styles);

interface BoxProps extends ComponentPropsWithRef<'button'> {}

export default function Box({ children, className, ...rest }: BoxProps) {
  return (
    <button className={cn('box', className)} {...rest}>
      {children}
    </button>
  );
}
