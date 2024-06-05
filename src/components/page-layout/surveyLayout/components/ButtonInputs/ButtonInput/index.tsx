'use client';

import { InputHTMLAttributes, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';

import styles from '@/components/page-layout/surveyLayout/components/ButtonInputs/ButtonInput/ButtonInput.module.scss';

const cn = classNames.bind(styles);

interface ButtonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  item: string;
  name: string;
  isSelected: boolean;
  status: number;
}

export default function ButtonInput({ item, name, isSelected, status, ...props }: ButtonInputProps) {
  const [UIStatus, setUIStatus] = useState('');
  const { register } = useFormContext();

  useEffect(() => {
    if (name === 'price') {
      setUIStatus(status < 1 ? 'preparing' : status === 1 ? 'current' : 'done');
      return;
    }

    setUIStatus(status < 3 ? 'preparing' : status === 3 ? 'current' : 'done');
  }, [status]);

  return (
    <div className={cn('item')}>
      <input
        id={`${name}: ${item}`}
        className={cn('input')}
        type="radio"
        value={item}
        disabled={UIStatus === 'preparing'}
        {...props}
        {...register(name)}
      />
      <label
        htmlFor={`${name}: ${item}`}
        className={cn('customInput', isSelected && 'checked', UIStatus !== 'current' && 'unFocused')}
      >
        {item}
      </label>
    </div>
  );
}
