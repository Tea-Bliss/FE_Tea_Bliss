'use client';

import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCancel?: boolean;
  width: number;
  height: number;
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
  width,
  height,
  children,
  isCancel = false,
  ...props
}: SquareButtonProps | RoundButtonProps) {
  return (
    <button
      className={cx('shape', isCancel ? 'cancel' : 'color')}
      style={{ width: `${width}rem`, height: `${height}rem` }}
      {...props}
    >
      {children}
    </button>
  );
}
