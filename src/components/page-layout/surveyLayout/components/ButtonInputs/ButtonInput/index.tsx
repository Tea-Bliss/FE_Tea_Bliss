'use client';

import { InputHTMLAttributes, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';

import styles from '@/components/page-layout/surveyLayout/components/ButtonInputs/ButtonInput/ButtonInput.module.scss';

const cn = classNames.bind(styles);

interface ButtonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  item: { value: string | number; text: string };
  name: string;
  isSelected: boolean;
  status: number;
}

export default function ButtonInput({ item, name, isSelected, status, ...props }: ButtonInputProps) {
  const [UIStatus, setUIStatus] = useState(name === 'taste' ? 'current' : 'preparing');
  const { register } = useFormContext();

  useEffect(() => {
    if (name === 'taste') {
      setUIStatus(status > 0 ? 'done' : 'current');
      return;
    }

    if (name === 'sale') {
      setUIStatus(status < 1 ? 'preparing' : status === 1 ? 'current' : 'done');
      return;
    }

    setUIStatus(status < 3 ? 'preparing' : status === 3 ? 'current' : 'done');
  }, [status, name]);

  return (
    <div className={cn('item')}>
      <input
        id={`${name}: ${item.text}`}
        className={cn('input')}
        type="radio"
        value={item.value}
        disabled={UIStatus === 'preparing'}
        {...props}
        {...register(name)}
      />
      <label
        htmlFor={`${name}: ${item.text}`}
        className={cn('customInput', isSelected && 'checked', UIStatus !== 'current' && 'unFocused')}
      >
        {item.text}
      </label>
    </div>
  );
}
