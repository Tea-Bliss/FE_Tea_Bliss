'use client';

import { InputHTMLAttributes, MouseEventHandler, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';

import styles from '@/components/page-layout/surveyLayout/components/CheckBoxInputs/CheckBoxInput/CheckBoxInput.module.scss';

const cn = classNames.bind(styles);

interface CheckBoxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  item: string;
  name: string;
  isChecked: Boolean;
  handleClick: MouseEventHandler;
  status: number;
}

export default function CheckBoxInput({ item, name, isChecked, handleClick, status, ...props }: CheckBoxInputProps) {
  const [UIStatus, setUIStatus] = useState(name === 'taste' ? 'current' : 'preparing');
  const { register } = useFormContext();

  useEffect(() => {
    if (name === 'taste') {
      setUIStatus(status > 0 ? 'done' : 'current');
      return;
    }

    setUIStatus(status < 2 ? 'preparing' : status === 2 ? 'current' : 'done');
  });

  return (
    <div className={cn('item')}>
      <input
        id={`${name}: ${item}`}
        className={cn('input')}
        type="checkbox"
        value={item}
        disabled={UIStatus !== 'current'}
        {...props}
        {...register(name, { required: true })}
      />
      <label
        htmlFor={`${name}: ${item}`}
        data-name={name}
        data-item={item}
        className={cn('customInput', isChecked && 'checked', UIStatus !== 'current' && 'unFocused')}
        onClick={(e) => {
          if (UIStatus === 'preparing') return;
          handleClick(e);
        }}
      >
        {item}
      </label>
    </div>
  );
}
