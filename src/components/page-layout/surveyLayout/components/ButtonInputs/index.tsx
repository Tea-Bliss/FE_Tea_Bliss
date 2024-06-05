'use client';

import { InputHTMLAttributes } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import classNames from 'classnames/bind';

import ButtonInput from '@/components/page-layout/surveyLayout/components/ButtonInputs/ButtonInput';
import styles from '@/components/page-layout/surveyLayout/components/ButtonInputs/ButtonInputs.module.scss';

const cn = classNames.bind(styles);

interface ButtonInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  items: string[];
  name: string;
  status: number;
}

export default function ButtonInputs({ items, name, status, ...props }: ButtonInputsProps) {
  const { control } = useFormContext();

  const selectedValue = useWatch({ control, name });

  return (
    <div className={cn('items')}>
      {items.map((item, index) => {
        return (
          <ButtonInput
            key={index}
            item={item}
            name={name}
            isSelected={selectedValue === item || false}
            status={status}
            {...props}
          />
        );
      })}
    </div>
  );
}
