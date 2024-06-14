'use client';

import { InputHTMLAttributes, MouseEvent } from 'react';

import classNames from 'classnames/bind';
import { useFormContext, useWatch } from 'react-hook-form';

import CheckBoxInput from '@/components/page-layout/surveyLayout/components/CheckBoxInputs/CheckBoxInput';
import styles from '@/components/page-layout/surveyLayout/components/CheckBoxInputs/CheckBoxInputs.module.scss';

const cn = classNames.bind(styles);

interface CheckBoxInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  items: { value: string | number; text: string }[];
  name: string;
  status: number;
  className?: string;
}

export default function CheckBoxInputs({ items, name, status, className, ...props }: CheckBoxInputsProps) {
  const { control, setValue, getValues } = useFormContext();

  const checkedValues = useWatch({ control, name });

  const handleClick = (e: MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const targetElement = e.target as HTMLLabelElement;
    const field = targetElement.dataset.name!;
    const value = targetElement.dataset.item!;
    const currentValues = getValues(field);

    if (!currentValues) {
      setValue(field, [value]);
      return;
    }

    if (currentValues.includes(value)) {
      setValue(
        field,
        currentValues.filter((item: string) => item !== value)
      );
      return;
    }

    if (!currentValues.includes('상관없음') && value === '상관없음') {
      setValue(field, ['상관없음']);
      return;
    }

    if (currentValues.includes('상관없음') && value !== '상관없음') {
      setValue(field, [value]);
      return;
    }

    setValue(field, [...currentValues, value]);
  };

  return (
    <div className={cn('items', className)}>
      {items.map((item, index) => {
        return (
          <CheckBoxInput
            key={index}
            item={item}
            name={name}
            isChecked={checkedValues?.includes(item)}
            status={status}
            handleClick={handleClick}
            {...props}
          />
        );
      })}
    </div>
  );
}
