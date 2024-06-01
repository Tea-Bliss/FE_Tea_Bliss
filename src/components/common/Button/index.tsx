'use client';

import { ButtonHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/Button/Button.module.scss';

const cn = classNames.bind(styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCancel?: boolean;
}

interface SquareButtonProps extends ButtonProps {
  shape: 'square';
  color: 'red' | 'green';
}

interface RoundButtonProps extends ButtonProps {
  shape: 'round';
  color: 'white' | 'red';
}

export default function Button({
  shape,
  color,
  className,
  children,
  isCancel = false,
  ...props
}: SquareButtonProps | RoundButtonProps) {
  return (
    <button className={cn(className, shape, isCancel ? 'cancel' : color)} {...props}>
      {children}
    </button>
  );
}
