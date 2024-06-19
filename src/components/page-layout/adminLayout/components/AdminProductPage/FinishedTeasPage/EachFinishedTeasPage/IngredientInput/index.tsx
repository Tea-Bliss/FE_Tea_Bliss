'use client';

import classNames from 'classnames/bind';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Image from 'next/image';

import DropDownInput from '@/components/page-layout/adminLayout/components/AdminProductPage/FinishedTeasPage/EachFinishedTeasPage/IngredientInput/DropDownInput';
import styles from '@/components/page-layout/adminLayout/components/AdminProductPage/FinishedTeasPage/EachFinishedTeasPage/IngredientInput/IngredientInput.module.scss';

const cn = classNames.bind(styles);

export default function IngredientInput() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredient',
  });

  return (
    <div className={cn('ingredients')}>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className={cn('ingredient')}>
            <div className={cn('ingredientInputs')}>
              <DropDownInput fieldIndex={index} />
            </div>
            <button type="button" onClick={() => remove(index)} className={cn('removeIngredient')}>
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
