'use client';

import { ButtonHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/Button/Button.module.scss';

const cn = classNames.bind(styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

interface SquareButtonProps extends ButtonProps {
  shape: 'square';
  color: 'red' | 'green' | 'black' | 'white';
}

interface RoundButtonProps extends ButtonProps {
  shape: 'round';
  color: 'white' | 'red';
}

export default function Button({ shape, color, className, children, ...props }: SquareButtonProps | RoundButtonProps) {
  return (
    <button className={cn(className, shape, color)} {...props}>
      {children}
    </button>
  );
}
