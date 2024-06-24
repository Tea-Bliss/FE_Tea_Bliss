'use client';

import { InputHTMLAttributes, MouseEventHandler, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';

import styles from '@/components/page-layout/surveyLayout/components/CheckBoxInputs/CheckBoxInput/CheckBoxInput.module.scss';

const cn = classNames.bind(styles);

interface CheckBoxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  item: { value: string | number; text: string };
  name: string;
  isChecked: Boolean;
  handleClick: MouseEventHandler;
  status: number;
}

export default function CheckBoxInput({ item, name, isChecked, handleClick, status, ...props }: CheckBoxInputProps) {
  const [UIStatus, setUIStatus] = useState('');
  const { register } = useFormContext();

  useEffect(() => {
    setUIStatus(status < 2 ? 'preparing' : status === 2 ? 'current' : 'done');
  }, [name, status]);

  return (
    <div className={cn('item')}>
      <input
        id={`${name}: ${item.text}`}
        className={cn('input')}
        type="checkbox"
        value={item.value}
        disabled={UIStatus !== 'current'}
        {...props}
        {...register(name)}
      />
      <label
        htmlFor={`${name}: ${item.text}`}
        data-name={name}
        data-item={item.value}
        className={cn('customInput', isChecked && 'checked', UIStatus !== 'current' && 'unFocused')}
        onClick={(e) => {
          if (UIStatus === 'preparing') return;
          handleClick(e);
        }}
      >
        {item.text}
      </label>
    </div>
  );
}
