'use client';
import { ButtonHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/BlendingLabel/BlendingLabel.module.scss';

import LABEL_TYPE from './constants/labelType';

type tasteType = keyof typeof LABEL_TYPE;
interface LabelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  taste?: tasteType;
}

const cn = classNames.bind(styles);

export default function BlendingLabel({ children, isSelected, taste, ...props }: LabelProps) {
  return (
    <button
      className={cn(
        'label',
        { typeSelected: isSelected && !taste },
        { [`${taste}TasteSelected`]: isSelected && taste }
      )}
      {...props}
    >
      {children}
    </button>
  );
}
