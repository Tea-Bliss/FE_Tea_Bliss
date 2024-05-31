'use client';
import { ButtonHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/Label/Label.module.scss';

import LABEL_TYPE from './constants/labelType';

type tasteType = keyof typeof LABEL_TYPE;
interface LabelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  taste?: tasteType;
}

const cn = classNames.bind(styles);

export default function Label({ children, isSelected, taste, ...props }: LabelProps) {
  return (
    <button className={cn('label', isSelected && taste ? `${taste}TasteSelected` : 'typeSelected')} {...props}>
      {children}
    </button>
  );
}
