'use client';

import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Image from 'next/image';

import DropDownInput from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm/IngredientInput/DropDownInput';
import styles from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm/IngredientInput/IngredientInput.module.scss';

const cn = classNames.bind(styles);

interface IngredientInputProps {
  defaultValue: number[];
}

export default function IngredientInput({ defaultValue }: IngredientInputProps) {
  const [defaultArray, setDefaultArray] = useState<any[]>([]);
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredient',
  });

  useEffect(() => {
    if (!defaultValue) return;
    setDefaultArray([...defaultValue]);
  }, [defaultValue]);

  return (
    <div className={cn('ingredients')}>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className={cn('ingredient')}>
            <div className={cn('ingredientInputs')}>
              <DropDownInput fieldIndex={index} defaultValue={defaultArray[index]} />
            </div>
            <button
              type="button"
              onClick={() => {
                remove(index);
                if (defaultArray[index]) {
                  setDefaultArray((prev) => {
                    const newArray = [...prev];
                    newArray[index] = undefined;
                    return newArray;
                  });
                }
              }}
              className={cn('removeIngredient')}
            >
              <Image src="/icons/trashcan.svg" alt="지우기" width="20" height="20" />
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => append('')} className={cn('addIngredientButton')}>
        추가하기
      </button>
    </div>
  );
}
