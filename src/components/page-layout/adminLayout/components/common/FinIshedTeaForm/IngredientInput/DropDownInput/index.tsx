'use client';

import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { useFormContext, useWatch } from 'react-hook-form';

import Image from 'next/image';

import DropDown from '@/components/common/DropDown/DropDown';
import DropDownContent from '@/components/common/DropDown/DropDownContent';
import CustomDropDownTrigger from '@/components/page-layout/adminLayout/components/common/FileInput/CustomDropDownTrigger';
import styles from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm/IngredientInput/DropDownInput/DropDownInput.module.scss';
import CATEGORIES from '@/components/page-layout/adminLayout/constants/categories';
import { useGetIngredients } from '@/components/page-layout/adminLayout/hooks/useManageIngredients';
import { LooseLeafTeaType } from '@/components/page-layout/adminLayout/types/productType';

const cn = classNames.bind(styles);

interface DropDownInputProps {
  fieldIndex: number;
  defaultValue?: number;
}

export default function DropDownInput({ fieldIndex, defaultValue }: DropDownInputProps) {
  const [items, setItems] = useState<LooseLeafTeaType[]>([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategoryValue, setSelectedCategoryValue] = useState({ name: '홍차', nameEng: 'Black' });
  const [isTeaOpen, setIsTeaOpen] = useState(false);
  const [selectedTeaValue, setSelectedTeaValue] = useState('');

  const { register, setValue } = useFormContext();

  const { data } = useGetIngredients({ page: 1, limit: 200 });

  useEffect(() => {
    if (!defaultValue) {
      setItems(data?.data.data.filter((tea: any) => tea.category === 'Black'));
      return;
    }

    const defaultIngredient = data?.data.data.find((tea: any) => tea.id === defaultValue);

    setSelectedCategoryValue({
      name: CATEGORIES.find((category) => category.nameEng === defaultIngredient?.category)?.name || '',
      nameEng: defaultIngredient?.category,
    });

    setSelectedTeaValue(defaultIngredient?.name);

    setItems(data?.data.data.filter((tea: any) => tea.category === defaultIngredient?.category));
  }, [defaultValue, data]);

  return (
    <>
      <DropDown className={cn('dropdown')} animation={true} defaultTitle="">
        <CustomDropDownTrigger setIsOpen={setIsCategoryOpen}>
          <input className={cn('textContainer')} value={selectedCategoryValue?.name} readOnly />
          <Image
            src="/icons/arrow.svg"
            alt="dropdown"
            width={14}
            height={14}
            className={cn('dropdownArrow', isCategoryOpen && 'visibleDropdown')}
          />
        </CustomDropDownTrigger>
        <DropDownContent className={cn('dropdownContent')}>
          {CATEGORIES.map((item, index) => {
            return (
              <button
                type="button"
                className={cn('dropdownButton')}
                key={index}
                onClick={() => {
                  setSelectedCategoryValue(item);
                  setSelectedTeaValue('');
                  setItems(data?.data.data.filter((tea: any) => tea.category === item?.nameEng));
                  setValue(`ingredient.${fieldIndex}`, '');
                }}
              >
                {item.name}
              </button>
            );
          })}
        </DropDownContent>
      </DropDown>

      <DropDown className={cn('dropdown')} animation={true} defaultTitle="">
        <CustomDropDownTrigger setIsOpen={setIsTeaOpen}>
          <div className={cn('textContainer')}>
            <Image
              src="/icons/arrow.svg"
              alt="dropdown"
              width={14}
              height={14}
              className={cn('dropdownArrow', isTeaOpen && 'visibleDropdown')}
            />
            {selectedTeaValue}
            <input
              className={cn('input')}
              type="number"
              {...register(`ingredient.${fieldIndex}`, {
                validate: {
                  shouldNumber: (value) => typeof value === 'number',
                },
              })}
            />
          </div>
        </CustomDropDownTrigger>
        <DropDownContent className={cn('dropdownContent')}>
          {items?.map((item, index) => {
            return (
              <button
                type="button"
                className={cn('dropdownButton')}
                key={index}
                onClick={() => {
                  setSelectedTeaValue(item.name);
                  setValue(`ingredient.${fieldIndex}`, item.id);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </DropDownContent>
      </DropDown>
    </>
  );
}
